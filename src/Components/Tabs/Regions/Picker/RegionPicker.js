import React, { useState, useEffect } from 'react';

import { NativeSelect, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { fetchCountries } from '../../../../API';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  picker: {
    maxWidth: 1000,
    margin: `${theme.spacing(1)}px auto`,
    marginBottom: '3%',
    backgroundColor: 'transparent',
    textAlign: 'center',
    boxShadow: 'none',
  },
}));

const RegionPicker = ({ handleCountryChange }) => {
  const classes = useStyles();

  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.picker}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormControl>
              <NativeSelect
                defaultValue=""
                onChange={(e) => handleCountryChange(e.target.value)}
              >
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => (
                  <option key={i} value={country}>
                    {' '}
                    {country}{' '}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default RegionPicker;
