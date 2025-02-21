 
import { apiConnector } from "../../services/apiConnector"
import { useState,useEffect } from 'react';
import ComplaintCard from './ComplaintCard';
const Home = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await apiConnector("GET", "http://localhost:4000/api/v1/complaint/getComplaints");
        console.log("All card data",response.data)
        setComplaints(response.data );  
      } catch (e) {
        console.log( "Something went wrong!",e);
      }  
    };
    fetchComplaints();
  }, []);
  return (
    <div className="flex flex-wrap gap-5 mt-5 mx-15">
        {
        complaints.map((complaint) => (
             
            <ComplaintCard key={complaint._id} complaint={complaint} />
        ))
        }
</div>
  )
}

export default Home
