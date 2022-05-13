import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input(props) {
  const { changeHandler } = props;

  return( 
    <input className="input" maxLength="7" type="text" onChange={(e) => changeHandler(e)} />
  )
}

Input.propTypes = {
  changeHandler : PropTypes.func.isRequired
}

export default Input;