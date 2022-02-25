import React, { useEffect, useState } from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Loading from './components/loading';
import BugTable from './components/BugTable';

function App() {
  const { isLoading, loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [foundUser, setFoundUser] = useState(null);

  const baseURL = 'http://localhost:9090/users/';

  const postUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => setFoundUser(data));
  }
  
  const checkUserInDB = () => {

    const userData = {
      "auth0Sub": user.sub,
      "name": user.name,
      "nickname": user.nickname,
      "email": user.email,
      "role": user["http://demozero.net/roles"][0]
    };

    postUser(userData);
  }

  useEffect(() => {
    if(isAuthenticated){
      checkUserInDB();
    }
  }, [user])

  if (isLoading) return <Loading />

  return (
    !isAuthenticated &&(loginWithRedirect()),
    <div>
      <Navbar />
      {/* <LoginButton /> */}
      {/* <LogoutButton /> */}
      <Profile />
      <BugTable />
    </div>
  );
}

export default App;