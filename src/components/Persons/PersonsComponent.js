import React, { Component } from 'react';
import PersonComponent from './Person/PersonComponent';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class PersonsComponent extends Component {
  constructor(props) {
    super(props);
    console.log('PersonsComponent.js: constructor');
  }

  /**
   *
   * Gives warning without inititilizing 'state' in the component
   */
  //   static getDerivedStateFromProps(props, state) {
  //     console.log('PersonsComponent.js: getDerivedStateFromProps');
  //     return state;
  //   }

  /**
   *
   * deprecated lifecycle:componentWillReceiveProps
   */
  //   componentWillReceiveProps(props) {
  //     console.log('PersonsComponent.js: componentWillReceiveProps', props);
  //   }

  /**
   * deprecated lifecycle:componentWillUpdate
   */
  // componentWillUpdate() {}

  shouldComponentUpdate(nextProps, nextState) {
    console.log('PersonsComponent.js: shouldComponentUpdate');
    return true; // return true/false is must: true for update component
  }

  render() {
    console.log('PersonsComponent.js: render');
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

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('PersonsComponent.js: getSnapshotBeforeUpdate');
    return { message: 'this is the snapshot' }; // expected message or null return to avoid warning
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log('PersonsComponent.js: componentDidUpdate');
    console.log(snapShot);
  }
}
