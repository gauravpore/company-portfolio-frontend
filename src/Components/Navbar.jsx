import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  RiMenuLine,
  RiCloseLine,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className='container'>
        <Link to='/' className='logo'>
          Logo
        </Link>

        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
        </div>

        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink exact to='/' activeClassName='active' onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName='active' onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/industry'
              activeClassName='active'
              onClick={closeMenu}
            >
              Industry
            </NavLink>
          </li>
          <li className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
            <div className='dropdown-toggle' onClick={handleDropdownToggle}>
              Products
              {isDropdownOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </div>
            <div className={`dropdown-content ${isDropdownOpen ? "open" : ""}`}>
              <NavLink to='/products/type1' activeClassName='active'>
                Type 1
              </NavLink>
              <NavLink to='/products/type2' activeClassName='active'>
                Type 2
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active' onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
