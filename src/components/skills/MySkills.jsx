import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Box, Container, Typography, Grid } from '@mui/material';
import RadarChart from '../common/RadarChart';

function MySkills(props) {

    const dataForTechnicalSkills = {
        labels: [
            'HTML5',
            'PostgreSQL',
            'ReactJS',
            'Node.js',
            'CSS3',
            'Git'
        ],
        datasets: [
            {
                label: 'Technical Skills',
                data: [90, 75, 90, 70, 90, 80],
                backgroundColor: '#395B64',
                borderColor: '#A5C9CA',
                borderWidth: 1,
                color: '#E7F6F2',
                fill: true
            },
        ],
    };

    const dataForSoftSkills = {
        labels: [
            'Dedication',
            'Motivation',
            'Empathy',
            'Optimism',
            'Pragmatism',
            'Confidence',
            'Emotional Intelligence'
        ],
        datasets: [
            {
                label: 'Soft Skills',
                data: [90, 85, 84, 88, 89, 86, 88],
                backgroundColor: '#395B64',
                borderColor: '#A5C9CA',
                borderWidth: 1,
                color: '#E7F6F2',
                fill: true
            },
        ],
    };

    const dataForManagerialSkills = {
        labels: [
            'Relationship Management',
            'Planning',
            'Industry Knowledge',
            'Decision-making',
            'Problem-solving',
            'Communication Skills',
            'Team Management',
            'Conflict Resolution'
        ],
        datasets: [
            {
                label: 'Managerial Skills',
                data: [85, 90, 90, 89, 89, 88, 88, 86],
                backgroundColor: '#395B64',
                borderColor: '#A5C9CA',
                borderWidth: 1,
                color: "yellow",
            },
        ],
    };

    return (
        <Box sx={{ mb: 2, minHeight: "10vh" }}>
            <Typography sx={{ fontSize: { xs: 40, md: 75 }, mb: 2, color: "text.tertiary" }} >
                MY SKILLS
            </Typography>
            <Grid container spacing={2} sx={{}}>
                <Grid item xs={12} sm={12} md={4}>
                    <RadarChart data={dataForTechnicalSkills} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <RadarChart data={dataForSoftSkills} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <RadarChart data={dataForManagerialSkills} />
                </Grid>
            </Grid>

        </Box>
    );
}

MySkills.propTypes = {}

export default MySkills
