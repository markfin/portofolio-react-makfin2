import React ,{ useContext } from "react";
import { themeContext } from "../../Context";
import './Experience.css'
function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
    <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>0+</div>
        <span  style={{color: darkMode?'white':''}}>Years</span>
        <span>Experience</span>
    </div>
    <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>0+</div>
        <span  style={{color: darkMode?'white':''}}>completed</span>
        <span>projects</span>
    </div>
    <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>0+</div>
        <span  style={{color: darkMode?'white':''}}>companies</span>
        <span>work</span>
    </div>
    </div>
  )
}

export default Experience