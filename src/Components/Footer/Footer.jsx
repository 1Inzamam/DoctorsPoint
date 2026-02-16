import React from "react";
import { Link } from "react-router";

const Footer = () => {
  const links = (
    <>
      <Link to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to={"bookings"}>
        <li>
          <a>Bookings</a>
        </li>
      </Link>
      <Link to={"blogs"}>
        <li>
          <a>Blogs</a>
        </li>
      </Link>
      <Link to={"contacts"}>
        <li>
          <a>Contact Us</a>
        </li>
      </Link>
    </>
  );
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 rounded p-10">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
