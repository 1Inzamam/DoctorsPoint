import React from "react";

const BookedAppointment = ({ data }) => {
  const { name, education, specialities, fee } = data;
  console.log(name, education, specialities, fee);
  return <div>BookedAppointment</div>;
};

export default BookedAppointment;
