import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClassWrapper';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class PersonComponent extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext; //only react > 16.6

  componentDidMount() {
    //older way for ref
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('PersonComponent.js: render');
    return (
      <Aux>
        {/* //'withClass already has wrapping div with className={Person} */}
        {/* <div key={'i2'} className={this.props.Person}> */}

        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please login</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={inputEl => { this.inputElement = inputEl;  }}//older way for ref
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* </div> */}
      </Aux>
    );
  }
}

PersonComponent.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(PersonComponent, classes.Person);
