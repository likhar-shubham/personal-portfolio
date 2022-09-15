import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, Container, Typography, Button } from '@mui/material';
import InputField from '../common/InputField';
import DialogBox from '../common/DialogBox';

function Contact(props) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");


    const handleSubmit = () => {
        const msgObj = {};
        msgObj["name"] = name;
        msgObj["email"] = email;
        msgObj["msg"] = msg;
        localStorage.setItem("msgObj", JSON.stringify(msgObj));
        setName("");
        setEmail("");
        setMsg("");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                            display: "flex", mb: 1, justifyContent: "center", alignItems: "center", flexDirection: "column",
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <InputField
                            label={"Name"}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <InputField
                            label={"E-mail Address"}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <InputField
                            label={"Enter your message"}
                            multiline={true}
                            value={msg}
                            onChange={(event) => setMsg(event.target.value)}
                        />
                        <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
                    </Box>
                    <DialogBox
                        open={open}
                        handleClose={handleClose}
                    />
                </Box>
            </Box>

        </>
    );
}

Contact.propTypes = {}

export default Contact
