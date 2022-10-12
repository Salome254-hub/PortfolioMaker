// import logo from './logo.svg';
import  './App.css';
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Dashboard from './Components/Dashboard'
import HireMe from './Components/HireMe'
import Home from './Components/Home'
import LandingPage from './Components/LandingPage'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Preloader from './Components/Preloader';



function App() {
  return (
    <div className="App">
      {/* <Preloader /> */}
      {/* <Sidebar/> */}
      <div class="sections-wrapper">
      {/* <Home /> */}
      {/* <AboutMe/> */}
      {/* <Services/> */}
      <Dashboard/>
      {/* <HireMe/> */}
      {/* <Projects/> */}
      {/* <Contact/>  */}
        <SignUp/>
        {/* <Login/> */}
{/* <LandingPage/> */}
{/* <Footer/> */}

      

   







    </div>


    </div>
  );
}

export default App;
