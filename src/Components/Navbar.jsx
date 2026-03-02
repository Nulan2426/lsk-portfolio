import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <span className="logo">LSK<span className="dot">.</span></span>
                <div className="nav-links">
                    <a href="#about">ABOUT</a>
                    <a href="#projects">WORK</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </div>
        </nav>
    );
}