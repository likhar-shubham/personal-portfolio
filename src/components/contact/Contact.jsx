import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, Container, Typography, Button } from '@mui/material';
import InputField from '../common/InputField';

function Contact(props) {
    return (
        <>

            <Box sx={{ display: 'flex', mb: 2, flexDirection: "column" }}>
                {/* { xs: 'none', md: 'flex' } */}
                <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: { xs: 40, md: 75 }, color: "text.tertiary" }} >
                        CONTACT
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: '50vh', minWidth: '90vw' }}>
                    <Typography sx={{ color: 'text.tertiary' }} >
                        Fill up the below form
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            display: "flex",mb:1, justifyContent: "center", alignItems: "center", flexDirection: "column",
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <InputField
                            label={"Name"}
                        />
                        <InputField
                            label={"E-mail Address"}
                        />
                        <InputField
                            label={"Enter your message"}
                            multiline={true}
                        />
                        <Button variant="contained">SUBMIT</Button>
                    </Box>
                </Box>
            </Box>

        </>
    );
}

Contact.propTypes = {}

export default Contact
