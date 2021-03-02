import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#49525A",
      white:"#F7FCFA",
    },
    primary: {
      main: '#4EB799',
      contrastText: "#F7FCFA",
    },
    secondary: {
      main: '#CB4C07',
      contrastText: "#F7FCFA",
    }
  }
});

export default theme;