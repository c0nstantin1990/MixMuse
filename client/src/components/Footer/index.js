import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2> MixMuse Powered By Stripe ©2023</h2>
      <p>
        <ul>
          <a href="https://github.com/c0nstantin1990/MixMuse">
            <li className="logo">
              <FaGithub />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
