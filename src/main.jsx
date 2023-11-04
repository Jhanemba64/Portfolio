import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Liens from "./components/Liens.jsx";

import Liens2 from "./components/Liens2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Liens", element: <Liens /> },
      {
        path: "/Liens2",
        element: <Liens2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
