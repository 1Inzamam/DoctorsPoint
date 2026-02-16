import React from "react";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
const SingleDoctor = ({ doctor }) => {
  const { id, name, specialty, image, education, experience, registryNumber } =
    doctor;

  return (
    <div className="card w-64- bg-base-100">
      <figure>
        <img className="w-[full] p-6 object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        
        <h2 className="card-title">{name}</h2>
        <p>{education}</p>
        <div className="border-t-2 border-dashed">

        </div>
        <div className="flex items-center gap-3">
            <PiTrademarkRegisteredFill /> {registryNumber}
        </div>
        <div className="text-green-600">
          <button className="btn w-full rounded-4xl border-green-600 text-green-600">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
