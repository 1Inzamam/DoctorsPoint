const BookedAppointment = ({ data, onCancel }) => {
  const { id, name, education, specialities, fee } = data;

  return (
    <div className="w-full space-y-3 bg-white rounded-3xl p-6">
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
      <button
        onClick={() => onCancel(id)}
        className="w-full btn bg-red-100 border-red-500 rounded-3xl text-red-500"
      >
        Cancel Appointment
      </button>
    </div>
  );
};
export default BookedAppointment;
