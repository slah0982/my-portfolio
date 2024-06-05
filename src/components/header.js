import { Navbar, Nav  } from 'react-bootstrap';
import './header.css'
import React, { useState } from 'react';


const codingImg = './assets/secondry-coding.png'

export default function Header() {
    const [activeIndex, setActiveIndex] = useState(0); // Initialize state for active index

    const navList = [
        {
            name: 'HOME',
            link: './#home',
        },
        {
            name: 'SKILLS',
            link: './#skills',
        },
        {
            name: 'PROJECTS',
            link: './#projects',
        },
        {
            name: 'CONTACT',
            link: './#contact',
        },
    ];

    const handleNavClick = (index) => {
        setActiveIndex(index); // Update the active index state
    };

    return (
        <Navbar expand="lg" className='header'>
            <a href='./'>
                <h1 className='logo'>
                    <img src={codingImg} alt='logo img' />
                    Salah Almaghrby
                </h1>
            </a>
            <Navbar.Toggle aria-controls="navbarScroll" className='toggle'/>
            <Navbar.Collapse id="navbarScroll" className='collapse'>
                <Nav className='nav-container'>
                    {navList.map((nav, index) => (
                        <a
                            href={nav.link}
                            className={`nav-link ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleNavClick(index)} // Handle click event
                            key={index} // Add a unique key
                        >
                            {nav.name}
                        </a>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
