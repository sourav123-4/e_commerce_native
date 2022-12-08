import {DefaultTheme} from '@react-navigation/native';
import {extendTheme} from 'native-base';

export const customTheme = extendTheme({
  colors: {
    green: {
      300: '#538175',
      400: '#87ab69',
    },
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      300: '#538175',
      400: '#87ab69',
      500: '#95DBE5FF',
      600: 'white',
    },
  },
  fontWeights: {},
});

export const nativeTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    heading: 'white',
    background: '#87ab69',
  },
  fonts: {
    ...DefaultTheme.fonts,
    Size: 16,
    Weight: '800',
  },
};
