import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Paper, Box, Container, Typography } from '@mui/material';


function InputField(props) {
    return (
        // <Box
        //     component="form"
        //     sx={{
        //         '& .MuiTextField-root': { m: 1, width: '25ch' },
        //     }}
        //     noValidate
        //     autoComplete="off"
        // >
        <TextField
            id="outlined-text-input"
            label={props.label}
            type="text"
            color='primary'
            // autoComplete="current-password"
            sx={{
                m: 1,
                minWidth: "50vw",
                input: { color: 'text.tertiary' },
                textAreaStyle: { color: "text.tertiary" },
                "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                        borderColor: "text.tertiary",
                        color: "blue"
                        // textAreaStyle:{color:"text.tertiary"},
                    }
                },
                " & .MuiOutlinedInput-input": {
                    color: "text.tertiary"
                }

            }}
            multiline={props.multiline}
            rows={props.multiline ? 4 : false}


        />
        // </Box>

    )
}

InputField.propTypes = {}

export default InputField
