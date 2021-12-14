import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Votes = ({votes, index}) => {
  return (
    <div>
      {`${votes[index]} votes`}
    </div>
  )
}

const Title = ({text}) => {
  return <h1>{text}</h1>
}

const Favorite = ({array,votes}) => {
 let max = null;
  for (let quoteIndex in votes){
   
   if(max === null ||   votes[quoteIndex] > votes[max]){
      max = quoteIndex
   }

 }

  return (
    <p>{array[max]}</p>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  })
  const handleNext= () => {
    let arrayIndex = Math.floor(Math.random() * 7)
    if (arrayIndex !== selected){
      setSelected(arrayIndex)
    }
   else {
     arrayIndex === 0 ? arrayIndex = arrayIndex + 1 : arrayIndex = arrayIndex - 1;
     setSelected(arrayIndex)
   }
 
}

const handleVote = () => {
  setVotes({...votes, [selected]: votes[selected] + 1})
  console.log(votes)
  console.log(selected)
}
const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  return (
    <>
      <div>
      <Title text="dumb quote of the day" />
      {anecdotes[selected]}
     </div> 
     <Votes votes={votes} index={selected}/>
     <Button text="vote" onClick={handleVote}/>
    <Button onClick={handleNext} text="next anecdote"/>
    <Title text="favorite dumb quote" />
<Favorite votes={votes} array={anecdotes}/>
    </>
    
  )
}

export default App