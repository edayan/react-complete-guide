import React, { Component } from 'react';
import classes from './Person.css';

export default class PersonComponent extends Component {
  constructor(props) {
    super(props);
    console.log('PersonComponent.js: constructor');
  }

  render() {
    console.log('PersonComponent.js: render');
    return (
      <div className={classes.Person}>
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
    );
  }
}
