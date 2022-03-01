import React from 'react'
import './about.css'
import profile from '../images/benprof.webp'
import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div className="about_container">
            <h2>About</h2>
            <div className="about_wrapper">
                <div className='headerProf'>
                  <Avatar sx={{height:150, width:150}}className='profilePic' src={profile}/>
                </div>
                <div className='skill_container'>
                    <div className='skill_about'>
                        <h2>
                            About Me:
                        </h2> 
                        <p>I am a self-taught developer who specializes in both javascript and reactjs.
                             I love learning new langauages and technologies, solving  problems and providing   quality work.
                             Follow my  coding journey <a href='/blog'>Here</a>
                        {/*I am person who has a scientific background but i have no computer based  background.
                            But this  didnt hinder me to learn and become  a software developer. 
                            i started to learn coding using free online resources.
                            Like any other person i started using HTML,CSS and Javascript. After being comfortable for sometime i started to handle the javascript frameworks.
                            I learned React js to become a full frontend developer.
                            After sometimes i started to incorporate the backend languages like  express and NodeJs.
                            I have worked with APIs as i have worked with a few of them in my projects.
                            The database that i have worked with is firebase and MongoDB. */}
                        </p>

                     </div>
                     <div className='skill_wrapper'>
                        <h3>
                        skills: 
                        </h3>
                        <p> Javascript</p>
                        <p> Reactjs</p>
                        <p> ExpressJs</p>
                        <p> NodeJs</p>
                        <p> MongoDB</p>        
                        <p> Firebase</p>        
                        <p>Wordpress</p>        
                  </div>
                {/*  the initial idea is just providing software services and designing websites
                websites maintenance
                wordpress services
                eccommerce services
                blog and all other types of websites */}
            </div>
            </div>
        </div>
    )
}

export default About
