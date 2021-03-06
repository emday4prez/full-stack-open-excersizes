import { createNew, getAll } from "../services/anecdotes"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

  export const vote = (id) => {
    console.log('vote', id)
    return {
      type: 'VOTE',
      data: { id }
    }
  }
  export const createAnecdote = (anecdote) => {
     return async dispatch => {
    const newQuote = await createNew(anecdote)
    dispatch({
      type: 'NEW_POST',
      data: newQuote,
    })
  }
  }
  
  export const initializeQuotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'NEW_POST':
    return state.concat(action.data)
    case 'INIT_QUOTES':
      return action.data
    case 'VOTE': {
      const id = action.data.id 
      const toVoteFor = state.find(n => n.id === id)
      const votedFor = {
        ...toVoteFor,
        votes: toVoteFor.votes + 1
      }
      return state.map(post => 
        post.id !== id ? post : votedFor 
        )
  }
  default:
    return state
  }
}
export default anecdoteReducer 

