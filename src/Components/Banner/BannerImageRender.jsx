import React from "react";

const BannerImageRender = ({ bannerImage }) => {
  console.log(bannerImage);

  return (
    <div className="flex justify-center gap-6 mt-6">
      {bannerImage.map((bimg, index) => (
        <img
          className="w-144.5 rounded-3xl"
          key={index}
          src={bimg.image}
          alt="Banner Image"
        />
      ))}
    </div>
  );
};

export default BannerImageRender;
