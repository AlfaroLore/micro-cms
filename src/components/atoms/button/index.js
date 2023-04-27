import React from 'react';
import PropTypes from 'prop-types';

function Button({ title }) {
  return (
    <button className="py-2 px-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg">{title}</button>
  );
}

Button.propTypes = {
  title: PropTypes.string
};

export default Button;
