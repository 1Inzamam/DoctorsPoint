import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      {/* <div><NavBar></NavBar></div> */}
      <h1 className="text-4xl font-bold text-center mt-10">404 - Page Not Found</h1>
    </div>
  );
};

export default ErrorPage;
