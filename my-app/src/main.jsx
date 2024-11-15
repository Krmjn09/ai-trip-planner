import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import Header from "./components/custom/Header.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CreateTrip from "./create-trip/index.jsx"

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
])

// Render the application
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
)
