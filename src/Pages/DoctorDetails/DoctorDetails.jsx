import React from "react";
import SingleDoctor from "../../Components/SingleDoctor/SingleDoctor";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const { id } = useParams();
  const convertedId = parseInt(id);
  const data = useLoaderData();
  const idData = data.doctors.find((doctor) => doctor.id === convertedId);
  const { description } = idData;
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto">
      <div className="space-y-3 w-7xl mx-auto rounded-3xl bg-base-200 text-center py-8">
        <h1 className="text-3xl font-extrabold">Profile Details</h1>
        <p className="w-full">{description}</p>
      </div>
    </div>
  );
};

export default DoctorDetails;
