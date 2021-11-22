import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";


const CreateAccount = ({setToken, action, setIsLoggedIn, isLoggedIn}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showCredentialsError, setShowCredentialsError] = useState(false)
  const [accountError, setAccountError] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  const navigate = useNavigate()


  useEffect(() => {
    if (!isLoggedIn) navigate('/account/login')
  }, [])

  

  const fetchCurrentUser = (token) => {
    fetch(`https://strangers-things.herokuapp.com/api/2108-CSE-RM-WEB-PT/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      }).then(response => response.json())
      .then(result => {
        console.log(result.data)
        const user = result.data;
        setCurrentUser(user)
      })
      .catch(console.error);
  }

  const submitAccountInfo = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2108-CSE-RM-WEB-PT/users/${action}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      })
      const result = await response.json()
      const authToken = result.data.token
      setToken(authToken)
      localStorage.setItem('token', authToken)
      setIsLoggedIn(true)
      fetchCurrentUser(authToken)
      
      setShowCredentialsError(false)
      navigate('/profile')
    } catch (error) {
      console.log(error)
      const errorMessage = action === 'login' ? "Incorrect username and password combination." : "Username already taken."
      setAccountError(errorMessage)
      setShowCredentialsError(true)
    }
  }

  

  return <>
    <nav className="headContainer">
    <h1 className='pageHead'>Page Head for {action}</h1>
    </nav>
    <nav className="bodyContainer">
    <form onSubmit={submitAccountInfo}>
      <div><input type="text" value={username} placeholder="username" onChange={(ev)=>{setUsername(ev.target.value)}}/></div>
      <div><input type="password" value={password} placeholder="password" onChange={(ev)=>{setPassword(ev.target.value)}}/></div>
      <div><button type="submit">{action.toUpperCase()}</button></div>
    </form>
    { showCredentialsError ? <div className="error">{accountError}</div> : null }
    </nav>
  </>
}

export default CreateAccount;
