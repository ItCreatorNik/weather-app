import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import { Temperature } from "../temperature/Temperature";
import { kelvinConverter } from "../../../utils/kelvinToCelsius";

export const ForecastItem = ({ weekDay, weekDayData }) => {
    const temperature = weekDayData.map(day => {
        const getTime = day.dt_txt.split(' ')[1];
        return { temp: kelvinConverter(day.main.temp), time: getTime };
    })

    console.log(weekDayData);
    return (
        <Accordion>
            <AccordionSummary>
                <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <img src={`http://openweathermap.org/img/wn/${weekDayData[0].weather[0].icon}.png`} alt="weather" />
                        <Typography variant="h6">{weekDay}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography>{weekDayData[0].weather[0].description}</Typography>
                        <Typography>{Math.round(weekDayData[0].main.temp_max)}°C /{Math.round(weekDayData[0].main.temp_min)}°C</Typography>
                    </Stack>
                </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ pb: 5, pl: 5 }}>
                <Temperature temperature={temperature} />
                <Stack direction="row" mt={5}>
                    <Typography mr={1}>Pressure:</Typography>
                    <Typography>{weekDayData[0].main.pressure}</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography mr={1}>Humidity:</Typography>
                    <Typography>{weekDayData[0].main.humidity}</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography mr={1}>Clouds:</Typography>
                    <Typography>{weekDayData[0].clouds.all}%</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography mr={1}>Wind speed:</Typography>
                    <Typography>{weekDayData[0].wind.speed} m/s</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography mr={1}>Sea level:</Typography>
                    <Typography>{weekDayData[0].main.sea_level}m</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography mr={1}>Feels like:</Typography>
                    <Typography>{weekDayData[0].main.feels_like}°C</Typography>
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}
