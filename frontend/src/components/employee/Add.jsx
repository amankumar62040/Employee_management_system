import React, { useEffect, useState } from 'react'
import { fetchDepartments } from '../../utils/EmployeeHelper'

const Add = () => {
  const [departments,setDepartments]= useState([])
useEffect(() => {
fetchDepartments
},[])


  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          name="name"
          placeholder='Insert Name'
        //   onChange={handleChange}
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
        //   onChange={handleChange}
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
            // onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Gender:</label>
         <select 
         name="gender"
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
          // onChange={handleChange}
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
          // onChange={handleChange}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="department" className="block text-sm font-medium text-gray-700">
          Department:
        </label>
        <select
        name="department"
        className='mt-1 w-full p-2 block border border-gray-300 rounded-md'
        required>
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Admin">Admin</option>

          {/* <option value={department.dep_id}>{department.dep_name}</option> */}

          {/* {departments.map((department) => (
            <option key={department.dep_id} value={department.dep_id}>
              {department.dep_name}
            </option>
          ))} */}

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
          // onChange={handleChange}
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
          // onChange={handleChange}
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
          // onChange={handleFileChange}
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
