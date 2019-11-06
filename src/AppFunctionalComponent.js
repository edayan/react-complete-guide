import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('Some other value'); //user another useState so that state doesn't need to merge

  console.log(otherState, personState);
  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'maxmillion', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ] // as otherState is added using a separate useState it doesn't need to merge.
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        My Hobbies: Lesen und Music Horen
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default App;
