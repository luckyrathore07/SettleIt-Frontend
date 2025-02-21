import { useForm } from "react-hook-form";
import { FiAlertCircle } from "react-icons/fi";
import { submitComplaint } from "../../services/operations/complaintsAPI";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";

const ComplaintForm = ( ) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log("Complaint Submitted:", data);
    dispatch(submitComplaint(data,navigate,token))
  };

  return (
    <div className="w-[40%] mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200 mt-10 mb-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Submit a Complaint</h2>
      <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter complaint title"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1 flex items-center"><FiAlertCircle className="mr-1" /> {errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Describe the issue..."
          ></textarea>
          {errors.description && <p className="text-red-500 text-xs mt-1 flex items-center"><FiAlertCircle className="mr-1" /> {errors.description.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Complaint Type</label>
          <select
            {...register("complaintType", { required: "Complaint type is required" })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="" disabled selected>Select Type</option>
            <option value="Noise">Noise</option>
            <option value="Cleanliness">Cleanliness</option>
            <option value="Bills">Bills</option>
            <option value="Pets">Pets</option>
          </select>
          {errors.complaintType && <p className="text-red-500 text-xs mt-1 flex items-center"><FiAlertCircle className="mr-1" /> {errors.complaintType.message}</p>}
        </div>

 
        <div>
          <label className="block text-sm font-medium text-gray-700">Severity Level</label>
          <select
            {...register("severityLevel", { required: "Severity level is required" })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="" disabled selected>Select Severity</option>
            <option value="Mild">Mild</option>
            <option value="Annoying">Annoying</option>
            <option value="Major">Major</option>
            <option value="Nuclear">Nuclear</option>
          </select>
          {errors.severityLevel && <p className="text-red-500 text-xs mt-1 flex items-center"><FiAlertCircle className="mr-1" /> {errors.severityLevel.message}</p>}
        </div>

       
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;