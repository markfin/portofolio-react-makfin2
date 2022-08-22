import {useContext,React} from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
import Resume from './resume.docx';
import Card from '../Card/Card';
import WebDev from '../../img/webdev.png'
import VideoEditor from '../../img/videoeditor.png';
import DataAnalysis from '../../img/dataanalysis.png'
export const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
     // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className='services' id='Services'>
    <div className="awesome">
    <span style={{ color: darkMode ? "white" : "" }}>
        My Awesome
    </span>
    <span>
        services
    </span>
    <spane>

    
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br />
        Culpa labore possimus inventore repellendus ut repudiandae quasi vitae.
    </spane>
    <a href={Resume} download>
    <button className="button s-button">
      Download CV
    </button>
    </a>
    <div className="blur s-blur1" style={{ 
        background:"#ABF1FF94"
     }}>

    </div>
    </div>
    <div className="cards">
     <motion.div 
       initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
     style={{ left:'14rem' }}>
        <Card emoji={DataAnalysis} heading={'Data Analysis'} detail={"Python, Anaconda, Pandas, "}/>
     </motion.div>
     <motion.div
      initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
      style={{ top:'12rem', left:"-4rem"}}>
        <Card emoji={WebDev} heading={'Web Developer'} detail={"HTML, JavaScript, CSS, MERN, PHP"}/>
     </motion.div>

     <motion.div
       initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
      style={{ top:'19rem', left:"12rem" }}>
        <Card emoji={VideoEditor} heading={'Video Editing'} detail={"Kdenlive,OpenShot, Natron, Shotcut"}/>
     </motion.div>
    </div>
    <div className="blur s-blur2" style={{ background:"var(--purple)" }}>

    </div>
    </div>
  )
}
