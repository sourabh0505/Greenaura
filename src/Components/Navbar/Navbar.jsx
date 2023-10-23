import React from 'react';
import "./navbar.css";
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <div className='navbar' id='home'>
        <div className="title">
            <h2>GreenAura</h2>
        </div>

        <div className="nav-items">
            <ul className='nav-list'>
                <a className='list-item' href='/' spy={true} smooth={true} offset={-1500} duration={1200}>Home</a>
                <Link  className='list-item' to="about" spy={true} smooth={true} offset={-80} duration={1200}>About</Link>
                {/* <Link to="blogs" spy={true} smooth={true} offset={50} duration={1200} className='list-item'>Blogs</Link> */}
                <Link  className='list-item' to="courses" spy={true} smooth={true} offset={-30} duration={1200}>Courses</Link>
                <Link  className='list-item' to="gallery" spy={true} smooth={true} offset={-60} duration={1200}>Gallery</Link>
                <Link  className='list-item' to="contact" spy={true} smooth={true} offset={50} duration={1200}>Contact</Link>
                <a  className='list-item' href='/books'>Books</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar