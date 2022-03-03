import React,{useState,useEffect} from 'react'
import  './service.css'
import Post from '../Post';
import Pagination from '../Pagination';
const Service = ({postsPerPage,paginate,totalPosts,posts}) => {
       
   return (
        <div className="service_container">
            <div className='services_wrapper'>
               <Post posts={posts}
               />
               <Pagination totalPosts={totalPosts}
               postsPerPage={postsPerPage} 
               paginate={paginate}/>
            </div>

      </div>
      
    )
}

export default Service
