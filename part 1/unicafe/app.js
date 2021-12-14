import React, { useState } from 'react'



const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Title = ({text}) => {
 return (
  <h1>{text}</h1>
 )
}

const Stats = (props) => {
  if (!props.hasFeedback){
   return <p>please choose one</p>
  }
 return (
  <div>
      <Stat name="good" value={props.good}/>
      <Stat name="neutral" value={props.neutral}/>
      <Stat name="bad" value={props.bad}/>
      <Stat name="total" value={props.total}/>
      <Stat name="averageScore" value={props.averageScore}/>
      <Stat name="percentPositive" value={props.percentPositive}/>
      
     </div>
 )
}

const Stat = ({name, value}) => {

 return (
  <div>
  <p>{`${name}: ${value}`}</p>
 
 </div>
 )
 
}
const App = () => {
  const [goodVotes, setGoodVotes ] = useState(0)
  const [neutralVotes, setNeutralVotes] = useState(0)
  const [badVotes, setBadVotes] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);

 
 let total = (goodVotes + neutralVotes + badVotes);

  
 const positive = (good, total) => {
  const result = good / total;
  if (Number.isNaN(result)) return 0;
  return Math.round(result * 1000) / 1000;
 }
const percentPositive = positive(goodVotes, total);

 const averageScore = ((goodVotes - badVotes) / total) * 10;

 const handleClick = (value) => {
  setHasFeedback(true)
  
  if (value === "good" ) {
   setGoodVotes(goodVotes + 1)
  }else if ( value === "neutral"){
   setNeutralVotes(neutralVotes + 1)
  }else if (value === "bad"){
   setBadVotes(badVotes + 1)
  }
  
 }

const statProps = {
    hasFeedback: hasFeedback,
    good: goodVotes,
    neutral: neutralVotes,
    bad: badVotes,
    total: total,
    averageScore: averageScore,
    percentPositive: percentPositive,
  };
  return (
       <div>
      <Title text="give feedback" />
      <Button
        onClick={() => handleClick("good")}
        text='good'
      />
      <Button
        onClick={() => handleClick("neutral")}
        text='neutral'
      />     
      <Button
        onClick={() => handleClick("bad")}
        text='bad'
      />         
      <Title text="statistics" />  
      <Stats {...statProps} />
    </div>
  )
}


export default App