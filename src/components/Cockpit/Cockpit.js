import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = props => {
  useEffect(() => {
    console.log('Cockpit.js: useEffect');

    setTimeout(() => {
      alert('props.persons changed');
    }, 1000);
  }, [props.persons]); //pass  [] if only needs useEffect in the initial time

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
