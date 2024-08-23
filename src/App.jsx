import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import Homepage from "./components/Home.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Education from "./components/Education.jsx"
import Experiences from "./components/Experiences.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
