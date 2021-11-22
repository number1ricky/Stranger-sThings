import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";

const Profile = ({setIsLoggedIn, isLoggedIn, setCurrentUser, currentUser}) => {
  const navigate = useNavigate()
  const [token, setToken] = useState('')
  useEffect(() => {
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
  },[])
  useEffect(() => {
    if (!isLoggedIn) navigate('/account/login')
  }, [])
  return <>
  <nav className="headContainer">
  <h1 className='pageHead'>Welcome: {currentUser.username}</h1>
  <h1 className='messageHead'>Messages to Me: </h1>
  </nav>

  <nav className="bodyContainer">
  {
      isLoggedIn && currentUser.messages && currentUser.messages.map((message) => {
      return  <div key={message._id}className='messageContainer'>
             <h1 className='messageContent'>{message.content}</h1>
             <h1 className='messagePost'>{message.post}</h1>
             </div>})

  }
  </nav>
  </>
  }

  export default Profile