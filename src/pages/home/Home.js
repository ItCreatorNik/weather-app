import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCity } from '../../components/addCity/AddCity'
import { WeatherList } from '../../components/weather/weatherList/WeatherList'
import { selectCities } from '../../store/slice/weatherSlice'
import { loadWeather } from '../../store/thunks/load-weather'
import styles from './Home.module.scss'

export const Home = () => {

    const [city, setCity] = useState('');

    const dispatch = useDispatch();

    const cities = useSelector(selectCities);


    const onSubmit = (e) => {
        e.preventDefault();
        
        if (city.length <= 3) return;
        const checkValid = city.match(/^[А-Яа-яЁё -]+$/g);

        if (checkValid !== null) return;

        dispatch(loadWeather(city));
        setCity('')
    }


    return (
        <div>
            <AddCity value={city} onChange={(e) => setCity(e.target.value)} onSubmit={onSubmit}/>
            <WeatherList />
        </div>
    )
}
