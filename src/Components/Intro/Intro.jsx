import React, {useContext} from 'react';
import './Intro.css'
import  Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/lihat.png";
import glassesimoji from "../../img/glassesimoji.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
import data from "../../img/dataanalyis.png"
import web from "../../img/webdevelopment.png"
import { themeContext } from "../../Context";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {motion} from 'framer-motion';
const Intro = () => {

      // context
      const transition = {duration:2, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>
                    Hi! I am
                </span>
                <span>
                  Muhammad Zamaruddin
                </span>
                <span>
                Frontend Developer who have experience in web designing
            and development, producting the Quality work
                </span>
            </div>
            <button className="i-button button">Hire me</button>
            <div className="i-icons">
            <a href="https://github.com/markfin/" target='_blank' rel="noreferrer">
                <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/muh-zam-b1b00722b/" target='_blank' rel="noreferrer">
                <img src={LinkedIn} alt="" />
            </a>
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img 
        initial={{ left:'-36%' }}
        whileInView={{ left:'-24%' }}
        transition={transition}
         src={glassesimoji} alt="" />
        <motion.div 
        initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
        style={{ 
            top:'-4%', left:'68%'
         }}
         className="floating-div"
         >
<FloatingDiv image={web} txt1="Web" txt2="Developer"/>
        </motion.div>
            <motion.div 
            initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
            style={{ 
                top:"18rem", left:"2rem"
             }}
             className="floating-div"
             >
                <FloatingDiv image={data} txt1='Data' txt2='Analysis'/>
            </motion.div>
            <div className="blur" style={{ 
                background:"rgb(236 210 255)"
             }}>

            </div>
            <div className="blur" style={{
                background:"#cif5ff",
                top:'17rem', width:"21rem",height:"11rem",
                left:"-9rem"
            }}>

            </div>
        </div>
        </div>
    );
}

export default Intro;
