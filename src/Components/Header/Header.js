/**
 * @file Header.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CovidTracker by Sanjay Sunil
          </Typography>
          <a href="https://github.com/sanjaysunil/covidtracker" rel="noreferrer" target="_blank" className={classes.button}>
            <IconButton aria-label="GitHub" color="inherit">
              <GitHubIcon />
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
