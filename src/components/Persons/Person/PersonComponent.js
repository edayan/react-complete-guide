import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilliary';

export default class PersonComponent extends Component {
  constructor(props) {
    super(props);
    console.log('PersonComponent.js: constructor');
  }

  render() {
    console.log('PersonComponent.js: render');
    return (
      /**
       * Instead of custom 'Aux' we can use React.Fragment.
       */
      <Aux>
        {/* [ */}
        {/** wraping multiple items into a [] and separating them with commas
        and them giving each items a key will work in the same way as returning
        a single item. 'Aux' is not needed if we wrap with [] */}
        <div key={'i1'}>Person header</div>
        {/* , */}
        <div key={'i2'} className={classes.Person}>
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
        {/* ];  */}
        {/* * warpping ends here */}
      </Aux>
    );
  }
}
