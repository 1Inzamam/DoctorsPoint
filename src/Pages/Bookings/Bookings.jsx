import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import {
  getStoredAppointments,
  updateAppointmentsUtil,
} from "../../Utility/addAppointment";
import BookedAppointment from "../../Components/BookedAppointment/BookedAppointment";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";



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

  

  const chartData = appoint.map((doctor) => ({
    name: doctor.name,
    fee: doctor.fee,
  }));

  const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          border: '1px solid #d88488',
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '1px 1px 2px #d88488',
        }}
      >
        <p style={{ margin: 0, fontWeight: '700' }}>
          {`${label} : $${payload[0].value}`}
        </p>
        <p style={{ margin: 0 }}>Consultation fee of {label}</p>
      </div>
    );
  }
  return null;
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
            <Link to={"/"}>
              <button className="btn bg-green-500 text-white rounded-4xl hover:bg-green-700 ">
                Back To Home
              </button>
            </Link>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto  p-6 rounded-3xl space-y-6">
            <div>
              <div className="bg-white p-6 rounded-3xl shadow-md mb-12">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Fees of Booked Doctors
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={CustomTooltip} />
                    <Bar dataKey="fee" fill="#4ade80" />
                    
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-4xl font-extrabold">Booked Appointments</h1>
              <h3 className="text-base font-normal">
                Here you can view all your scheduled appointments with our
                doctors. Check the date, time, and details of each booking, and
                stay updated on your upcoming visits. Manage your appointments
                easily and ensure you never miss a consultation.
              </h3>
            </div>
            <div className="w-full space-y-6 mb-28">
              {appoint.map((data) => (
                <BookedAppointment
                  key={data.id}
                  data={data}
                  onCancel={cancelHandler}
                ></BookedAppointment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
