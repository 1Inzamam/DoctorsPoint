import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getStoredAppointments, updateAppointmentsUtil } from "../../Utility/addAppointment";
import BookedAppointment from "../../Components/BookedAppointment/BookedAppointment";

const Bookings = () => {
  const [appoint, setAppointList] = useState([]);
  const data = useLoaderData();
  const doctors = data.doctors;

  useEffect(() => {
    const localStorageData = getStoredAppointments();
    const bookedDoctorsId = localStorageData.map((id) => parseInt(id));
    const appointedList = doctors.filter((doctor) =>
      bookedDoctorsId.includes(doctor.id),
    );
    setTimeout(() => setAppointList(appointedList));
  }, [doctors]);

const cancelHandler = (id) => {
   const updateAppointments = appoint.filter((doctor) => doctor.id !== id);
   setAppointList(updateAppointments);
   const updatedIds = updateAppointments.map((doctor) => String(doctor.id));
   updateAppointmentsUtil(updatedIds);
  };
  

  return (
    <div className=" flex flex-col max-w-7xl mx-auto my-12">
      <div>
        

        {appoint.length === 0 ? (
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-center text-2xl font-bold text-red-500">
              Booked Appointments not Available
            </h1>
            <p className="text-center mt-6 text-gray-500">
              No appointments booked yet.
            </p>
            <Link to={"/"}><button className="btn bg-green-500 text-white rounded-4xl hover:bg-green-700 ">Back To Home</button></Link>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto  p-6 rounded-3xl space-y-6">
            <div className="text-center ">
              <h1>Booked Appointments</h1>
              <h3 className="">
                Here you can view all your scheduled appointments with our
                doctors. Check the date, time, and details of each booking, and
                stay updated on your upcoming visits. Manage your appointments
                easily and ensure you never miss a consultation.
              </h3>
            </div>
            <div className="w-full space-y-6">
              {appoint.map((data) => (
                <BookedAppointment key={data.id} data={data} onCancel={cancelHandler}></BookedAppointment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
