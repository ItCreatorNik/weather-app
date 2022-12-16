import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const AddCity = ({ value, onSubmit, onChange }) => {
    return (

        <form onSubmit={onSubmit}>
            <Stack
                direction="row"
                justifyContent="center"
                marginTop="50px"
                marginBottom="50px"
                gap="10px"
            >
                <TextField id="outlined-basic" label="Add City" variant="outlined" value={value} onChange={onChange} />
                <Button variant="contained" type='submit' size='medium'>Add City</Button>
            </Stack>
        </form>
    )
}


