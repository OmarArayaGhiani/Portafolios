//dependencies
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

//views
import Home from "./views/Home"
import About from "./views/About"
import Contact from "./views/Contact"

//components
import NavBar from "./components/Navbar"

function App() {
  return (
    <div className="bg-main">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/proyects" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
