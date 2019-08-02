import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useStateValue } from 'state';

import Msg from 'components/Msg';

const LogBox = styled.div`
  min-height: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: flex-end;

  > div {
    margin-left: -50px;
  }
`;

const Chat = () => {
  const [{ conversation, eliza }, dispatch] = useStateValue();
  setTimeout(() => eliza.hello(dispatch), 2000);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [conversation]);
  return (
    <LogBox>
      {conversation.map(msg => (
        <Msg from={msg.from}>{msg.txt}</Msg>
      ))}
      <div ref={messagesEndRef} />
    </LogBox>
  );
};

Chat.propTypes = {};

export default Chat;
