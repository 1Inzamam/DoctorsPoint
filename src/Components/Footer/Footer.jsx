import { Link, NavLink } from "react-router-dom";
import facebookIcon from "../../assets/images/icons/facebook.png"
import linkedInIcon from "../../assets/images/icons/linkedin.png"
import twitterIcon from "../../assets/images/icons/twitter.png"
import youTubeIcon from "../../assets/images/icons/youtube.png"
const Footer = ({ allDoctors }) => {
  const { mainLogo } = allDoctors;

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold hover:bg-transparent focus:outline-none focus:bg-transparent active:bg-transparent"
              : "text-black hover:bg-transparent focus:outline-none focus:bg-transparent active:bg-transparent"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold hover:bg-transparent focus:outline-none focus:bg-transparent active:bg-transparent"
              : "text-black hover:bg-transparent focus:outline-none focus:bg-transparent active:bg-transparent"
          }
          to={"bookings"}
        >
          Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold hover:bg-transparent focus:outline-none focus:bg-transparent active:bg-transparent"
              : "text-black hover:bg-transparent focus:outline-none focus:bg-transparent active:bg-transparent"
          }
          to={"blogs"}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold hover:bg-transparent focus:outline-none focus:bg-transparent active:bg-transparent"
              : "text-black hover:bg-transparent focus:outline-none focus:bg-transparent active:bg-transparent"
          }
          to={"contacts"}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <footer className="footer footer-horizontal footer-center bg-white rounded p-10">
      <div className="flex items-center text-3xl font-extrabold">
        <img className="w-8 md:w-12" src={mainLogo} alt="" />
        <h1>Doctors Point</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[18px] space-x-12 font-medium px-1">{links}</ul>
      </div>
<div className="border-t-2 border-gray-200 w-[80%] md:w-1/2"></div>
      <aside className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/md-inzamam-ul-khan-77068520b/"
          target="_blank"
        >
          <button className="w-8">
            <img src={linkedInIcon} alt="" />
          </button>
        </a>
        <a href="https://www.facebook.com/inzamam.khan.718" target="_blank">
          <button className="w-8">
            <img src={facebookIcon} alt="" />
          </button>
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <button className="w-8">
            <img src={twitterIcon} alt="" />
          </button>
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <button className="w-8">
            <img src={youTubeIcon} alt="" />
          </button>
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
