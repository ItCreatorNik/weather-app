import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';



const initialState = {
    citiesWeather: localStorage.getItem("citiesWeather")
        ? JSON.parse(localStorage.getItem("citiesWeather"))
        : [],
    isLoading: false,
    error: null,
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        failLoading: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            toast.error(`${state.error}`, {
                position: "top-left",
            });
        },
        finishLoading: (state, { payload }) => {
            state.isLoading = false;
            state.error = null;


            const check = state.citiesWeather.find(
                (item) => item.name === payload.name
            );

            if (!check) {
                state.citiesWeather.push(payload);
                localStorage.setItem("citiesWeather", JSON.stringify(state.citiesWeather))
            } else {
                toast.error(`${payload.name} has been alredy added`, {
                    position: "top-left",
                });
            }
        },
        finishUpdating: (state, { payload }) => {

            const check = state.citiesWeather.findIndex(
                (item) => item.name === payload.name
            );

            if (check >= 0) {
                state.citiesWeather[check] = payload;
                toast.info(`${payload.name} refreshed`, {
                    position: "top-left",
                });
            }

            localStorage.setItem("citiesWeather", JSON.stringify(state.citiesWeather));
        },

        deleteCity: (state, { payload }) => {
            const filteredCities = state.citiesWeather.filter(
                (item) => item.name !== payload
            );


            state.citiesWeather = filteredCities;
            toast.success(`Removed ${payload} `, {
                position: "top-left",
            });

            localStorage.setItem("citiesWeather", JSON.stringify(state.citiesWeather));

        },
    },

});

export const { startLoading, failLoading, finishLoading, finishUpdating, deleteCity } = weatherSlice.actions

export default weatherSlice.reducer

// move to selectors.js or weatherSelectors.js
export const selectCities = (state) => state.weather.citiesWeather
