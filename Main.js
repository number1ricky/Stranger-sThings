import React, {useState, useEffect} from "react"
import Posts from './Posts';
import Profile from './Profile';
import AddPosts from "./AddPost";
import CreateAccount from './CreateAccount';
import { Routes, Route } from 'react-router-dom'


const Main = ({isLoggedIn, setIsLoggedIn}) => {
  const [token, setToken] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  console.log(currentUser)
  
  return <>
    <Routes>
      <Route path='/' exact element={ <Posts isLoggedIn={isLoggedIn} token={token} currentUser={currentUser}/> }/>
      <Route path='/home' exact element={ <Posts isLoggedIn={isLoggedIn} token={token} currentUser={currentUser}/> }/>
      <Route path='/posts' exact element={ <Posts isLoggedIn={isLoggedIn} token={token} currentUser={currentUser}/> }/>
      <Route path='/posts/add' exact element={ <AddPosts isLoggedIn={isLoggedIn} currentUser={currentUser} token={token}/> }/>
      <Route path='/title' element={ <Posts currentUser={currentUser}/> }/>
      <Route path='/register' element={ <CreateAccount setToken={setToken} action="register" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} /> } />
      <Route path='/account/login' element={ <CreateAccount setToken={setToken} action="login" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser}/> } />
      <Route path='/profile' element={ <Profile setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} token={token} /> } />
    </Routes>
  </>
}



export default Main