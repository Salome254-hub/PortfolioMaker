import React from 'react';
import Home from './Home';
import About from './AboutMe';
import Services from './Services';
import Projects from './Projects';
import Client from './Clients';
import Footer from './Footer';
import Sidebar from './Sidebar';
import toast, { Toaster } from 'react-hot-toast';
import { Link ,useNavigate } from "react-router-dom"

const Portfolio = () => {
    return (
        <div class="main-wrapper">
        <Toaster />
        <Sidebar/>
        
        <div class="sections-wrapper">
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Client/>
        <Footer/>
            </div>
            </div>

    );
}

export default Portfolio;
