import React from 'react'
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logo from './Images/logo.png';
export default function Navbar() {
    useEffect(() => {
        function scrollValue() {
          const navbar = document.getElementById('call');
          const scroll = window.scrollY;
    
          if (scroll < 200) {
            navbar.classList.remove('navbarColour');
          } else {
            navbar.classList.add('navbarColour');
          }
        }
    
        window.addEventListener('scroll', scrollValue);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', scrollValue);
        };
      }, []);
  return (
    <div>
      <div  className="navbar" id="call" >
        <div className="logo"><img src={logo}/></div>
        <div className="nav">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/services">Services</NavLink>
         <NavLink to="/schedule">Schedule</NavLink>
         <NavLink to="gallery">Gallery</NavLink>
         <NavLink to="/blog">Blog</NavLink>
         <NavLink to="/contact">Contact</NavLink>
        </div>
        <button className="btn1">BECOME A MEMBER</button>
    </div>

    
    </div>
  )
}
