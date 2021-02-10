import { createMuiTheme } from '@material-ui/core/styles';
import {
  DARK_PRIMARY,
  DARK_SECONDARY,
  DARK_SUCCESS,
} from '../Resources/Colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: DARK_PRIMARY },
    secondary: { main: DARK_SECONDARY },
    success: { main: DARK_SUCCESS },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.8em',
      },
    },
  },
  typography: {
    fontFamily: [
      'Rubik',
    ].join(','),
  },
});

export default theme;
