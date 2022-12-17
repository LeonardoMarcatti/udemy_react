import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    sessionStorage.setItem('logged', true);
    setIsLoggedIn(true);
  };

  useEffect(() =>{
    const logged = sessionStorage.getItem('logged');    
    logged && setIsLoggedIn(true);
  }, [isLoggedIn]); // Somente se isLoggedIn mudar

  const logoutHandler = () => {
    sessionStorage.removeItem('logged');
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}

export default App;
