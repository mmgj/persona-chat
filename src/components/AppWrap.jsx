import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import { StateInspector } from 'reinspect';
import { StateProvider } from 'state';
import Elizabeth from 'lib/Elizabeth';

import theme from 'theme/persona-theme';

const globalStyle = css`
  html {
    body {
      ${theme.setup}
      font-family: ${theme.fonts.body};
      font-size: 62.5%;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      margin: 0;
    }
  }
`;

const eliza = new Elizabeth('eliza');
const mona = new Elizabeth('mona');

const initialState = {
  conversation: [],
  eliza,
  mona,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addMessage': {
      return {
        ...state,
        conversation: [...state.conversation, action.payload], // ⬅ Should be action.payload, fix at next opportunity.
      };
    }
    default:
      return state;
  }
};

const AppWrap = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyle} />
    <StateInspector name="all">
      <StateProvider initialState={initialState} reducer={reducer}>
        {children}
      </StateProvider>
    </StateInspector>
  </ThemeProvider>
);

export default AppWrap;
