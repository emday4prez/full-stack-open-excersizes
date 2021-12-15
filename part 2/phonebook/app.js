import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const handleNameChange = (e) => {
    setNewName(e.target.value)
    console.log(newName)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    console.log(filter)
    
    
  }


  const handleSubmit = (e) => {
     e.preventDefault();
    const result = persons.find(({name}) => name === newName);
    if(result){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons([...persons, {name: newName, number: newNumber}])
      
    }
        
    console.log(persons)
   
    
  }
  

  ;

    const res = persons.filter(obj => Object.values(obj).some(val => val.includes(filter)));
  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>filter</p><input onChange={handleFilterChange} />
      </div>
      
      <h2> add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>number: <input onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      <div>{
        res.map((person, i) => {
        return (
          <p key={i} >{person.name} {person.number}</p>
        )
      })}</div>
    </div>
  )
}

export default App