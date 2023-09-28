import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu";
import "../../index.css"
import logo from "../../assets/images/logoblack.png"

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <CategoryMenu />
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row2">
          <CategoryMenu />

          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header style={{ background: "var(--primary)" }} className="flex-row px-1 justify-content-center">
      <div style={{textAlign: 'center'}}> 
      <h1>
        <Link to="/" style={{ color: "var(--light)" }}>
          <span role="img" aria-label="shopping bag">
          </span>
          MixMuse 
        </Link>
        <img
        src={logo}
        alt="Logo"
        style={{ width: "75px" }}/>
      </h1>

      <nav>{showNavigation()}</nav>
      </div>  
    </header>
  );
}

export default Nav;