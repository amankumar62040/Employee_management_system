import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
    const {id} =useParams()
    const  [employee, setEmployee] = useState([])

    useEffect(() => {
        const fetchEmployee = async () => {
        
            try {
                const response = await axios.get(`http://localhost:5000/api/employee/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                console.log(response.data);

                if (response.data.success) {
                    setEmployee(response.data.employee);
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error);
                }
            
            }
        };

        fetchEmployee();
    }, []);

  return (
    <div>
      <div>
        <img src="employee.userId" alt=""></img>
      </div>
    </div>
  )
}

export default View
