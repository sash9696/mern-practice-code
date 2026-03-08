import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";

// WHy routing exists

// traditionally for each htnl page there is a new url
// /home -> home.html
// /products -> products.html
// /about -> about.html

// Each navigation causes:
// full page reload
// New html request
// Javascript reload

// SPA (the browser loads only one html page)
// Navaigation updates without reloading the page
// /products -> render Products component
// /about  ->  render About Component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
