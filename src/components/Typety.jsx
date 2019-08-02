import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStateValue } from 'state';
import { rnd } from '../lib/helpers';

let tim;

const Typety = () => {
  const [entry, setEntry] = useState('');
  const [{ eliza, mona }, dispatch] = useStateValue();

  function handleSubmit(ev) {
    ev.preventDefault();
    const msg = entry;
    dispatch({
      type: 'addMessage',
      payload: { from: 'you', txt: msg },
    });
    setEntry('');
    eliza.consider(msg, dispatch);
    tim = setTimeout(() => {
      mona.consider(msg, dispatch);
    }, rnd(5000, 10000));
  }

  function handleType(ev) {
    setEntry(ev.target.value);
    clearTimeout(tim);
  }

  return (
    <form>
      <input id="chatbox" type="text" value={entry} onChange={handleType} />
      <button htmlFor="chatbox" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

Typety.propTypes = {};

export default Typety;
