import React,{ useState, useEffect } from 'react';
import logo from '../assets/dsa.png';
import '../styles/header.css';

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      localStorage.setItem('user', JSON.stringify(codeResponse));
    },
    onError: (error) => console.log('Login Failed:', error)
  });
  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
    localStorage.removeItem('user');
  };
  return (

    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>150 DSA</h1>
      </div>
      <div className="join-now-button">
      {profile ? (
        <div className="user-profile">
          <img src={profile.picture} alt="user image" />
          <p>Welcome, {profile.name} 💻</p>
          <button className="logout-button" onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀</button>
      )}
      </div>
    </header>
  );
};

export default Header;
