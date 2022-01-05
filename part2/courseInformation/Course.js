import React from 'react'

const Header = ({course}) =>{
  return (<h1>
    {course}
  </h1>
  );
};

const Part = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({parts}) => {
 return (
  <div>
    {parts.map((part, i) =>
      <Part key={i} part={part.name} exercises={part.exercises} />
    )}
  </div>
 );
};
  

const Total = ({parts}) => {
  return (
    <p>
      Number of exercises{" "}
      {parts.reduce((sum, part) => {
       return sum + part.exercises;
      }, 0)}
    </p>
  );
};

const Course = ({courses}) =>
  <div>
    {courses.map(course =>
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )}
  </div>

export default Course