import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { useDispatch } from 'react-redux'
import { getAll } from './services/anecdotes'
import { initializeQuotes } from './reducers/anecdoteReducer'


const App = () => {

  const dispatch = useDispatch()
  useEffect(()=> {
      getAll().then(quotes => dispatch(initializeQuotes(quotes)))
  },[dispatch])

  return (
    <div>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App