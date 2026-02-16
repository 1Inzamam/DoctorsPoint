import React from "react";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const AllDoctors = ({ allDoctorsData }) => {
  const doctors = allDoctorsData.doctors;
  return (
    <div>
      <div className="text-center">
        <h3>Available Best Doctors</h3>
        <p>Find the best doctors in our clinic</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <SingleDoctor key={doctor.id} doctor={doctor}></SingleDoctor>
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;
