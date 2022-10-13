import React, { useEffect,useState } from 'react';
import Home from './Home';
import About from './AboutMe';
import Services from './Services';
import Projects from './Projects';
import Client from './Clients';
import Footer from './Footer';
import HireMe from './HireMe';
import Sidebar from './Sidebar';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom"

const Portfolio = () => {

    const [userProfile, setUserProfile] = useState({})
    const [servicesData, setServicesData] = useState({})
    const [projectsData, setProjectsData] = useState({})



    //FETCH ALL DATA
    useEffect(() => {
        fetch("/signups/1").then((rawData) => {
            if (rawData.ok) {
                rawData.json().then((data) => {
                  setUserProfile(data.user);
                  setServicesData(data.service);
                  setProjectsData(data.service)
                })
              }
    
        })}, [])
        
        console.log(userProfile.title);
        return (
            <div class="main-wrapper">
                <Toaster />
                <Sidebar sidebar={userProfile}/>
                <div class="sections-wrapper">
                    <Home homeData={userProfile}/>
                    <About about={userProfile}/>
                    <Services services={servicesData} />
        
                    <Projects projects={projectsData} />
                    <HireMe/>
                    <Client />
                    <Footer profile={userProfile}/>
                </div>
            </div>

        );

        }
        export default Portfolio;
