import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Main from './components/Main';

const apiCall = `https://strangers-things.herokuapp.com/api`
const classID = `/2108-CSE-RM-WEB-PT`
const allPosts = `https://strangers-things.herokuapp.com/api/2108-CSE-RM-WEB-PT/posts`

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
