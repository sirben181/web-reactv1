import React,{useState} from 'react'
import  './service.css'
const Service = () => {
    const [posts, setPosts] = useState([
        {
            id:1,
            title:'Domain registration',
            body:`The best domain registration processing company .
            we will help you have a good domain and registered to the company of your choice.
            We will also help you to know the best domain services around
            I wanted to be a teacher on YouTube teaching how to code, and I got the screen play recorder obs and I have net and started doing it but the machine am using can’t handle all this at the same time. So I have to come up with a different option and different things to do. At least for now it seems impossible because I need major machine upgrade. What’s the way forward then? The way forward has to be done just right now. I have to decide it right now. What is the first and my main priority? My only priority is that I want to earn and I want to make a living as a software developer. Jobs seems like it will take hell long simply because most seems like they are taking people with at least experience of at least 3yrs. You need those three yrs. to get a job and then you need a job to get that kind of experience. That’s kind of sick. So what should I do then to make a living in this career sooner, in short what can I do to just pay my bills with it. 
            It would be an absolute honor to be able to do this. What are my options:`
        },{
            id:2,
            title:"wordpress",
            body:`The best domain registration processing company.
            we will help you have a good domain and registered to the company of your choice.
            We will also help you to know the best domain services around
            I wanted to be a teacher on YouTube teaching how to code, and I got the screen play recorder obs and I have net and started doing it but the machine am using can’t handle all this at the same time. So I have to come up with a different option and different things to do. At least for now it seems impossible because I need major machine upgrade. What’s the way forward then? The way forward has to be done just right now. I have to decide it right now. What is the first and my main priority? My only priority is that I want to earn and I want to make a living as a software developer. Jobs seems like it will take hell long simply because most seems like they are taking people with at least experience of at least 3yrs. You need those three yrs. to get a job and then you need a job to get that kind of experience. That’s kind of sick. So what should I do then to make a living in this career sooner, in short what can I do to just pay my bills with it.
             It would be an absolute honor to be able to do this. What are my options:`
        },{
            id:3,
            title:"landingpages",
            body:`The best domain registration processing company.
            we will help you have a good domain and registered to the company of your choice.
            We will also help you to know the best domain services aroun
            I wanted to be a teacher on YouTube teaching how to code, and I got the screen play recorder obs and I have net and started doing it but the machine am using can’t handle all this at the same time. So I have to come up with a different option and different things to do. At least for now it seems impossible because I need major machine upgrade. What’s the way forward then? The way forward has to be done just right now. I have to decide it right now. What is the first and my main priority? My only priority is that I want to earn and I want to make a living as a software developer. Jobs seems like it will take hell long simply because most seems like they are taking people with at least experience of at least 3yrs. You need those three yrs. to get a job and then you need a job to get that kind of experience. That’s kind of sick. So what should I do then to make a living in this career sooner, in short what can I do to just pay my bills with it.
             It would be an absolute honor to be able to do this. What are my options:`
        },{
            id:4,
            title:"designing websites",
            body:`The best domain registration processing company.
            we will help you have a good domain and registered to the company of your choice.
            We will also help you to know the best domain services aroun
            I wanted to be a teacher on YouTube teaching how to code, and I got the screen play recorder obs and I have net and started doing it but the machine am using can’t handle all this at the same time. So I have to come up with a different option and different things to do. At least for now it seems impossible because I need major machine upgrade. What’s the way forward then? The way forward has to be done just right now. I have to decide it right now. What is the first and my main priority? My only priority is that I want to earn and I want to make a living as a software developer. Jobs seems like it will take hell long simply because most seems like they are taking people with at least experience of at least 3yrs. You need those three yrs. to get a job and then you need a job to get that kind of experience. That’s kind of sick. So what should I do then to make a living in this career sooner, in short what can I do to just pay my bills with it.
             It would be an absolute honor to be able to do this. What are my options:`
        },{
            id:5,
            title:"webmaintenance",
            body:`The best domain registration processing company.
            we will help you have a good domain and registered to the company of your choice.
            We will also help you to know the best domain services aroun
            I wanted to be a teacher on YouTube teaching how to code, and I got the screen play recorder obs and I have net and started doing it but the machine am using can’t handle all this at the same time. So I have to come up with a different option and different things to do. At least for now it seems impossible because I need major machine upgrade. What’s the way forward then? The way forward has to be done just right now. I have to decide it right now. What is the first and my main priority? My only priority is that I want to earn and I want to make a living as a software developer. Jobs seems like it will take hell long simply because most seems like they are taking people with at least experience of at least 3yrs. You need those three yrs. to get a job and then you need a job to get that kind of experience. That’s kind of sick. So what should I do then to make a living in this career sooner, in short what can I do to just pay my bills with it.
             It would be an absolute honor to be able to do this. What are my options:`
        }
    ])
    const [currentPage,setCurrentPage]=useState(false)
    const [postsPerPage,setPostsPerPage]=useState(1)
    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage
    const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)
    return (
        <div className="service_container">
            <div className='services_wrapper'>
                <div className='services_items'>
                {currentPosts.map(currentPost=>( 
                    <div className='domain_service service_item'
                    key={currentPost.id}
                    >
                        <h3>{currentPost.title}</h3>
                        <p> {currentPost.body}
                       </p>
                    </div>))}
               
                    {/* <div className='wordpress service_item'>
                        <h3>Wordpress</h3>
                    <p> 
                 </p>
                    </div>
                    <div className='landingpage_service service_item'>
                        <h3>landingpages</h3>
                    <p> 
                       </p>
                    </div>
                    <div className='webdesign_service service_item'>
                        <h3>designing websites</h3>
                    <p>
                    </p>
                    </div>
                    <div className='webmaintenance service_item'>
                        <h3>Webmaintenance</h3>
                    <p>                  
                    </p>
                    </div> */}
                </div>
            </div>

      </div>
      
    )
}

export default Service
