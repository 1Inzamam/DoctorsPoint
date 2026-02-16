import React from "react";
import BannerImageRender from "./BannerImageRender";

const Banner = ({ allDoctorsData }) => {
  const bannerImage = allDoctorsData.bannerImage;

  return (
    <div className="p-0.75 bg-linear-to-b from-base-200 to-gray-100 rounded-3xl">
      <div className="max-w-600 bg-linear-to-b from-gray-200 to-base-200 py-16 px-40 rounded-3xl flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold text-center mt-10">
          Your Health, Our Priority
        </h1>
        <p className="text-center w-[50%]">
          Book appointments with trusted doctors, explore medical specialties,
          and manage your healthcare seamlessly — all in one place.
        </p>
        <div
          className="flex flex-col items-center md:flex-row justify-center gap-6
       mt-6"
        >
          <input
            type="text"
            className="text-center md:text-left textarea-sm md:text-lg w-72 md:w-96 lg:w-150 bg-base-200 border border-gray-300 rounded-4xl p-2 mt-4"
            placeholder="Search for doctors, specialties, or services..."
          />

          <button className="btn w-32 md:w-44.5 hover:bg-green-700 bg-green-600 text-white text-base md:text-lg rounded-4xl p-2 mt-4">
            Search
          </button>
        </div>
        <div>
          <BannerImageRender bannerImage={bannerImage}></BannerImageRender>
        </div>
      </div>
    </div>
  );
};

export default Banner;
