import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, Container, Typography } from '@mui/material';
import ResumeButton from './ResumeButton';
import ContactSpeedDial from '../common/ContactSpeedDial';
import AboutPage from '../about/AboutPage';
import MySkills from '../skills/MySkills';
import Contact from '../contact/Contact';
import { Routes, Route, Outlet } from 'react-router-dom';


function Content(props) {
    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mt: 10, flexDirection: "column", minHeight: 'calc(90vh - 100px)', }}>
                <Typography sx={{ color: "text.primary", fontSize: 40 }}>
                    Hi there! This is
                </Typography>
                <Typography sx={{ color: "text.tertiary", fontSize: 75 }}>
                    Shubham Likhar.
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 25 }}>
                    A passionate web developer
                </Typography>
                <h3>
                </h3>
                <ResumeButton />
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mt: 8, flexDirection: "column", minHeight: 'calc(90vh - 100px)', }}>
                <Typography sx={{ color: "text.primary", fontSize: 25 }}>
                    Hi there! This is
                </Typography>
                <Typography sx={{ color: "text.tertiary", fontSize: 50 }}>
                    This is Shubham Likhar.
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 20 }}>
                    A passionate web developer
                </Typography>
                <h3>
                </h3>
                <ResumeButton />
            </Box>
            <AboutPage />
            <MySkills />
            <Contact />
        </>
    )
}

Content.propTypes = {}

export default Content
