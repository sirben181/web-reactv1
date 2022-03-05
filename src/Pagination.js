import React from 'react'
import './post.css'
const Pagination = ({totalPosts,postsPerPage,paginate}) => {
    const pageNumber=[]
    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i)
    }
  return (
    <div className='pages'>
        <ul>
          {pageNumber.map(number=>(
          <li key={number} onClick={()=>paginate(number)}>
             {number}
          </li>))}   
        </ul>npm 
    </div>
  )
}

export default Pagination 