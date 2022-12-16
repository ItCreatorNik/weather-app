import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import weatherReducer from "./slice/weatherSlice"
import forecastReducer from "./slice/forecastSlice";

const rootReducer = combineReducers({
    weather: weatherReducer,
    forecast: forecastReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
