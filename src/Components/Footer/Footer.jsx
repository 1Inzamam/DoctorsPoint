import { Link } from "react-router";

const Footer = ({ allDoctors }) => {
  const { mainLogo } = allDoctors;

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
    <footer className="footer footer-horizontal footer-center bg-white rounded p-10">
      <div className="flex items-center text-3xl font-extrabold">
        <img className="w-12" src={mainLogo} alt="" />
        <h1>Doctors Point</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <aside className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/md-inzamam-ul-khan-77068520b/"
          target="_blank"
        >
          <button className="w-8">
            <img src="/src/assets/images/icons/linkedin.png" alt="" />
          </button>
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <button className="w-8">
            <img src="/src/assets/images/icons/facebook.png" alt="" />
          </button>
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <button className="w-8">
            <img src="/src/assets/images/icons/twitter.png" alt="" />
          </button>
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <button className="w-8">
            <img src="/src/assets/images/icons/youtube.png" alt="" />
          </button>
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
