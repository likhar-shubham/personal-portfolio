import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from '@mui/material';

const actions = [
    { icon: <Link href="mailto:likharshubham761@gmail.com" target="_blank"><MailIcon sx={{ color: 'text.tertiary' }} /></Link>, name: 'Gmail' },
    { icon: <Link href="https://github.com/likhar-shubham" target="_blank"><GitHubIcon sx={{ color: 'text.tertiary' }} /></Link>, name: 'Github' },
    { icon: <Link href="https://www.instagram.com/shubham_likhar_1/" target="_blank"><InstagramIcon sx={{ color: 'text.tertiary' }} /></Link>, name: 'Instagram' },
    { icon: <Link href="https://www.linkedin.com/in/shubham-likhar-5b8006229/" target="_blank"><LinkedInIcon sx={{ color: 'text.tertiary' }} /></Link>, name: 'LinkedIn' },
];

function ContactSpeedDial(props) {
    return (
        <SpeedDial
            ariaLabel="Contact SpeedDial"
            sx={{ position: 'fixed', bottom: 50, right: 50 }}
            FabProps={{
                sx: {
                    bgcolor: 'text.primary',
                    '&:hover': {
                        bgcolor: 'text.secondary',
                    }
                }
            }}
            icon={<ContactPageIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    FabProps={{
                        sx: {
                            bgcolor: 'text.primary',
                            '&:hover': {
                                bgcolor: 'text.secondary',
                            }
                        }
                    }}
                />
            ))}
        </SpeedDial>
    );
}

ContactSpeedDial.propTypes = {}

export default ContactSpeedDial;
