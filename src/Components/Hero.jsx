import React from 'react';
import { Code, Code2 } from 'lucide-react';
import profilePic from '../assets/profilePic.png';

export default function Hero() {
    return (
        <section className="hero container">
            <div className="profile-container">
                <img src={profilePic} alt="Leisa" className="profile-img" />
            </div>

            <h1 className="gradient-text">Full Stack <br /> Developer</h1>
            <p className="hero-subtitle">
                Building digital experiences with a Pasifika heart and a modern tech stack.
            </p>

            <div className="hero-btns">
                <a href="#projects" className="btn-primary">View My Work</a>
                <a href="https://github.com/Nulan2426" target="_blank" rel="noreferrer" className="btn-secondary">
                    <Code size={20} /> GitHub
                </a>
            </div>
        </section>
    );
}