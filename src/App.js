import React from "react";
import "./i18n"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Accounting from "./pages/Accounting";
import Consulting from "./pages/Consulting";
import ManageServices from "./pages/ManageServices";
import Technology from "./pages/Technology";
import ContactUs from "./pages/ContactUs";
import Human from "./pages/Human";
import Bookappointment from "./pages/Bookappointment";   // ✅ Added

import "./assets/css/custom.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services Overview */}
        <Route path="/services" element={<Services />} />

        {/* Service Detail Pages */}
        <Route path="/services/accounting" element={<Accounting />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/ManageServices" element={<ManageServices />} />
        <Route path="/services/technology" element={<Technology />} />
        <Route path="/services/human" element={<Human />} />

        {/* Contact */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Book Appointment Page */}
        <Route path="/book-appointment" element={<Bookappointment />} /> {/* ✅ Added */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
