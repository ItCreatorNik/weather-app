import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import moment from "moment"


export const TemperatureChip = ({degree, date}) => {
    return (
        <Stack direction="column">
            <Chip label={Math.round(degree) > 0 ? `+${Math.round(degree)}` : Math.round(degree)} />
            <span>{weekDays[moment(date).day()]}</span>
        </Stack>
    )
}
