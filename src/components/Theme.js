import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#01FFA9',
      darker: '#000000',
    },
    secondary: {
      main: '#000000',
      contrastText: '#01FFA9',
    },
    third: {
      main: '#000000',
      contrastText: '#01FFA9',
    }
  },
});


export default theme