import { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import { Services } from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portofolio from "./Components/Portofolio/Portofolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from "./Context"
function App() {
 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{ 
      background:darkMode? 'black':'',
      color:darkMode?'white':''
     }}
    >
  <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Works/>
     <Portofolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;