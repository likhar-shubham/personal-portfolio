import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Paper, Box, Container, Typography } from '@mui/material';


function InputField(props) {
    return (
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
                    }
                },
                " & .MuiOutlinedInput-input": {
                    color: "text.tertiary"
                }

            }}
            multiline={props.multiline}
            rows={props.multiline ? 4 : undefined}
            value={props.value}
            onChange={props.onChange}

        />

    )
}

InputField.propTypes = {}

export default InputField
