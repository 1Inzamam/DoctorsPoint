import { createBrowserRouter } from "react-router";
import Blogs from "../Pages/Blogs/Blogs";
import Bookings from "../Pages/Bookings/Bookings";
import Contacts from "../Pages/Contacts/Contacts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      const res = await fetch("doctorsData.json");
      return res.json();
    },
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage>,
    
    children: [
      {
        index: true,
        path: "/",
        loader: async () => {
          const res = await fetch("doctorsData.json");
          return res.json();
        },
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
        path:"doctors/:id",
        loader: async () =>{
          const res = await fetch("doctorsData.json");
          return res.json();
        },
        Component:DoctorDetails,
      }
    ],
  },
  {
    path: "*",
    element:<ErrorPage></ErrorPage>,
  }
]);
