import React, { Component } from 'react';
import PersonComponent from './Person/PersonComponent';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class PersonsComponent extends Component {
  constructor(props) {
    super(props);
    console.log('PersonsComponent.js: constructor');
  }
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <PersonComponent
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            changed={event => this.props.changed(event, person.id)}
          />
        </ErrorBoundary>
      );
    });
  }
}
