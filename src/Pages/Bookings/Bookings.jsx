import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredAppointments } from "../../Utility/addAppointment";
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
  console.log(appoint);
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto my-12">
      <div>
        {appoint.length === 0 ? (
          <div>
            <h1 className="text-center text-2xl font-bold text-red-500">
              Booked Appointments not Available
            </h1>
            <p className="text-center mt-6 text-gray-500">
              No appointments booked yet.
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center lg:w-252.25">
              <h1>Booked Appointments</h1>
              <h3>
                Here you can view all your scheduled appointments with our
                doctors. Check the date, time, and details of each booking, and
                stay updated on your upcoming visits. Manage your appointments
                easily and ensure you never miss a consultation.
              </h3>
            </div>
            <div>
              {appoint.map((data) => (
                <BookedAppointment key={data.id} data={data}></BookedAppointment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
