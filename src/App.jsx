import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Homepage from "./components/Homepage.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experiences from "./components/Experiences.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Error from "./components/Error.jsx";

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/experiences",
        element: <Experiences />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",  
        element: <Error />,
      },
    ],
  },
]);

// Render a Layout component that includes the Navbar, Footer, and a placeholder (Outlet) for the routed content
function Layout() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Outlet /> 
      </div>
      <Footer />
    </div>
  );
}

// Render the App component with the router configuration
function App() {
  return (
    <main className="page-container">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;