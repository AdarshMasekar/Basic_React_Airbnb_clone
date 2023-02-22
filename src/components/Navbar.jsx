import React from "react";
import "./navbar.css";

function Navbar({nav_logo,settings_logo}) {
  return (
    <nav className="nav">
      <img src={nav_logo} alt="nav--logo" className='nav--logo' />
      <ul className="nav--links">
        <li className="list--item"><a href="#" >Sign up</a></li>
        <li className="list--item"><a href="#">Log in</a></li>
        <li className="list--item"><a href="#">Airbnb your home</a></li>
        <li className="list--item"><a href="#">Host an experience</a></li>
        <li className="list--item"><a href="#">Help</a></li>

      </ul>
    </nav>
  )
}

export default Navbar
