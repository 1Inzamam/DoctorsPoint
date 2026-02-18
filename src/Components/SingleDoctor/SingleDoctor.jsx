import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { Link } from "react-router";
const SingleDoctor = ({ doctor }) => {
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  const {
    id,
    name,
    image,
    education,
    experience,
    registryNumber,
    availability,
  } = doctor;
   const isAvailable = availability.includes(today);
  return (
    <div className="card w-64 md:w-full bg-base-100">
      <figure>
        <img className="w-[full] p-6 object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center">
          <div
            className={`badge text-[12px] font-medium p-4 rounded-4xl ${isAvailable ? "w-20 bg-green-100 border-green-300 text-green-700" : "w-22 bg-red-100 border-red-300 text-red-700"}`}
          >
            {isAvailable ? "Available" : "Unavailable"}
          </div>
          <div>
            <div className="badge p-4 bg-green-100 text-green-700 text-[12px] font-medium rounded-4xl border-green-300">
              {experience}+ Years Experience
            </div>
          </div>
        </div>
        <h2 className="card-title">{name}</h2>
        <p>{education}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="flex items-center gap-3">
          <PiTrademarkRegisteredFill /> {registryNumber}
        </div>
        <div className="text-green-600">
          <Link to={`doctors/${id}`}>
            <button className="btn w-full rounded-4xl border-green-600 text-green-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
