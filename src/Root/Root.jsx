import { Outlet, useLoaderData, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";

const Root = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = setTimeout(() => {
      setLoading(true);
    }, 0);

    const end = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, [location]);

  const allDoctors = useLoaderData();
  return (
    <div className="min-h-screen  flex flex-col justify-between bg-gray-100">
      <NavBar allDoctors={allDoctors}></NavBar>
      {loading && <Loader />}
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
