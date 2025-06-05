import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import AddRoom from './pages/AddRoom';
// import EditRoom from './pages/EditRoom';
import Employees from "./pages/Employees";
import Salaries from "./pages/Salaries";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/add" element={<AddRoom />} />
            {/* <Route path="/rooms/edit/:id" element={<EditRoom />} /> */}
            <Route path="/employees" element={<Employees />} />
            <Route path="/salaries" element={<Salaries />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;