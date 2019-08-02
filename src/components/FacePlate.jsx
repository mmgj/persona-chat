import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const FacePlate = ({ color, face, ...props }) => (
  <>
    <svg height={181} width={285} {...props}>
      <path d="M82.5 182L.7 1l244 28 38.6 108.6z" />
      <path fill="#fff" d="M94.5 159L28.8 19.7l210.4 16.2 32.6 90.5z" />
      <path fill={color} d="M98.3 149.3L47.7 33.5l187.7 4.9 29.2 84z" />
    </svg>

    <img alt="User avatar" src={face} />
  </>
);

FacePlate.defaultProps = {
  color: '#ccc',
};

FacePlate.propTypes = {
  face: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default FacePlate;
