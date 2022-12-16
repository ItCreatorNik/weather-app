import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {loadForecast} from "../../store/thunks/load-forecast";
import {useDispatch, useSelector} from "react-redux";
import {selectCityForecast, selectCityForecastLoading} from "../../store/slice/forecastSlice";
import Container from '@mui/material/Container';
import ReactCountryFlag from "react-country-flag"
import Stack from '@mui/material/Stack';
import {ForecastItem} from "../../components/forecast/forecastItem/ForecastItem";
import moment from "moment"

const numbersToWeekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const WeatherDetails = () => {
    const dispatch = useDispatch();
    const isForecastLoading = useSelector(selectCityForecastLoading)
    const cityForecast = useSelector(selectCityForecast)
    const { name } = useParams()

    const periods = cityForecast.list?.reduce((accum, item) => {
        const currentDay = numbersToWeekDays[moment(item.dt_txt).day()];
        if(accum[currentDay]) {
            accum[currentDay].push(item);
            return accum;
        } else {
            accum[currentDay] = [];
            accum[currentDay].push(item);
            return accum;
        }
    }, {})

    useEffect(() => {
        dispatch(loadForecast(name))
    }, [name, dispatch]);


    return isForecastLoading ? 'Loading...' :
        (<Container maxWidth="lg" >
            <Stack direction="row" alignItems="center" spacing={2}>
                <h1>{cityForecast.city?.name}</h1>
                <ReactCountryFlag
                    countryCode={cityForecast.city?.country}
                    style={{
                        fontSize: '2em',
                        lineHeight: '2em',
                    }}
                />
            </Stack>
            <h2>Forecast</h2>
            <Stack direction="column">
                {WEEK_DAYS.map((dayName,idx) => periods && periods[dayName] ? (<ForecastItem key={idx} weekDay={dayName} weekDayData={periods[dayName]}/>) : false )}
            </Stack>
        </Container>)
}
