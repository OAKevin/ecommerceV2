import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from './torres4kmedia.png';

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    const handleClick = () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    };

    hamburger.addEventListener('click', handleClick);

    return () => {
      hamburger.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header>
      <Link to="/">Torres4K</Link>
      <img src={logo} alt="Torres4K.inc Logo" className="logo" />

      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cars">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;