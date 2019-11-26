import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import PersonsComponent from '../components/Persons/PersonsComponent';
import AuthContext from '../context/auth-context';
import WithClass from '../hoc/WithClass';
import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js: constructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockPit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps = (props, state) => {
    console.log('App.js: getDerivedStateFromProps:', props, state);
    return state;
  };

  /**
   * older lifecycle gives waring
   */
  // componentWillMount() {
  //   console.log('App.js: componentWillMount:');
  // }

  shouldComponentUpdate() {
    console.log('App.js: shouldComponentUpdate:');
    return true;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    /**
     * deprecated way
     */
    // this.setState({
    //   persons: persons,
    //   changeCounter: this.state.changeCounter + 1 // wrong way, when there is a state change based on previous state go correct way
    // });

    // correct way when there is a state change based on previous state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('App.js: render:');
    let persons = null;
    let personsComponent = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );

      personsComponent = (
        <PersonsComponent
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => this.setState({ showCockPit: false })}>
          Remove cockPit
        </button>
        <h1>{this.props.title}</h1>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockPit ? (
            <Cockpit
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              clicked={this.togglePersonsHandler}
            />
          ) : null}

          {/* {persons} */}
          {personsComponent}
        </AuthContext.Provider>
      </WithClass>
    );
  }

  componentDidMount() {
    console.log('App.js: componentDidMount:');
  }

  componentDidUpdate() {
    console.log('App.js: componentDidUpdate:');
  }
}

export default App;
