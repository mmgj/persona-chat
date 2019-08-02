import React, { useLayoutEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import useDimensions from 'react-use-dimensions';
import PropTypes from 'prop-types';

import Box from 'components/Box';

const IMBody = styled.div`
  position: absolute;
  ${p => (p.invert ? 'right: 150px; text-align: left;' : 'margin-left: 120px;')}
  color: ${p => (p.invert ? 'black' : 'white')};
  top: 80px;
  max-width: 70%;
  font-size: 1.4rem;
  z-index: 10;
  transform-origin: 0% 50%;
  transform: translateX(1%);
  height: auto;
  padding: 20px 10px;
`;

const Inner = styled.div`
  position: relative;
  display: block;
  width: auto;
`;

const JankyBox = ({ invert, children }) => {
  const [ref, { x = 0, y = 0, width = 0, height = 0 }] = useDimensions();

  return (
    <Inner>
      <IMBody ref={ref} invert={invert}>
        {children}
      </IMBody>
      <Box dimensions={{ x, y, width, height }} invert={invert} />
    </Inner>
  );
};

JankyBox.propTypes = {};

export default JankyBox;
