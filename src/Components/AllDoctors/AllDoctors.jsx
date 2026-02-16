import React, { useState } from "react";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const AllDoctors = ({ allDoctorsData }) => {
  const doctors = allDoctorsData.doctors;

  const [showAll, setShowAll] = useState(false);

  const doctorsToShow = showAll ? doctors : doctors.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="text-center mb-12 space-y-4">
        <h3 className="font-extrabold text-5xl">Available Best Doctors</h3>
        <p className="font-normal text-basez">
          Find the best doctors in our clinic
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {doctorsToShow.map((doctor) => (
          <SingleDoctor key={doctor.id} doctor={doctor}></SingleDoctor>
        ))}
      </div>
      <div className="text-center mt-8">
        {doctors.length > 4 && !showAll && (
          <div>
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-4xl hover:bg-green-700 transition"
            >
              View All Doctors
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDoctors;
