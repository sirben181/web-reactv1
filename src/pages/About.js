import React from 'react'
import './about.css'
import profile from '../images/benprof.webp'
import Avatar from '@mui/material/Avatar'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
const About = () => {
    return (
        <div className="about_container">
            <div className="about_wrapper">
                   <div className='headerProf'>
                         <div className='profilePic'>
                            <Avatar  src={profile} className='profilePic_icon' sx={{height:250,
                            width:250}}/>
                         </div>
                          <div className='personal_title'>
                                <section>
                                    <h2>Benson Kamau</h2>
                                    <h2> software developer</h2>
                                </section>
                                <section className='sociallinks'>
                                    <a href='https://www.facebook.com/benson.kamau.3766' target='_blank' rel='noreferrer'>
                                         <FacebookRoundedIcon sx={{height:40, width:40}}/></a>
                                    <a href='https://twitter.com/benson_kamaa'  target='_blank'  rel='noreferrer'><TwitterIcon sx={{height:40, width:40}} /></a>
                                    <a href='https://github.com/sirben181'  target='_blank'  rel='noreferrer'><GitHubIcon sx={{height:40, width:40}} /></a>
                                    <a href='https://www.youtube.com'  target='_blank'  rel='noreferrer'> <YouTubeIcon sx={{height:40, width:40}} /></a>
                                </section>
                          </div>
                      </div>
                      <div className='skill_container'>
                           <div className='skill_about'>
                                <h2>
                                    About Me:
                                </h2> 
                                <p>I am a self-taught developer who specializes in both javascript and reactjs.
                                    I love learning new langauages and technologies,
                                    solving  problems and providing   quality work.
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
                                <ul> <li>Javascript</li>
                                    <li> Reactjs</li>
                                    <li> ExpressJs</li>
                                    <li> NodeJs</li>
                                    <li> MongoDB</li>        
                                    <li> Firebase</li>        
                                    <li>Wordpress</li>
                                </ul>        
                            </div>
                            {/*  the initial idea is just providing software services and designing websites
                            websites maintenance
                            wordpress services
                            eccommerce services
                            bl  og and all other types of websites */}
                     </div>
                     <div className='portfolio_container'>
                         <h2 className="projects"> PROJECTS</h2>
                         <div className='portfolio_wrapper'>
                         <div className='project_card'>
                             <img src='' alt="facebook project"/>
                             <h3>Facebook clone</h3>
                             <p>This is my best version of facebook clone app whereby you can add posts and save them to the database.
                                 The app also has a login page that is shared around different components.
                                 i have used ReactJs, css, and Firebase database.
                             </p>
                             <a href='' target='_blank'rel="noreferrer"> github repository</a>
                         </div>
                         <div className='project_card'>
                             <img src='' alt="facebook project"/>
                             <h3>Facebook clone</h3>
                             <p>This is my best version of facebook clone app whereby you can add posts and save them to the database.
                                 The app also has a login page that is shared around different components.
                                 i have used ReactJs, css, and Firebase database.
                             </p>
                             <a href='' target='_blank'rel="noreferrer"> github repository</a>
                         </div>
                         <div className='project_card'>
                             <img src='' alt="facebook project"/>
                             <h3>Facebook clone</h3>
                             <p>This is my best version of facebook clone app whereby you can add posts and save them to the database.
                                 The app also has a login page that is shared around different components.
                                 i have used ReactJs, css, and Firebase database.
                             </p>
                             <a href='' target='_blank'rel="noreferrer"> github repository</a>
                         </div>
                         <div className='project_card'>
                             <img src='' alt="facebook project"/>
                             <h3>Facebook clone</h3>
                             <p>This is my best version of facebook clone app whereby you can add posts and save them to the database.
                                 The app also has a login page that is shared around different components.
                                 i have used ReactJs, css, and Firebase database.
                             </p>
                             <a href='' target='_blank'rel="noreferrer"> github repository</a>
                         </div>
                       </div>
                       
                     </div>
              </div>
      </div>
    )
}

export default About
