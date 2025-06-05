import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 bg-gray-800 text-white p-4">
    <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
    <nav className="space-y-4">
      <Link to="/" className="block hover:text-blue-400">Dashboard</Link>
      <Link to="/bookings" className="block hover:text-blue-400">Bookings</Link>
      <Link to="/rooms" className="block hover:text-blue-400">Rooms</Link>
      <Link to="/employees" className="block hover:text-blue-400">Employees</Link>
      <Link to="/salaries" className="block hover:text-blue-400">Salaries</Link>
      <Link to="/login" className="block hover:text-blue-400">Logout</Link>
    </nav>
  </div>
);

export default Sidebar;