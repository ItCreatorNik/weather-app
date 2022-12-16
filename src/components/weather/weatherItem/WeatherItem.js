import * as React from 'react';
import { CardActions } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import CachedIcon from '@mui/icons-material/Cached';
import { updateWeather } from '../../../store/thunks/update-weather';
import { deleteCity } from '../../../store/slice/weatherSlice';
import { Link } from 'react-router-dom';

export const WeatherItem = ({ name, city }) => {

    const dispatch = useDispatch();

    const nameForRoute = name.toLowerCase()
    const onUpdate = (name) => {
        dispatch(updateWeather(name));
    }

    const deleteCityWeather = (name) => {
        dispatch(deleteCity(name))
    }

    return (<>
        {city.length === 0 ? (<div>No cities added</div>) : (

            <Card sx={{ maxWidth: 345 }} style={{
                minWidth:"250px"
            }}>
                <CardActions style={{
                    display: "flex",
                    justifyContent: "space-around",
                }}>
                    <IconButton color="success" variant="contained" size="small" onClick={() => onUpdate(name)}>
                        <CachedIcon />
                    </IconButton>
                    <IconButton variant="contained" color="error" onClick={() => deleteCityWeather(name)}>
                        <ClearIcon />
                    </IconButton>
                </CardActions>
                <Link to={`/${nameForRoute}/forecast`} style={{ textDecoration: "none" }}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div" align='center' style={{ color:"black", textTransform:"uppercase" }}>
                            {city.name}, {city.sys.country}
                        </Typography>
                        <img style={{margin:"0 auto", display:"block"}}
                      src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                      alt={city.weather[0].description}
                    />
                        <Typography gutterBottom variant="h5" component="div" align='center' style={{ color: "black",  }}>
                            {(city.main.temp - 273.15).toFixed(0)}°C
                        </Typography>
                        <Typography variant="body1" color="text.secondary" align='center'>
                            Feels like: {(city.main.feels_like - 273.15).toFixed(0)} °C
                        </Typography>
                        <Typography variant="body1" color="text.secondary" align='center'>
                            {city.weather[0].main}
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
        )}
    </>

    );
}
