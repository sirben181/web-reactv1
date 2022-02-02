import React, {useEffect,useState} from 'react'
import './home.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Exercept = () => {
    const [posts, setPosts] = useState([]);
    const getPosts= async()=>{
        const res= await axios.get('http://localhost:5000/posts')
        const data= await res.data
        setPosts(data)
        console.log(data[0]._id)
        console.log(posts)
    }
    useEffect(()=>{
      getPosts();
    },[]);
  return (
      <div className="home_container">{posts.map((post)=>{return <div className="excerpt_wrapper"
      key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <span>{post.author}{post.date} </span>
          <Link to=''>
              <button className="primary_btn">Learn More</button>
          </Link>

      </div>})}
      </div>
  )
};

export default Exercept;
