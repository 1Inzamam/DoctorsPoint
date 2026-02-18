import React, { useState } from "react";
import BannerImageRender from "./BannerImageRender";

const Banner = ({
  allDoctorsData,
  searchText,
  setSearchText,
  handleSearch,
  setFilteredDoctors,
}) => {
  const [inputFocused, setInputFocused] = useState(false);
  const bannerImage = allDoctorsData.bannerImage;

  return (
    <div className="w-full md:w-3xl lg:w-4xl xl:w-7xl p-0.75 bg-linear-to-b from-base-200 to-gray-100 rounded-3xl">
      <div className="max-w-600 bg-linear-to-b from-gray-200 to-base-200 py-16 md:px-40 rounded-3xl flex flex-col items-center space-y-4">
        <div className="space-y-4 p-6">
          <h1 className="text-4xl font-bold text-center mt-10">
            Your Health, Our Priority
          </h1>
          <p className="text-center w-full">
            Book appointments with trusted doctors, explore medical specialties,
            and manage your healthcare seamlessly — all in one place.
          </p>
        </div>
        <div
          className="flex flex-col items-center md:flex-row justify-center gap-6
       mt-6"
        >
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              const value = e.target.value;
              setSearchText(value);
              if (value.trim() === "") {
                setFilteredDoctors(allDoctorsData.doctors);
              }
            }}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="text-center md:text-left textarea-sm md:text-lg w-72 md:w-96 lg:w-150 bg-base-200 border border-gray-300 rounded-4xl p-2 mt-4"
            placeholder="Search for doctors, specialties, or services..."
          />

          <button
            onClick={handleSearch}
            className="btn w-32 md:w-44.5 hover:bg-green-700 bg-green-600 text-white text-base md:text-lg rounded-4xl py-6 px-2 mt-4"
          >
            Search
          </button>
        </div>
        <div className={
          `transition-all duration-500 ease-in-out ${
            inputFocused ? "opacity-0 max-h-0" : "opacity-100 h-auto"
          }`
        }>
          <BannerImageRender bannerImage={bannerImage}></BannerImageRender>
        </div>
      </div>
    </div>
  );
};

export default Banner;
