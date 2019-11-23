import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = props => {
  useEffect(() => {
    console.log('Cockpit.js: useEffect 1');

    const timer = setTimeout(() => {
      console.log('Cockpit.js:   changed');
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('Cockpit.js:  clean up in useEffect 1'); // equivalent to 'componentWillUnmount' from componet
    };
  }, []); // []: only needs useEffect in the initial time

  useEffect(() => {
    console.log('Cockpit.js: props.persons useEffect');

    const timer = setTimeout(() => {
      console.log('Cockpit.js: props.persons changed');
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('Cockpit.js: props.persons clean up in useEffect'); // equivalent to 'componentWillUnmount' from componet
    };
  }, [props.persons]); //only executes useEffect in the props.persons

  useEffect(() => {
    console.log('Cockpit.js: 3rd useEffect');

    return () => {
      console.log('Cockpit.js: clean up  in 3rd useEffect'); // runs for every update cycle as there is no argument
    };
  }); // no argument

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
