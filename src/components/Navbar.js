import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [watch,setWatch] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const w = () => {
    if (window.innerWidth < 960) {
      setWatch(false);
    } else {
      setWatch(true);
    }
  }
  const w2 = () => {
    console.log("watch");
    if (window.innerWidth < 960) {
      setWatch(false);
    } else {
      setWatch(false);
    }
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>   
          T-Store
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={w}
            onMouseLeave={w2}
          >
            <Link
              to='/watch'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Watch <i className='fas fa-caret-down' />
            </Link>
            {watch && <Dropdown index={1}/>}
          </li>
          <li className='nav-item' 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Phone <i className='fas fa-caret-down' />
                {dropdown && <Dropdown index={0}/>}
              </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
