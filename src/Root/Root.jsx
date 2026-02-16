import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { Outlet, useLoaderData } from "react-router";

const Root = () => {
    const allDoctors = useLoaderData();
  return (
    <div className="min-h-screen  flex flex-col justify-between">
      <NavBar allDoctors={allDoctors}></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
