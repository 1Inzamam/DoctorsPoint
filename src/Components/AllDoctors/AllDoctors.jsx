import React from "react";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const AllDoctors = ({ allDoctorsData }) => {
  const doctors = allDoctorsData.doctors;
  return (
    <div className="my-12">
      <div className="text-center mb-12 space-y-4">
        <h3 className="font-extrabold text-5xl">Available Best Doctors</h3>
        <p className="font-normal text-basez">Find the best doctors in our clinic</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {doctors.map((doctor) => (
          <SingleDoctor key={doctor.id} doctor={doctor}></SingleDoctor>
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;
