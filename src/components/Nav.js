/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronLeft, Mic, Settings } from 'react-feather';

const Navbar = () => {
  const location = useLocation();
  const [navPosition, setNavPosition] = useState(0);
  useEffect(() => {
    switch (location.pathname) {
      case '/cities':
        setNavPosition(0);
        break;
      case '/city':
        setNavPosition(1);
        break;
      default:
    }
  }, [location]);

  return (
    <nav className="nav">
      <div className="nav_div nav_div-left">
        {navPosition === 0
          ? <span>{(new Date()).getFullYear()}</span>
          : (
            <span>
              <NavLink to="/cities"><ChevronLeft /></NavLink>
            </span>
          )}
      </div>
      <div className="nav_div nav_div-center">
        {navPosition === 0
          ? <span>most views</span>
          : <span>town/city views</span>}
      </div>
      <div className="nav_div nav_div-right">
        <div>
          <span><Mic /></span>
          <span><Settings /></span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
