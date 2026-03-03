import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProjectCard from './Components/ProjectCard'
import {ExternalLink, Mail, Code2, Globe} from 'lucide-react'


function App() {
  const projects = [
    {
      title: 'Wedding Website',
      description: 'Current finished project, a wedding website for my cousin and his fiancé. A clean and modern design built with React, and Vite. Hosted on Netlify. And if you\'re wondering, as a css Purest - I did not use tailwind.',
      image: 'https://trwedding2026.com/preview-card.png',
      link: 'https://trwedding2026.com/',
      repo: 'https://github.com/Nulan2426/RTwedding26',
    },
    {
      title: 'LSK Portfolio',
      description: 'My personal portfolio website built with React, Vite and modular components. An upgrade from my previous portfolio, with a focus on clean design and showcasing my projects and skills. I generally like to seperate components and CSS so my first attemp in CSS directly into App.css folder and seeing how I feel about it. Hosted on Netlify.',
      image: 'https://via.placeholder.com/300x200',
      link: 'https://www.leisak.dev',
      repo: 'https://github.com/Nulan2426/LSK-portfolio',
    },
    {
      title: 'Future Project',
      description: 'Delving deeper into building more complex applications and exploring new technologies. With heavier photography focus and fun! Will include some API work to showcase more of my abilities.',
      image: 'https://via.placeholder.com/300x200',
      status: 'In Progress',
    }
  ]

  return (
    <>
      <div className="app-wrapper">
        <Navbar />

        <main>
          <Hero />

          <section id="about" className="container-section about-layout">
            <h2>Hi, I'm Leisa!</h2>
            <p>I'm a <strong>Full Stack Developer</strong> developer dedicated to weaving together beautiful design with functional, high performance code.
              With a foundation in React and Node.js I thrive on the challenge of turning complex problems into simple, elegant solutions.
              This portfolio is a reflection of my journey past learning the basics to building scalable web apps, mastering modern web applications
              that prioritise both user experience and clean aesthetics.
              See my most recent projects below, and feel free to reach out if you'd like to collaborate or just say hi!
            </p>
          
          </section>

          <section id="skills" className="container-section ">
            <div className="skills-container">

              <div className="skills-category glass">
              <h3>Frontend</h3>
              <div className="skills-tags">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Vite</span>
                <span>Modern CSS</span>
              </div>
            </div>
           
            <div className="skills-category glass">
              <h3>Backend</h3>
              <div className="skills-tags">
                <span>Express.js</span>
                <span>SQL</span>
                <span>RESTful APIs</span>
                <span>Responsive Design</span>
                <span>UI/UX Principles</span>
                <span>Git / GitHub</span>
                <span>Netlify</span>
              </div>
              </div>
              </div>
          </section>

          <section id="projects" className="container-section">
            <div className="project-grid">
              {projects.map((p, i) => (
                <ProjectCard key={i} {...p} />
              ))}
            </div>
          </section>

              <section id="contact" className="container-section">
            <div className="contact-card"> 
              <h2 className="contact-gradient">Let's Connect</h2>
              <p>I'm always open to new opportunities and collaborations. Feel free to reach out to me via email below!</p>

              <div className="contact-links">
              <a href="mailto:l.kalaniuvalu@gmail.com"><Mail className="contact-icon" /> l.kalaniuvalu@gmail.com</a>
             {/*<a href="https://github.com/Nulan2426"><Code2 className="contact-icon" /> GitHub</a>
              <a href="https://www.leisak.dev"><Globe className="contact-icon" /> Portfolio</a> */}
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p> @ {new Date().getFullYear()} Built and Designed with ♡ by <strong>LSK</strong> | Built with Vite + React</p>
        </footer>
      </div>
     
    </>
  )
}

export default App
