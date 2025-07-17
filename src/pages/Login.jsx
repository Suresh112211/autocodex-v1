import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import Login from "./pages/Login";
// Aap yahan aur bhi pages add kar sakte ho jaise Signup, Home, etc.

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />

        {/* Future routes ke liye example:
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} /> 
        */}
        
        {/* Not Found Page (optional)
        <Route path="*" element={<NotFound />} />
        */}
      </Routes>
    </Router>
  );
};

export default App;
