import React, { PureComponent } from 'react';
//import PersonComponent from './Person/PersonComponent';
import PersonComponent from './Person/PersonComponentWithHoc';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class PersonsComponent extends PureComponent {
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

  /**
   * some times it needs to check all props has changed, then use pure component, which will check all the component changed internally
   */
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('PersonsComponent.js: shouldComponentUpdate');
  //   if (

  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.name !== this.props.name ||
  //     nextProps.age !== this.props.age

  //   ) {
  //     // only update if the persons changed
  //     return true; // return true/false is must: true for update component
  //   } else {
  //     return false;
  //   }
  // }

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

  componentWillUnmount() {
    console.log('PersonsComponent.js: componentWillUnmount');
  }
}
