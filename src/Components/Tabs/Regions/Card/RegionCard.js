/**
 * @file RegionCard.js
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
}));

const RegionCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.logo}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography className={classes.title}>Regions</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default RegionCard;
