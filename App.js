import React, { useState } from 'react'
import Header from './Header';
import Main from './Main';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
  <div>
    <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
    <Main setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
  </div>
  )
}
export default App