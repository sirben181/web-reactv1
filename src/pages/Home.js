import React from 'react'
import './home.css'
import home from '.././components/images/home.jpg'
import { Link } from 'react-router-dom'
import Exercept from './Exercept'
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
                <Exercept />
        </div>
    )
}

export default Home
