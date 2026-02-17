import React from "react";
import SingleDoctor from "../../Components/SingleDoctor/SingleDoctor";
import { useLoaderData, useParams } from "react-router";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
const DoctorDetails = () => {
  const { id } = useParams();
  const convertedId = parseInt(id);
  const data = useLoaderData();
  const idData = data.doctors.find((doctor) => doctor.id === convertedId);

  if (!idData) {
    return <p>Loading...</p>;
  }
  const {
    description,
    image,
    name,
    education,
    availability,
    fee,
    workplace,
    registryNumber,
  } = idData;

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto gap-6">
      <div className="space-y-3 w-xs md:w-3xl lg:w-4xl xl:w-7xl mx-auto rounded-3xl bg-white text-center py-8">
        <h1 className="text-3xl font-extrabold">Profile Details</h1>
        <p className="w-full">{description}</p>
      </div>
      <div className="w-full">
        <div className="card flex flex-col md:flex-row p-8 w-full card-side bg-base-100 shadow-sm">
          <figure className="p-6">
            <img className="w-64 rounded-3xl" src={image} alt="Movie" />
          </figure>
          <div className="card-body space-y-4">
            <h2 className="card-title text-4xl font-extrabold">{name}</h2>
            <p className="font-medium text-[18px]">{education}</p>
            <p className="text-xl text-gray-400 font-medium">
              Working at <br />
              <span className="text-black font-bold ">{workplace}</span>
            </p>
            <div className="border-t-2 border-dashed border-gray-200"></div>
            <div className="flex items-center gap-2 text-[18px]">
              <PiTrademarkRegisteredFill />
              {registryNumber}
            </div>
            <div className="border-t-2 border-dashed border-gray-200"></div>
            <div className="flex gap-3 items-center">
              <h3 className="font-bold">Availability</h3>
              {availability.split(",").map((day, index) => (
                <div
                  className="badge bg-amber-100 border border-amber-300 text-amber-500 p-4 rounded-3xl "
                  key={index}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <h3 className="font-bold">Consultation Fee:</h3>
              <h3 className="text-green-600">
                Taka: {fee} (Vat not included) per consultation
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
