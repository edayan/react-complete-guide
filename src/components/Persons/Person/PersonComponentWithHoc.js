import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilliary';
import classes from './Person.css';
import withClass from '../../../hoc/withClassWrapper';

class PersonComponent extends Component {
  render() {
    console.log('PersonComponent.js: render');
    return (
      <Aux>
        <div key={'i2'} className={this.props.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

export default withClass(PersonComponent, classes.Person);