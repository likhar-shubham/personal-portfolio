import React from 'react';
import PropTypes from 'prop-types';
import {
    Paper, Box, Container, Divider, Card,
    CardActions, CardContent, Typography, CardMedia
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';

function AboutPage(props) {
    return (
        <>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, mb: 2, flexDirection: "column" }}>

                    <Box sx={{ color: "text.secondary", mb: 2 }}>
                        <Typography sx={{ fontSize: 75, color: "text.tertiary" }} >
                            About Me
                        </Typography>
                    </Box>

                    <Card sx={{ minWidth: 200, mb: 2, backgroundColor: "text.primary", display: "flex" }}>
                        <CardMedia
                            component="img"
                            image="images/photograph_for_portfolio.jpg"
                            alt='My image'
                            sx={{
                                width: 440,
                                height: 440,
                                borderRadius: '50%',
                                m: 1
                            }}
                        />
                        <CardContent>
                            <List>
                                <ListItem>
                                    <ListItemIcon >
                                        <CodeIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 25 }} color="text.tertiary" gutterBottom>
                                            A mechanical engineer by degree, Web developer at heart.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon >
                                        <SchoolIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 25 }} color="text.tertiary" gutterBottom>
                                            Also holds an MBA specialised in Finance and Marketing.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon >
                                        <WorkIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 25 }} color="text.tertiary" gutterBottom>
                                            I have worked as SME for my previous project.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon >
                                        <BrushIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 25 }} color="text.tertiary" gutterBottom>
                                            I love to create anything which is meaningful, be it SPA,code, corporate relations or friendships.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon >
                                        <TempleBuddhistIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 25 }} color="text.tertiary" gutterBottom>
                                            I am highly spiritual by nature.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>




                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: "column" }}>
                    <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: 40, color: "text.tertiary" }} >
                            About Me
                        </Typography>
                    </Box>
                    <Card sx={{ minWidth: 200, mb: 2, backgroundColor: "text.primary", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <CardMedia
                            component="img"
                            image="images/photograph_for_portfolio.jpg"
                            alt='My image'
                            sx={{
                                width: 200,
                                height: 200,
                                borderRadius: '50%',
                                m: 1
                            }}
                        />
                        <CardContent>
                            <List>
                                <ListItem>
                                    <ListItemIcon >
                                        <CodeIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 12 }} color="text.tertiary" gutterBottom>
                                            A mechanical engineer by degree, Web developer at heart.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon >
                                        <SchoolIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 12 }} color="text.tertiary" gutterBottom>
                                            Also holds an MBA specialised in Finance and Marketing.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon >
                                        <WorkIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 12 }} color="text.tertiary" gutterBottom>
                                            I have worked as SME for my previous project.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon >
                                        <BrushIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 12 }} color="text.tertiary" gutterBottom>
                                            I love to create anything which is meaningful, be it SPA,code, corporate relations or friendships.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon >
                                        <TempleBuddhistIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 12 }} color="text.tertiary" gutterBottom>
                                            I am highly spiritual by nature.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Box>
        </>
    )
}

AboutPage.propTypes = {}

export default AboutPage
