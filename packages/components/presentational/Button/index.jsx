/* Component  : Button Component
 * Created on : 29/8/2019 7:35:26 PM
 * Created by : VAIBHAV SHRINGARPURE
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  clickHandler: PropTypes.func
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  className: '',
  children: null,
  clickHandler: () => null
};

/* Functional Component Function below */
const Button = props => {
  //Define your Methods Here
  const {className, children, clickHandler} = props;
  //Returns JSX below
  return (
    <button className={`btn ${className}`} onClick={clickHandler}>{children}</button>
  );
};

Button.propTypes = propTypes; // from Line 11
Button.defaultProps = defaultProps; // from Line 17

export default Button;
