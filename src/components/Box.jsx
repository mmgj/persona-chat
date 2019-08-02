import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getRandomArbitrary } from 'lib/helpers';

const degToRad = rad => (rad * Math.PI) / 180;

const marksTheSpot = (x1, y1, l, ang) => {
  const xPos = x1 + l * Math.cos(ang);
  const yPos = y1 + l * Math.sin(ang);
  return { x: xPos, y: yPos };
};

const Wrap = styled.picture`
  svg {
    ${p =>
    p.flip
      && 'transform: rotateY(180deg); float: right; margin-right: 15px; margin-left: -5px;'} /* transform: rotateZ(-5deg); */
      .bubble-connect {
      transform: translateY(calc(50% - 40px)) translateX(100px);
    }
  }
`;
const Box = ({ invert, dimensions }) => {
  const { width, height } = dimensions;

  const front = invert ? 'white' : 'black';
  const back = invert ? 'black' : 'white';

  const ang = degToRad(1.92);

  const tlX = 100; // point(25, mod);
  const tlY = 80; // point(40, mod);
  const trX = marksTheSpot(tlX, tlY, width, ang).x + 90; // width + 55; // point(width + 55, mod);
  const trY = marksTheSpot(tlX, tlY, width, ang).y - 30; // point(25, mod);
  const brX = trX - 50; // point(width + 25, mod);
  const brY = trY + height + 50; // point(height - 25, mod);
  const blX = tlX; // point(5, mod);
  const blY = tlY + height; // point(height - 40, mod);

  return (
    <Wrap flip={invert}>
      <svg height={height + 180} width={width + 220}>
        <polygon
          points={`${tlX},${tlY} ${trX},${trY} ${brX},${brY} ${blX},${blY}`}
          style={{ fill: back, fillOpacity: '1' }}
        />
        <g id="connector" className="bubble-connect">
          <polygon
            className="st0"
            points="20.1,49.2 -8.5,60.5 -24.5,44.5 -62.5,82.5 -27.5,69.5 -18.5,85.5 17.7,80.2 "
            style={{ fill: front, stroke: back, strokeWidth: 5 }}
          />
        </g>
        <polygon
          points={`${tlX + 10},${tlY + 10} ${trX - 25},${trY + 5} ${brX
            - 5},${brY - 15} ${blX + 10}, ${blY - 5}`}
          style={{ fill: front }}
        />
      </svg>
    </Wrap>
  );
};
Box.propTypes = {};

export default Box;
