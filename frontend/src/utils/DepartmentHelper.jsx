import { useNavigate } from "react-router-dom";
import axios from "axios";

export const columns = [
    {
      name: "S No",
      selector: (row) => row.sno,

    },
    {
      name: "Department Name",
      selector: (row) => row.dep_name,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  
  export const DepartmentButtons = ({_id , onDepartmentDelete}) => {

    const navigate = useNavigate()

      const handleDelete = async (id) => {
        const confirm =  window.confirm('Are you sure you want to delete')
        if(confirm){
        try {
          
          const response = await axios.delete(`http://localhost:5000/api/departments/${id}`, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
          });

          if (response.data.success) {
            onDepartmentDelete(id)
          }
      } catch (error) {
          if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
          }
      } }
      };

    return (
      <div className="flex space-x-3">
        <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded-md"
        onClick={()=>navigate(`/admin-dashboard/department/${_id}`)}
        >Edit
        </button>
        <button className="bg-red-600 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded-md" 
        onClick={()=>handleDelete(_id)}>
          Delete
        </button>
      </div>
    );
  };
  