import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import EmployeeCard from './components/EmployeeCard.jsx';
import EmployeeCard from "../components/EmployeeCard.jsx";


const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get('http://localhost:3000/api/epmloyee');
      setEmployees(res.data); // Assumes backend returns an array
    };
    fetchEmployees();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {employees.map((emp, index) => (
        <EmployeeCard key={index} employee={emp} />
      ))}
    </div>
  );
};

export default Employees;
