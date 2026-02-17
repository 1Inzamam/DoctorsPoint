import React from "react";
import AllDoctors from "../../Components/AllDoctors/AllDoctors";
import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import AnimatedCounters from "../../Components/AnimatedCounters/AnimatedCounters";

const Home = () => {
  const allDoctorsData = useLoaderData();
  return (
    <div className="flex flex-col items-center">
      <Banner allDoctorsData={allDoctorsData}></Banner>
      <AllDoctors allDoctorsData={allDoctorsData}></AllDoctors>
      <AnimatedCounters></AnimatedCounters>
    </div>
  );
};

export default Home;
