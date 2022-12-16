import React from 'react';
import { useSelector } from 'react-redux';
import { selectCities } from '../../../store/slice/weatherSlice';
import { WeatherItem } from '../weatherItem/WeatherItem';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const WeatherList = () => {

  const cities = useSelector(selectCities)

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Grid container spacing={2} gap="15px" justifyContent="center">
          {cities && cities.map((city, key) => {
           return (<WeatherItem city={city} {...city} key={key} />) }
          )}
        </Grid>
      </Container>
    </>
  )
}







