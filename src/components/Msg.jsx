import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

import Bubble from 'components/Bubble';

import Face from './Face';

const FaceBox = styled.div`
  width: 200px;
  margin-top: 5%;
`;

const SpeechBox = styled.div`
  width: auto;
  flex-grow: 1;
  z-index: 10;
`;

const Message = styled.div`
  display: flex;
  align-items: flex-start;
  margin: -3% auto;
  width: 100%;
  &.reply {
    margin-right: 50px;
    ${SpeechBox} {
      margin-right: -110px;
    }
  }
`;

const Msg = ({ from, children }) => {
  const isReply = from === 'you';
  return (
    <Message className={isReply ? 'reply' : 'not-reply'}>
      {!isReply && (
        <FaceBox>
          <Face who={from} />
        </FaceBox>
      )}
      <SpeechBox>
        <Bubble invert={isReply}>{children}</Bubble>
      </SpeechBox>
      {isReply && (
        <FaceBox>
          <Face flip={isReply} who={from} color="lightblue" />
        </FaceBox>
      )}
    </Message>
  );
};

Msg.defaultProps = {
  from: 'Anon',
};

Msg.propTypes = {
  from: PropTypes.string,
};

export default Msg;
