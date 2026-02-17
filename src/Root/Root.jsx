import { Outlet, useLoaderData } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";

const Root = () => {
  const allDoctors = useLoaderData();
  return (
    <div className="min-h-screen  flex flex-col justify-between bg-gray-100">
      <NavBar allDoctors={allDoctors}></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
