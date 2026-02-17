import React from "react";

const BannerImageRender = ({ bannerImage }) => {
  return (
    <div className="flex flex-col md:flex justify-center gap-6 mt-6">
      {bannerImage.map((bimg, index) => (
        <img
          className="w-70 md:w-80 lg:w-100 xl:w-144.5 rounded-3xl"
          key={index}
          src={bimg.image}
          alt="Banner Image"
        />
      ))}
    </div>
  );
};

export default BannerImageRender;
