import React, { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

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

    
  
  

  return (
    <div>
      <h2>Phonebook</h2>
     <Filter handleFilterChange={handleFilterChange} persons={persons} filter={filter}/>
      
      <h2> add a new</h2>
      <Form  handleSubmit={handleSubmit} handleNumberChange={handleNumberChange} handleNameChange={handleNameChange}/>
    
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
     
    </div>
  )
}

export default App