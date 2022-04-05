import React from "react";
import { Link  } from "react-router-dom";

import './Navbar.scss';


const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper navbar blue">
        <Link to="/" className="brand-logo">MERN TODO APP</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Войти</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar