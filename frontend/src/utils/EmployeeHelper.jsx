import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const columns = [
  {
    name: 'S No',
    selector: (row) => row.sno,
    width: "70px"
  },
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
    width: "100px"
  },
  {
    name: 'Image',
    selector: (row) => row.profileImage,
    width: "90px"
  },
  {
    name: 'Department',
    selector: (row) => row.dep_name,
    width: "120px"
  },
  {
    name: 'DOB',
    selector: (row) => row.dob,
    width: "130px"
  },
  {
    name: 'Actions',
    selector: (row) => row.action,
    center: "true",
    // allowOverflow: true,
    // button: true,
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




export const fetchDepartments = async () => {
    let departments = [];
    try {
        const response = await axios.get('http://localhost:5000/api/departments', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (response.data.success) {
            departments = response.data.departments;
        }
    } catch (error) {
        if (error.response && !error.response.data.success) {
            alert(error.response.data.error);
        }
    }
    return departments;
};



  
