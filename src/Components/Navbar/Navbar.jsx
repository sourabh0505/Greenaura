import React from 'react';
import "./navbar.css";
import {Link} from 'react-scroll';
// import { Navigate } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar' id='home'>
        <div className="title">
            <h2>GreenAura</h2>
        </div>

        <div className="nav-items">
            <ul className='nav-list'>
                <a href='/' spy={true} smooth={true} offset={-1500} duration={1200} className='list-item'>Home</a>
                <Link to="about" spy={true} smooth={true} offset={-80} duration={1200} className='list-item'>About</Link>
                {/* <Link to="blogs" spy={true} smooth={true} offset={50} duration={1200} className='list-item'>Blogs</Link> */}
                <Link to="courses" spy={true} smooth={true} offset={-30} duration={1200} className='list-item'>Courses</Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={1200} className='list-item'>Contact</Link>
                <a href='/books' className='list-item'>Books</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar