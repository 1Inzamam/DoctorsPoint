import { toast } from "react-toastify";

const getStoredAppointments = () => {
  const storedAppointments = localStorage.getItem("appointments");
  if (storedAppointments) {
    const parsedAppointments = JSON.parse(storedAppointments);
    return parsedAppointments;
  } else {
    return [];
  }
};

const addAppointment = (id) => {
  const storedAppointmentData = getStoredAppointments();

  if (storedAppointmentData.includes(id)) {
    toast.error("You have already booked an appointment with this doctor.");
  } else {
    storedAppointmentData.push(id);
    const data = JSON.stringify(storedAppointmentData);
    localStorage.setItem("appointments", data);
    toast.success("Appointment booked successfully!");
  }
};

export {getStoredAppointments, addAppointment};
