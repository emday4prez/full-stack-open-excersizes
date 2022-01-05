import React from 'react'


export default function Filter({handleFilterChange, persons, filter}) {
 return (
  <div>
   <p>filter</p><input onChange={handleFilterChange} />
  </div>
 )
}
