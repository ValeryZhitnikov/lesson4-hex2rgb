import React from 'react';
import PropTypes from 'prop-types';
import './Output.css';

function Output(props) {
  const { rgb } = props;
  return( rgb ? <div className="output">{rgb}</div> : '' );
}

Output.propTypes = {
  rgb : PropTypes.string
}

export default Output;