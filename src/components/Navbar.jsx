import React from "react";
import "./navbar.css";
import {navlinks} from "../utils/navlinks"

function Navbar({nav_logo}) {
  return (
    <nav className="nav">
      <img src={nav_logo} alt="nav--logo" className='nav--logo' />
      <ul className="nav--links">
        {
          navlinks.map(item=>(
            <li className="list--item"><a href={item.Url} >{item.page}</a></li>
          ))
        }

      </ul>
    </nav>
  )
}

export default Navbar
