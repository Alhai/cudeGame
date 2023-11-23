import { Box, Button } from '@mui/material';
import React from 'react';
import './home-button-style.css';
import Cudelogo from './assets/logo-design.png'
const Logo = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <img src={Cudelogo} alt="" />
        </Box>
    );
};

export default Logo;
