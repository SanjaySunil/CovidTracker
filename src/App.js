/**
 * @file App.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import React from 'react';
import theme from './Theme/Theme';

import { Header, Navigation } from './Components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Paper style={{ minHeight: '100vh' }}>
        <Header />
        <Navigation />
      </Paper>
    </MuiThemeProvider>
  );
};

export default App;
