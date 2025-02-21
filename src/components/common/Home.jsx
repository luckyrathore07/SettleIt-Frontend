 import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          Resolve Issues Effortlessly with <span className="text-blue-400">SettleIt</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          SettleIt helps you manage and resolve roommate conflicts seamlessly. Whether its rent, chores, or personal 
          disputes, our platform ensures fair resolutions for everyone involved.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button 
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
            onClick={() => navigate("/login")}
          >
            View All Complaints
          </button>
          
          <button 
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={() => navigate("/login")}
          >
            Submit a Complaint
          </button>
        </div>
      </div>

       
    </div>
  );
};

export default Home;
