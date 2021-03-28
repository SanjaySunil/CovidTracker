/**
 * @file HomeStats.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: '20px',
  },
  item: {
    maxWidth: 1050,
    margin: `${theme.spacing(1)}px auto`,
    marginBottom: '15px',
    padding: theme.spacing(3),
  },
  count: {
    fontSize: '3vh',
    fontWeight: 'bolder',
  },
  lastUpdated: {
    '&': {
      fontSize: '20px',
      color: 'grey',
      textDecoration: 'none',
      transition: '0.25s',
    },
    '&:hover': {
      color: '#fff',
      transition: '0.25s',
    },
  },
}));

const HomeStats = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles();

  if (!confirmed) {
    return (
      <div className={classes.root}>
        <div className={classes.item}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>
                <span className={classes.count}>Loading ...</span>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper elevation={3} className={classes.paper}>
              <span className={classes.count}>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                /></span>
              <br />
              <span style={{
                color: '#ff453a',
              }}
              >Infected</span>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} className={classes.paper}>
              <span className={classes.count}>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                /></span>
              <br />
              <span style={{
                color: '#ff453a',
              }}
              >Deaths</span>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>
              <span className={classes.count}>
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                /></span>
              <br />
              <span style={{
                color: '#ff453a',
              }}
              >Recovered</span>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>
              <span className={classes.lastUpdated}>
                Last updated on {new Date(lastUpdate).toDateString()}
              </span>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomeStats;
