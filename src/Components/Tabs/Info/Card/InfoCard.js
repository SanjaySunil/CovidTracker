/**
 * @file InfoCard.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const para1 = `Most people infected with the COVID-19 virus
 will experience mild to moderate respiratory illness
and recover without requiring special treatment.  Older people,
 and those with underlying medical problems like
 cardiovascular disease, diabetes, chronic respiratory disease,
 and cancer are more likely to develop serious illness.`;

const para2 = `The best way to prevent and slow down transmission
 is to be well informed about the COVID-19 virus,
the disease it causes and how it spreads. Protect yourself and
others from infection by washing your hands or using
an alcohol based rub frequently and not touching your face. `;

const para3 = `The COVID-19 virus spreads primarily through droplets
 of saliva or discharge from the nose when an infected
person coughs or sneezes, so it’s important that you also practice
 respiratory etiquette (for example, by coughing into a flexed elbow).`;

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
  link: {
    '&': {
      fontSize: '20px',
      color: '#9e9e9e',
      textDecoration: 'none',
      transition: '0.25s',
    },
    '&:hover': {
      color: '#fff',
      transition: '0.25s',
    },
  },
}));

const HomeCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.logo}>
        <Grid container wrap="nowrap" spacing={12}>
          <Grid item xs>
            <Typography className={classes.title}>Information</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={2} className={classes.paper}>
        <Grid container wrap="nowrap" spacing={12}>
          <Grid item xs>
            <Typography className={classes.message}>{para1}</Typography>
            <br />
            <Typography className={classes.message}>{para2}</Typography>
            <br />
            <Typography className={classes.message}>{para3}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={2} className={classes.paper}>
        <Grid container wrap="nowrap" spacing={12}>
          <Grid item xs>
            <Typography align="center"><a className={classes.link} href="https://www.who.int/health-topics/coronavirus#tab=tab_1" rel="noreferrer" target="_blank">More information on the WHO website</a></Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default HomeCard;
