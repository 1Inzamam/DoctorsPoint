import React from "react";
import { DiFirebase } from "react-icons/di";

const BookedAppointment = ({ data }) => {
  const { name, education, specialities, fee } = data;
  console.log(name, education, specialities, fee);
  return (
    <div className="space-y-3 w-7xl bg-white rounded-3xl p-6" >
    <div className="flex justify-between">
      <div>
        <h1>{name}</h1>
        <h3>
          {education}, {specialities}
        </h3>
      </div>
      <div>{fee}</div>
    </div>
    <div className="border-t-2 border-dashed border-gray-200"></div>
    <button className="w-full btn bg-red-100 border-red-500 rounded-3xl text-red-500">Cancel Appointment</button>
    </div>
  );
};
export default BookedAppointment;
