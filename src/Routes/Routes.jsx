import { createBrowserRouter } from "react-router";
import Blogs from "../Pages/Blogs/Blogs";
import Bookings from "../Pages/Bookings/Bookings";
import Contacts from "../Pages/Contacts/Contacts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";

const fetchDoctorsData = async () => {
  const res = await fetch("/doctorsData.json");
  if (!res.ok) {
    throw new Error("Failed to fetch doctors data");
  }
  return res.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    loader: fetchDoctorsData,
    errorElement: <ErrorPage />,
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        loader: fetchDoctorsData,
        Component: Home,
      },
      {
        path: "bookings",
        Component: Bookings,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contacts",
        Component: Contacts,
      },
      {
        path: "doctors/:id",
        loader: fetchDoctorsData,
        Component: DoctorDetails,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
