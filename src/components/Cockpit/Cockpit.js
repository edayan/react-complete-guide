import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('Cockpit.js: useEffect 1');

    const timer = setTimeout(() => {
      console.log('Cockpit.js:   changed');
    }, 1000);
    toggleBtnRef.current.click();
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
  }, [props.persons]); //only executes useEffect in the props.persons// removed passing props.persons and put props.personsLength in App.js so this will not work.

  useEffect(() => {
    console.log('Cockpit.js: 3rd useEffect');

    return () => {
      console.log('Cockpit.js: clean up  in 3rd useEffect'); // runs for every update cycle as there is no argument
    };
  }); // no argument

  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
