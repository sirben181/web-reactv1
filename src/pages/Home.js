import React from 'react'
import './home.css'
import home from '.././components/images/home.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='home_container'>
            <div className='landing_page'>
               <img src={home}  alt={home}/>
            </div>
            <div className="landing_message">
                <h2> Welcome, we have a alot of services all tech </h2>
                <Link to='/services'>
                  <button className="btn_primary">
                     Learn more
                   </button>
                </Link>
            </div>
            <div className="wordpress_excerpt_home">
                <div className='wordpress_excerpt_wrapper'>
                    <h2>Creating a wordpress themes</h2>
                    <p> Join us and we are going to create a wordpress them for you,depending on your choices.
                    if you dont have those choices we can help you decide and make  your dream come true.
                    We are the best wordpress developers around.

                    </p>
                    <p>Here are some of the projects we have worked on
                      
                    </p>
                    <Link to='/services'>
                            <button className='btn_primary'>Read more</button>
                   </Link>
                </div>
                <div className='wordpress_excerpt_wrapper'>
                    <h2>Landing pages</h2>
                    <p> Join us and we are going to create a wordpress them for you,depending on your choices.
                    if you dont have those choices we can help you decide and make  your dream come true.
                    We are the best wordpress developers around.

                    </p>
                    <p>Here are some of the projects we have worked on
                      
                    </p>
                    <Link to='/services'>
                            <button className='btn_primary'>Read more</button>
                   </Link>
                </div><div className='wordpress_excerpt_wrapper'>
                    <h2>webmaintenance</h2>
                    <p> Join us and we are going to create a wordpress them for you,depending on your choices.
                    if you dont have those choices we can help you decide and make  your dream come true.
                    We are the best wordpress developers around.

                    </p>
                    <p>Here are some of the projects we have worked on
                      
                    </p>
                    <Link to='/services'>
                            <button className='btn_primary'>Read more</button>
                   </Link>
                </div>
                <div className='wordpress_excerpt_wrapper'>
                    <h2>Webdesign</h2>
                    <p> Join us and we are going to create a wordpress them for you,depending on your choices.
                    if you dont have those choices we can help you decide and make  your dream come true.
                    We are the best wordpress developers around.

                    </p>
                    <p>Here are some of the projects we have worked on
                      
                    </p>
                    <Link to='/services'>
                            <button className='btn_primary'>Read more</button>
                   </Link>
                </div><div className='wordpress_excerpt_wrapper'>
                    <h2>Domain registration</h2>
                    <p> Join us and we are going to create a wordpress them for you,depending on your choices.
                    if you dont have those choices we can help you decide and make  your dream come true.
                    We are the best wordpress developers around.

                    </p>
                    <p>Here are some of the projects we have worked on
                      
                    </p>
                    <Link to='/services'>
                            <button className='btn_primary'>Read more</button>
                   </Link>
                </div>
            </div>
           
        </div>
    )
}

export default Home
