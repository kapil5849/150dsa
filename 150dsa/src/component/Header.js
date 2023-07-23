import React from 'react';
import logo from '../assets/dsa.png';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>150 DSA</h1>
      </div>
    </header>
  );
};

export default Header;
