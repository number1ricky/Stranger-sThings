import React from 'react'
import { Link } from 'react-router-dom'


const Header = ( {isLoggedIn}) => {
  const homepage = 'Home'
  const title = `Stranger's Things`
  const posts = 'Posts'
  const profile = 'Profile'
  const login = 'Account/Login'
  if (isLoggedIn) {
    return (
      <nav className="header">
          <span id="title">
              <Link to="/title">{title}</Link> 
          </span>
          <nav className="linkNames">
              <Link to="/home" >{homepage}</Link> 
              <Link to="/posts">{posts}</Link> 
              <Link to="/profile">{profile}</Link> 
              <Link to="/account/login" >{login}</Link>
          </nav> 
      </nav>
    )
  }
  else {
  return (
    <nav className="header">
        <span id="title">
            <Link to="/title">{title}</Link> 
        </span>
        <nav className="linkNames">
            <Link to="/home" >{homepage}</Link> 
            <Link to="/posts">{posts}</Link> 
            <Link to="/account/login" >{login}</Link> 
        </nav> 
    </nav>
  )
  }
}


export default Header
