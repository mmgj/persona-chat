import ElizaNode from 'elizanode';

export default class Elizabeth {
  constructor(name = 'eliza') {
    this.name = name;
    this.bot = new ElizaNode();
    this.timmy = null;
    this.breakSilence = true;
  }

  hello(dispatch) {
    if (this.breakSilence) {
      const msg = this.bot.getInitial();
      dispatch({
        type: 'addMessage',
        payload: { from: this.name, txt: msg },
      });
      this.breakSilence = false;
    }
  }

  consider(input, dispatch) {
    const output = this.riddleMeThis(input);
    clearTimeout(this.timmy);
    this.timmy = setTimeout(
      () =>
        dispatch({
          type: 'addMessage',
          payload: output,
        }),
      1500,
    );
  }

  riddleMeThis(input) {
    const reply = this.bot.transform(input);
    return { from: this.name, txt: reply };
  }
}
