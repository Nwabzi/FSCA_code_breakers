import Navbar from "./Components/Navbar"

import Home from "./pages/Home/Home"

import Business from "./pages/Business/Business"
import BusinessMetrics from "./pages/BusinessMetrics/BusinessMetrics"
import { Route, Routes } from "react-router-dom"
import Loans from "./pages/Loans/Loans"
import SignUp from "./pages/SignUp/SignUp"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/metrics" element={<BusinessMetrics />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/createBusiness" element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App
