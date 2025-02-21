 import { apiConnector } from "../../services/apiConnector"
import { useState,useEffect } from 'react';
import ComplaintCard from './ComplaintCard';
import ComplaintForm from "./ComplaintForm";

const Dashboard = () => {
   const [complaints, setComplaints] = useState([]);
   const [activeButton, setActiveButton] = useState("getComplaints");
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await apiConnector("GET", `http://localhost:4000/api/v1/complaint/${activeButton}`);
        console.log("All card data",response.data)
        setComplaints(response.data );  
      } catch (e) {
        console.log( "Something went wrong!",e);
      }  
    };
    fetchComplaints();
  }, [activeButton]);
  return (
    <div className="flex flex-col mt-5 mx-15 w-full gap-10">
        <div className="hidden lg:flex gap-5 mt-5 mx-auto w-max bg-sky-200 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
            
            <div
              className={` text-[16px] flex flex-row items-center gap-2 ${
                activeButton === "getComplaints"
                  ? "bg-sky-500 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              
              onClick={() => setActiveButton("getComplaints")}
            >
              All Active Complaints
            </div>
            <div
              className={` text-[16px] flex flex-row items-center gap-2 ${
                activeButton === "fetchAllComplaints"
                  ? "bg-sky-500 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              
              onClick={() => setActiveButton("fetchAllComplaints")}
            >
              All Complaints
            </div>
            <div
              className={` text-[16px] flex flex-row items-center gap-2 ${
                activeButton === "fetchMostUpvotedComplaints"
                  ? "bg-sky-500 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              
              onClick={() => setActiveButton("fetchMostUpvotedComplaints")}
            >
              Trending Complaints
            </div>

            
        </div>


        <div className="flex flex-wrap gap-5 mx-[4%]">
            {
            complaints.map((complaint) => (
                <ComplaintCard key={complaint._id} complaint={complaint} />
            ))
            }
        </div>

        <ComplaintForm/>
        
</div>
  )
}
export default Dashboard;

 