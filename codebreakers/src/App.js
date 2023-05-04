import Navbar from "./Components/Navbar"

import Home from "./pages/Home"

import Business from "./pages/Business/Business"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </div>
    </>
  )
}

export default App
