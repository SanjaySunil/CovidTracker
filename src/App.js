import React from 'react';
import theme from './theme/theme';

import {Header, Navigation} from './components';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Paper style={{minHeight: '100vh'}}>
        <Header />
        <Navigation />
      </Paper>
    </MuiThemeProvider>
  );
};

export default App;
