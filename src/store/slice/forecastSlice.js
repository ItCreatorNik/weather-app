import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';



const initialState = {
    city: {},
    isLoading: false,
    error: null
}

const forecastSlice = createSlice({
    name: "forecast",
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
            state.city = payload

            state.isLoading = false;
            state.error = null;

        }
    },

});

export const { startLoading, failLoading, finishLoading } = forecastSlice.actions

export const selectCityForecast = (state) => state.forecast.city;
export const selectCityForecastLoading = (state) => state.forecast.isLoading;

export default forecastSlice.reducer;

