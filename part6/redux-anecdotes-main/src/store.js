import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import anecdoteReducer, { initializeQuotes } from "./reducers/anecdoteReducer"
import notificationReducer from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAll } from './services/anecdotes'

export const reducer = combineReducers({
 anecdotes: anecdoteReducer,
 notification: notificationReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

getAll().then(anecdotes => 
  anecdotes.forEach(quote => {
    store.dispatch(initializeQuotes(quote))
  }))

export default store;