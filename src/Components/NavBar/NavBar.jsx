import { Link, NavLink } from "react-router-dom";

const NavBar = ({ allDoctors }) => {
  const logo = allDoctors
    ? allDoctors.mainLogo
    : "https://i.ibb.co.com/wNtxmtxd/medical.png";

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
    <div className="navbar max-w-7xl p-6 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[18px] space-x-12 font-medium  px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-green-600 text-white rounded-4xl">Emergency</a>
      </div>
    </div>
  );
};

export default NavBar;
