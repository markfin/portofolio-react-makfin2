import React from 'react'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
<div className="n-name">Marfin</div>
<span><Toggle/></span>
        </div>
        <div className="n-right">
<div className="n-list">
    <ul style={{listStyle:'none' }}>
    <Link spy={true} to='NavBar' smoth={true} activeClass='activeClass'>
        <li>Home</li>
    </Link>
    <Link spy={true} to="Services" smoth={true}>
        <li>Services</li>
    </Link>
    <Link spy={true} to='Experience' smoth={true}>

        <li>Experience</li>
    </Link>
    <Link spy={true} to='Portfolio' smoth={true}>

        <li>Portfolio</li>
    </Link>
    <Link spy={true} to='Testimonials' smoth={true}>
        <li>Testimonials</li>
    </Link>
    </ul>
</div>
<button className="button n-button">contact us</button>
        </div>
    </div>
  )
}

export default Navbar