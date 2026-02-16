import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { Component } from "react";
import Home from "../Pages/Home/Home";
import Bookings from "../Pages/Bookings/Bookings";
import Blogs from "../Pages/Blogs/Blogs";
import Contacts from "../Pages/Contacts/Contacts";
export const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      const res = await fetch("doctorsData.json");
      return res.json();
    },
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
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
    ],
  },
]);
