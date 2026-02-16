import React from "react";
import { Link } from "react-router";

const Footer = () => {
  const links = (
    <>
     <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"bookings"}>Bookings</Link>
      </li>
      <li>
        <Link to={"blogs"}>Blogs</Link>
      </li>
      <li>
        <Link to={"contacts"}>Contact Us</Link>
      </li>
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
