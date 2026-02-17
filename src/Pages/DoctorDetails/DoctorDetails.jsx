import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { Link, useLoaderData, useParams } from "react-router";
import { addAppointment } from "../../Utility/addAppointment";
const DoctorDetails = () => {
  const { id } = useParams();
  const convertedId = parseInt(id);
  const data = useLoaderData();
  const idData = data.doctors.find((doctor) => doctor.id === convertedId);
  const today = new Date().toLocaleString("en-US", { weekday: "long" });

  if (!idData) {
    return <p>Loading...</p>;
  }
  const {
    description,
    image,
    name,
    education,
    availability,
    fee,
    workplace,
    registryNumber,
  } = idData;
  const isAvailable = availability.includes(today);

  const handleAppointment = (appointmentId) => {
    addAppointment(appointmentId);
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-6 ">
      <div className="space-y-3 w-xs md:w-2xl lg:w-4xl xl:w-7xl mx-auto rounded-3xl bg-white text-center py-8">
        <h1 className="text-3xl font-extrabold">Profile Details</h1>
        <p className=" lg:w-full">{description}</p>
      </div>
      <div className="w-full">
        <div className="card flex flex-col items-center lg:flex-row p-8 w-xs md:w-2xl lg:w-4xl xl:w-7xl card-side bg-base-100 rounded-3xl">
          <figure className="p-6 w-full md:w-[50%] lg:w-[35%]">
            <img className="w-full rounded-3xl" src={image} alt="Movie" />
          </figure>
          <div
            className="card-body text-center
           lg:w-[60%] lg:text-left space-y-4 lg:space-y-3 "
          >
            <h2 className="flex flex-col lg:flex-row card-title text-xl md:text-2xl lg:text-4xl font-extrabold">
              {name}
            </h2>
            <p className="text-xs md:text-[14px] lg:text-[16px] text-gray-400 font-medium">
              {education}
            </p>
            <p className="text-xs md:text-[14px] lg:text-[16px] text-gray-400 font-medium">
              Working at <br />
              <span className="text-black text-xl lg:text-2xl font-bold ">
                {workplace}
              </span>
            </p>
            <div className="border-t-2 border-dashed border-gray-200"></div>
            <div className="flex flex-col lg:flex-row items-center gap-2 text-xs md:text-[14px] lg:text-[16px] text-gray-400 font-medium">
              <div>
                {" "}
                <PiTrademarkRegisteredFill />
              </div>
              <div>{registryNumber}</div>
            </div>
            <div className="border-t-2 border-dashed border-gray-200"></div>
            <div className="flex flex-col lg:flex-row gap-3 items-center">
              <h3 className="font-bold">Availability</h3>
              {availability.split(",").map((day, index) => (
                <div
                  className="badge bg-amber-100 border border-amber-300 text-amber-500 md:p-4 rounded-3xl w-24 text-[12px] md:text-[14px] font-medium"
                  key={index}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row text-center md:items-center gap-3">
              <h3 className="font-bold">Consultation Fee:</h3>
              <h3 className="text-green-600">
                Taka: {fee} (Vat not included) per consultation
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 mb-4 rounded-3xl bg-white w-full p-6 space-y-3">
        <div>Appointment</div>
        <div className="space-y-4">
          <div className="w-full border-t-2   border-dashed border-gray-200"></div>
          <div className="flex justify-between">
            <h1>Availability</h1>
            <div
              className={`badge ${isAvailable ? "bg-green-100 text-green-700 border-green-300" : "bg-red-100 text-red-700 border-red-300"}`}
            >
              {isAvailable ? "Available" : "Unavailable"}
            </div>
          </div>
          <div className="border-t-2 border-gray-200"></div>
        </div>
        <Link to="/bookings">
          <button
            onClick={() => handleAppointment(id)}
            className="btn w-full rounded-4xl bg-green-500 text-white"
          >
            Take Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
