import React from 'react'

export default function Persons({persons, filter}) {
 const res = persons.filter(obj => Object.values(obj).some(val => val.includes(filter)));
 return (
   <div>{
        res.map((person, i) => {
        return (
          <p key={i} >{person.name} {person.number}</p>
        )
      })}</div>
 )
}