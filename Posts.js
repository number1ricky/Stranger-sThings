import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";


const Posts = ({currentUser, isLoggedIn, token}) => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (!isLoggedIn) navigate('/account/login')
      }, [])

    
    console.log(currentUser)
    const fetchPosts = async () => {
           const response = await fetch('https://strangers-things.herokuapp.com/api/2108-CSE-RM-WEB-PT/posts/')
           const result = await response.json()
           const notation = result.data.posts
           setPosts(notation)
           
    }
    useEffect(fetchPosts, [])

    return <>
        <div className="headContainer">
        <h1 className='pageHead'>Posts</h1>
        <span className="postsNav">
        <input type="text" placeholder="Search Posts?"></input>
        </span>
        <button className="addPosts">
        <Link to="/posts/add" >Add Post</Link>
        </button>
        </div>

        <nav className="bodyContainer">
        {
            
            posts.map((post) => {
                
            return  <div key={post._id} className='postContainer'>
                   <h1 className='postTitle'>{post.title}</h1>
                   <h3 className='postDescription'>Description: {post.description}</h3>
                   <h5 className='postAuthorUsername'>Seller: {post.author.username}</h5>
                   <h4 className='postPrice'>Price: {post.price}</h4>
                   <h4 className='postLocation'>Location: {post.location}</h4>
                   <h4 className='postMessages'>Messages: {post.messages.map((message) => {
                       return <>
                       <h5 key={message._id} className='postMessageUsernamer'>Username: {message.fromUser.username}</h5>
                       </>
                   }

                   )}</h4>
                
                   <h4 className='postCreatedAt'>Created At: {post.createdAt}</h4>
                   {
                       post.author.username === currentUser ? <>
                        <div><button type="submit">{`EDIT`}</button></div>
                        <div><button type="submit">{`EDIT`}</button></div>
                        </>
                       : <div><button type="submit">{`Anything`}</button></div>
                   }
                   
                   {/* <h4 className='postWillDeliver'>Will Deliver?: {post.willDeliver}</h4> */}
                   {/* make an onclick for the delete and edit buttons here */}
                   </div>})
        }
        </nav>
        </>

}

export default Posts
