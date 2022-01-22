
import { createStore, combineReducers } from 'redux'
import anecdoteReducer, { initializeQuotes } from "./reducers/anecdoteReducer"
import notificationReducer from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAll } from './services/anecdotes'

export const reducer = combineReducers({
 anecdotes: anecdoteReducer,
 notification: notificationReducer
})

const store = createStore(reducer, composeWithDevTools())

getAll().then(anecdotes => 
  anecdotes.forEach(quote => {
    store.dispatch(initializeQuotes(quote))
  }))

export default store;