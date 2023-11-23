import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Box } from '@mui/material';
import Homebutton from '../components/home-button';
import Cudelogo from '../assets/logo-game.png'
import './homepage-style.css'
const HomePage: React.FC = () => {
   return (
    <Box display="flex" flexDirection="column" minHeight="100vh" className="homepage-background">
    <Header />
    <Box component="main" flexGrow={1} display="flex" flexDirection="column" justifyContent="start" alignItems="center">
        <img src={Cudelogo} alt="" width="25%" />
    <Homebutton/>
    </Box>
    <Footer />
</Box>);
};

export default HomePage;