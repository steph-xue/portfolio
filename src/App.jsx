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
import Art from "./components/Art.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Error from "./components/Error.jsx";
import FluidCursor from "./components/FluidCursor.jsx"; 

// Router configuration
const router = (darkMode, toggleDarkMode) => createBrowserRouter([
  {
    path: "/",
    element: <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
    children: [
      {
        path: "/",
        element: <Homepage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
        errorElement: <Error darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
      },
      {
        path: "/about",
        element: <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
      },
      {
        path: "/projects",
        element: <Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
      },
      {
        path: "/experiences",
        element: <Experiences darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
      },
      {
        path: "/art",
        element: <Art darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
      },
      {
        path: "/contact",
        element: <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
      },
      {
        path: "*",  
        element: <Error darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
      },
    ],
  },
]);

// Render a Layout component that includes the Navbar, Footer, and a placeholder (Outlet) for the routed content
function Layout(props) {
  return (
    <>
      <FluidCursor />

      <div>
        <NavBar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
        <div className="content">
          <Outlet />
        </div>
        <Footer darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
      </div>
    </>
  );
}

// Render the App component with the router configuration
function App() {

  // Set state for dark mode
  const [darkMode, setDarkMode] = React.useState(false);
  
  // Function to toggle dark mode
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <main className={darkMode ? "page-container dark-page " : "page-container light-page"}>
      <RouterProvider router={router(darkMode, toggleDarkMode)} />
    </main>
  );
}

export default App;