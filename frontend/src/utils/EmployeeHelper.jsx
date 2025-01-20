import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const columns = [
  {
    name: 'S No',
    selector: (row) => row.sno,
    sortable: true,
  },
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'Image',
    selector: (row) => <img src={row.profileImage} alt="Profile" width={50} height={50} />,
    sortable: true,
  },
  {
    name: 'Department',
    selector: (row) => row.dep_name,
    sortable: true,
  },
  {
    name: 'DOB',
    selector: (row) => row.dob,
    sortable: true,
  },
  {
    name: 'Actions',
    selector: (row) => row.action,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

export const EmployeeButtons = ({ Id }) => {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-3">
      <button
        className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded-md"
        onClick={() => navigate(`/admin-dashboard/employee/${Id}`)}
      >
        View
      </button>
      <button
        className="bg-green-600 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded-md"
        onClick={() => navigate(`/admin-dashboard/edit-employee/${Id}`)}
      >
        Edit
      </button>
      <button
        className="bg-yellow-600 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded-md"
        onClick={() => navigate(`/admin-dashboard/employee-salary/${Id}`)}
      >
        Salary
      </button>
      <button
        className="bg-red-600 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded-md"
        onClick={() => navigate(`/admin-dashboard/employee-leave/${Id}`)}
      >
        Leave
      </button>
    </div>
  );
};
