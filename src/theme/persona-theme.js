import { colors, media } from './base';

const primaryFont = 'Heebo';
const secondaryFont = 'Roboto';
const tertiaryFont = secondaryFont;

const setup = `
    @import url('https://fonts.googleapis.com/css?family=Heebo:900|Roboto&display=swap');
`;

export default {
  name: 'Persona 5',
  setup,
  fonts: {
    body: primaryFont,
    headings: secondaryFont,
    ui: tertiaryFont,
  },
  media,
  colors,
};
