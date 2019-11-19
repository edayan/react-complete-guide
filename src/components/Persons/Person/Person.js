import React from 'react';
import classes from './Person.css';

const person = props => {
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error('something went wrong');// this is to test Error boundary
  }
  console.log('person.js redering');
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

// export default Radium(person);
export default person;
