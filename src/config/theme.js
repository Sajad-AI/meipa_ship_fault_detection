import { createTheme } from '@mui/material/styles';

import '@fontsource/manrope';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Manrope',
    h5: {
      fontWeight: 800
    },
    subtitle1: {
      fontWeight: 700
    }
  },
  shape: {
    borderRadius: 8
  },
  palette: {
    primary: {
      main: '#223189'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: '#DA100B'
    },
    success: {
      main: '#1F8B24'
    },
    info: {
      main: '#616161'
    }
  }
});

export default theme;
