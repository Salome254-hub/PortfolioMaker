import logo from './logo.svg';
import  './App.css';
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
// import Dashborad from './Components/Dashborad'
import HireMe from './Components/HireMe'
import Home from './Components/Home'
// import LandingPage from './Components/LandingPage'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'



function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div class="sections-wrapper">
        <Home />
        <AboutMe/>
        <Services/>
        <HireMe/>
        <Projects/>
        <Contact/>
        <Footer/>
      

   







    </div>


    </div>
  );
}

export default App;
