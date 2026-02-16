import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-between">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
