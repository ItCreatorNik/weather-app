import { failLoading, finishUpdating, startLoading } from "../slice/weatherSlice";

const key = process.env.REACT_APP_API_KEY;

export function updateWeather(name) {
    return function (dispatch) {


        dispatch(startLoading(null));

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`)
            .then((response) => response.json())
            .then((city) => {
                dispatch(finishUpdating(city));
            })
            .catch((error) => {
                dispatch(failLoading(error));
            });
    };
}