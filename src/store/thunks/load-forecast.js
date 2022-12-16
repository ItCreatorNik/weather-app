import { failLoading, finishLoading, startLoading } from "../slice/forecastSlice";
export function loadForecast(city) {
    return function (dispatch) {
        dispatch(startLoading());
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
            .then((response) => response.json())
            .then((city) => {
                dispatch(finishLoading(city));
            })
            .catch((error) => {
                dispatch(failLoading(error));
            });
    };
}
