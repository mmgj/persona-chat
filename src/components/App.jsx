import React from 'react';
import styled from '@emotion/styled';
import AppWrap from 'components/AppWrap';
import Typety from './Typety';
import Chat from './Chat';

const CenterBox = styled.main`
  width: 90vw;
  height: calc(100vh - 100px);
  min-width: 500px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
  overflow-y: scroll;
`;

const ChatterFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  height: 60px;
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
  input {
    font-size: 20px;
  }
`;
function App() {
  return (
    <AppWrap>
      <CenterBox>
        <Chat />
      </CenterBox>
      <ChatterFooter>
        <Typety />
      </ChatterFooter>
    </AppWrap>
  );
}

export default App;
