import React, { useEffect, useState } from 'react'
import { fetchDepartments } from '../../utils/EmployeeHelper'
import axios from 'axios'
const Add = () => {
  const [departments,setDepartments]= useState([])

  const [formData,setFormData]= useState({})





useEffect(() => {
  const getDepartments=async () =>{
   const departments=  await fetchDepartments()
   setDepartments(departments)
  }
  getDepartments();
},[])

const handleChange=(e)=>{
  const {name , value , files}= e.target
  if(name==="image")
  {
    setFormData((prevData)=>({...prevData, [name]: files[0]}))
  }
  else{
    setFormData((prevData)=>({...prevData, [name]: value}))
  }
  
}


    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Ensure token exists
      // const token = localStorage.getItem('token');
      // if (!token) {
      //   alert('Token is missing');
      //   return;
      // }
      const formDataObj = new FormData()
      Object.keys(formData).forEach((key)=> {
        formDataObj.append(key, formData[key])
      })
  
      try {
        const response = await axios.post(
          'http://localhost:5000/api/departments/add',
          department,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        
  
        if (response.data.success) {
          // Redirect to departments page if success
          navigate('/admin-dashboard/departments');
        }
      } catch (error) {
        // Log the error for debugging
  
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
  
  











  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder='Insert Name'
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          name="email"
          onchange={handleChange}
          placeholder='Insert Email'
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

        {/* Employee ID */}

      <div>
        <label htmlFor="ID" className="block text-sm font-medium text-gray-700">
        Employee ID:
        </label>
        <input
          type="text"
          name="employeeId"
          placeholder='Employee ID'
          onChange={handleChange}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* dob */}
      <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            Date of Birth:
          </label>
          <input
            type="date"
            name="dob"
            placeholder='YYYY-MM-DD'
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Gender:</label>
         <select 
         name="gender"
         onChange={handleChange}
         className='mt-1 w-full p-2 block border border-gray-300 rounded-md'
        required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>

        </select>
      </div>

      <div>
        <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
          Marital Status:
        </label>
        <select
          name="maritalStatus"
          placeholder="Marital Status"
          // value={employee.maritalStatus}
          onChange={handleChange}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>
      </div>

      <div>
        <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
          Designation:
        </label>
        <input
          type="text"
          name="designation"
          placeholder='Designation'
          // value={employee.designation}
          onChange={handleChange}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="department" className="block text-sm font-medium text-gray-700">
          Department:
        </label>
        <select
        name="deparment"
        onChange={handleChange}
        className='mt-1 w-full p-2 block border border-gray-300 rounded-md'
        required>
          <option value="">Select Department</option>
          {departments.map((dep)=>(
            <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
          ))}

        </select>
      
      </div>

      <div>
        <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
          Salary:
        </label>
        <input
          type="number"
          name="salary"
          placeholder='Salary'
          // value={employee.salary}
          onChange={handleChange}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder='*********'
          // value={employee.password}
          onChange={handleChange}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Role:
        </label>
        <select
        name="role"
        onChange={handleChange}
        className='mt-1 w-full p-2 block border border-gray-300 rounded-md'
        required>
          <option value="">Select Role</option>
          <option value="Manager">Admin</option>
          <option value="Employee">Employee</option>
        </select>
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Upload Image:
        </label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          placeholder='Upload image'
          accept='image/*'
          className="mt-1 w-full p-2 block border border-gray-300 rounded-md"
          required
        />
      </div>
      </div>

      <button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-md"
      >
        Add Employee
      </button>
    </form>
  </div>
  )
}

export default Add
