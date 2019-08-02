/**
 * This sets up a very lightweight App State based on React Context API
 * with a familiar reducer / actions / dispatcher syntax, and also exposes
 * this to Redux Devtools which is good and not bad.
 * More info here: https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
 * ...and here: https://github.com/troch/reinspect
 */
import React, { createContext, useContext } from 'react';
import { useReducer } from 'reinspect';
import PropTypes from 'prop-types';

export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider
    value={useReducer(reducer, initialState, undefined, 'app-reducer')}
  >
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
};
