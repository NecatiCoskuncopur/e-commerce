import { createGlobalStyle } from 'styled-components';

export const colors = {
  athensGray: '#F7F8FA',
  aquaHaze: '#F2F6F7',
  blackHaze: '#EBEEEE',
  catSkillWhite: '#E4ECF2',
  charade: '#282B38',
  comet: '#5C617F',
  firefly: '#071C1F',
  gallery: '#EEEEEE',
  geyser: '#DEE2E6',
  gossamer: '#0A9A73',
  main: '#FFFFFF',
  mineShaft: '#333333',
  mirage: '#171B2A',
  mystic: '#E5EAEE',
  nevada: '#5C727D',
  shark: '#212529',
  titanWhite: '#E1E6FF',
  webOrange: '#FFA500',
  wildSand: '#F6F6F6',
};

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    list-style: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    &:focus {
      outline: none
    }
  };
  body {
    font-style: normal;
    color: ${colors.firefly};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
  }
  p, span {
    color: ${colors.nevada};
    line-height: 1.8;
  }
`;

export const sizes = {
  widescreen: 1440,
  desktop: 1280,
  laptop: 1024,
  tablet: 768,
  phone: 640,
  mini: 425,
};
export const device = {
  widescreen: '(max-width: 1440px)',
  desktop: '(max-width: 1280px)',
  laptop: '(max-width: 1024px)',
  tablet: '(max-width: 768px)',
  phone: '(max-width: 640px)',
  mini: '(max-width: 425px)',
};
