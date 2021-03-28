/**
 * @file HomeCard.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 1000,
    margin: `${theme.spacing(1)}px auto`,
    marginBottom: '15px',
    padding: theme.spacing(2),
  },
  logo: {
    maxWidth: 1000,
    margin: `${theme.spacing(1)}px auto`,
    marginBottom: '3%',
    backgroundColor: '#333333',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  title: {
    fontSize: '5vh',
    fontWeight: 'bold',
  },
  message: {
    fontSize: '20px',
  },
}));

const overview = `Coronavirus disease (COVID-19) is an infectious disease
caused by a newly discovered coronavirus.`;

const paragraph = `A disease was first identified in December 2019 in China.
The World Health Organization (WHO) declared the outbreak of COVID-19 a pandemic
on the 11 March 2020.`;

const HomeCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.logo}>
        <Grid container wrap="nowrap" spacing={12}>
          <Grid item xs>
            <Typography className={classes.title}>CovidTracker</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={2} className={classes.paper}>
        <Grid container wrap="nowrap" spacing={12}>
          <Grid item xs>
            <Typography className={classes.message}>{overview}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={2} className={classes.paper}>
        <Grid container wrap="nowrap" spacing={12}>
          <Grid item xs>
            <Typography className={classes.message}>{paragraph}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default HomeCard;
