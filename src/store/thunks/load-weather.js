import { failLoading, finishLoading, startLoading } from "../slice/weatherSlice";


const key = process.env.REACT_APP_API_KEY;



export function loadWeather(name) {
    return function (dispatch) {


        dispatch(startLoading());

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`)
            .then((response) => response.json())
            .then((city) => {
                if (city.cod !== 200) {
                    throw new Error(city.message);
                }
                dispatch(finishLoading(city));
            })
            .catch((error) => {
                dispatch(failLoading(error));
            });
    };
}
