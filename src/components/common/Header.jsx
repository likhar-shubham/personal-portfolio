import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';


const pages = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


function Header(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>
            <HideOnScroll {...props}>
                <AppBar elevation={0} sx={{ position: "sticky", bgcolor: 'background.paper', minHeight: '75px' }} >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <SelfImprovementIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'text.tertiary' }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        color: "text.tertiary",
                                        display: { xs: 'block', md: 'none', },

                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                to={page === 'HOME' ? `/` : `/${page}`}
                                            >
                                                <Typography sx={{
                                                    color: "text.tertiary",
                                                }} textAlign="center">
                                                    {page}
                                                </Typography>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <SelfImprovementIcon sx={{ display: { xs: 'flex', md: 'none' }, justifyItems: "center" }} />

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: "center", justifyContent: "center" }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ mx: 1, mt: 2, color: 'text.tertiary', display: 'flex' }}
                                    >

                                        <Link
                                            style={{ textDecoration: "none" }}

                                            to={page === 'HOME' ? `/` : `/${page}`}
                                        >
                                            <Typography sx={{
                                                color: "text.tertiary",
                                                fontSize: 30
                                            }} textAlign="center">
                                                {page}
                                            </Typography>
                                        </Link>
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </>
    );
}

Header.propTypes = {}

export default Header
