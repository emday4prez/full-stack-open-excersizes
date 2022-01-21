import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
const AnecdoteList = () => {
 const dispatch = useDispatch()
 const anecdotes = useSelector(state => state.anecdotes) 
  const addVote = (id) => {
    dispatch(vote(id))
  }
 return (
  <>
   <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
  </>
 )
}

export default AnecdoteList;