import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
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
        marginBottom: "15px",
        padding: theme.spacing(2),
    },
    logo: {
        maxWidth: 1000,
        margin: `${theme.spacing(1)}px auto`,
        marginBottom: "3%",
        backgroundColor: "#333333",
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    message: {
        fontSize: "20px",
    },
    logotext: {
        fontSize: "50px",
    }
}));

const para1 = `Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness 
and recover without requiring special treatment.  Older people, and those with underlying medical problems like
 cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.`;
const para2 = `The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, 
the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using 
an alcohol based rub frequently and not touching your face. `
const para3 = `The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected 
person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).`

const HomeCard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.logo}>
                <Grid container wrap="nowrap" spacing={12}>
                    <Grid item xs>
                        <Typography className={classes.logotext}>Information</Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={2} className={classes.paper}>
                <Grid container wrap="nowrap" spacing={12}>
                    <Grid item xs>
                        <Typography className={classes.message}>{para1}</Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={2} className={classes.paper}>
                <Grid container wrap="nowrap" spacing={12}>
                    <Grid item xs>
                        <Typography className={classes.message}>{para2}</Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={2} className={classes.paper}>
                <Grid container wrap="nowrap" spacing={12}>
                    <Grid item xs>
                        <Typography className={classes.message}>{para3}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default HomeCard;