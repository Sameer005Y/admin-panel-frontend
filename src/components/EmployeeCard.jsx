import React from 'react';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {employee.firstName} {employee.lastName}
      </h2>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Position:</span> {employee.position}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Email:</span> {employee.email}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Phone:</span> {employee.phoneNumber}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Salary:</span> ₹{employee.salary.toLocaleString()}
      </p>
      <div className="text-sm text-gray-600 mt-2">
        <span className="font-medium">Address:</span>
        <p>{employee.address.street}</p>
        <p>{employee.address.city}, {employee.address.state} - {employee.address.zipCode}</p>
        <p>{employee.address.country}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
