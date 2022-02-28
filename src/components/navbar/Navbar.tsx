import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import CodeSebb from '../../assets/CodeSebb.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#code">Code</a></p>
  <p><a href="#dance">Dance</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="cs__navbar">
      <div className="cs__navbar-links">
        <div className="cs__navbar-links_logo">
          <img src={CodeSebb} alt="logo" />
        </div>
        <div className="cs__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="cs__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
      
      }
      {toggleMenu && (
        <div className="cs__navbar-menu_container scale-up-center"> 
          <div className="cs__navbar-menu_container-links">
            <Menu />
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar