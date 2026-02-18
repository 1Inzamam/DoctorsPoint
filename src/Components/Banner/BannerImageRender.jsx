
const BannerImageRender = ({ bannerImage }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
      {bannerImage.map((bimg, index) => (
        <img
          className="p-4 md:p-0 md:w-80 lg:w-100 xl:w-144.5 sm:object-cover rounded-3xl"
          key={index}
          src={bimg.image}
          alt="Banner Image"
        />
      ))}
    </div>
  );
};

export default BannerImageRender;
