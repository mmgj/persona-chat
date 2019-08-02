import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import you from '../assets/avatars/avatar_you.png';
import eliza from '../assets/avatars/avatar_eliza.png';
import mona from '../assets/avatars/avatar_mona.png';
import FacePlate from './FacePlate';

const leftClip = '0 0, 100% 0, 100% 72%, 0% 84%';
const rightClip = '100% 0, 90% 73%, 84% 86%, 0% 69%, 0 0';

const Avatar = styled.div`
  height: 60px;
  min-width: 120px;
  position: relative;
  svg {
    transform: scale(0.8) ${p => p.flip && 'rotateY(180deg)'};
  }
  img {
    position: absolute;
    top: -40px;
    margin: 0 auto;
    margin-left: ${p => p.flip || '41px'};
    z-index: 20;
    transform: scale(0.7);
    clip-path: polygon(${p => (p.flip ? rightClip : leftClip)});
  }
`;

const folks = {
  eliza: { avatar: eliza, color: '#ff17fd' },
  you: { avatar: you, color: 'yellow' },
  mona: { avatar: mona, color: 'darkblue' },
};

const Face = ({ flip, who }) => (
  <Avatar flip={flip}>
    <FacePlate color={folks[who].color} face={folks[who].avatar} />
  </Avatar>
);

Face.defaultProps = {
  flip: false,
};

Face.propTypes = {
  flip: PropTypes.bool,
};

export default Face;
