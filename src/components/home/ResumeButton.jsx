import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Link } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function ResumeButton(props) {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `resume.pdf`;
        link.href = `/resume.pdf`;
        link.click();
    };

    return (
        <>
            <Button sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center", height: 50, width: 200 }}
                onClick={onDownload}
                size="large" variant="outlined" color='secondary' startIcon={<DownloadForOfflineIcon />}>RESUME</Button>
            <Button sx={{ display: { xs: 'flex', md: 'none' }, alignItems: "center", width: 200 }} color='secondary' size="large" variant="outlined" startIcon={<DownloadForOfflineIcon />}>RESUME</Button>
        </>
    )
}

ResumeButton.propTypes = {}

export default ResumeButton
