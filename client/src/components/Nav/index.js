import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu";
import Success from "../../pages/Success";
import { idbPromise } from "../../utils/helpers";
import "../../index.css";
import logo from "../../assets/images/logoblack.png";

function Nav() {
  const [logoutSuccess, setLogoutSuccess] = useState(false);

  const handleLogout = async () => {
    Auth.logout();
    const cart = await idbPromise("cart", "get");
    cart.forEach(async (item) => {
      await idbPromise("cart", "delete", item);
    });
    setLogoutSuccess(true);
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-column">
          <li className="mx-1">
            <CategoryMenu />
          </li>
          <li className="mx-1">
              <Link to="/orderHistory" className="mx-2">Order History</Link>
              <Link to="/" onClick={handleLogout} className="mx-2">
                Logout
              </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-column">
          <li className="mx-1">
            <CategoryMenu />
          </li>
          <li className="mx-1">
            <Link to="/signup" className="mx-2">Signup</Link>
            <Link to="/login" className="mx-2">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header
      style={{ background: "var(--primary)" }}
      className="flex-row px-1 justify-content-center"
    >
      <div style={{ textAlign: "center" }}>
        <h1>
          <img src={logo} alt="Logo" style={{ width: "45px" }} />
          <Link to="/" style={{ color: "var(--light)" }}>
            <span role="img" aria-label="shopping bag"></span>
            MixMuse
          </Link>
        </h1>

        <nav>{showNavigation()}</nav>
        {logoutSuccess && <Success />}
      </div>
    </header>
  );
}

export default Nav;
