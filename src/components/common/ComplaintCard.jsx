import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { apiConnector } from "../../services/apiConnector"
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast"

const ComplaintCard = (complaint) => {
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);
  const [resolved, setResolved] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(complaint.complaint.like.length);
  const [downvoteCount, setDownvoteCount] = useState(complaint.complaint.dislike.length);
  const { token } = useSelector((state) => state.auth)
  var severityLevel =  complaint.complaint.severityLevel;
  const voting = async(id,like,dislike) => {
         const response = await apiConnector("POST", "http://localhost:4000/api/v1/complaint/vote",{
          id:id,
          upVote:like,
          downVote:dislike,
          token:token
         });
   console.log("vote response",response) 
   setUpvoteCount(response.data.likeCount) 
   setDownvoteCount(response.data.disLikeCount)
  }
  const complaintResolved = async(id) => {
    const response = await apiConnector("POST", "http://localhost:4000/api/v1/complaint/resolveComplaint",{
      id:id,
    token:token
    });
    console.log("complaintResolved response ",response),
    toast.success("Complaint Resolved Successful")
}
  const handleUpvote = (id) => {
    if (upVote === true) {
      setUpVote(false);
      voting(id,false,false);
    } else {
      setUpVote(true);
      if(downVote === true) setDownVote(false)
      voting(id,true,false);
    }
    
  };

  const handleDownvote = (id) => {
    if (downVote === true) {
      setDownVote(false);
      voting(id,false,false);
    } else {
      setDownVote(true);
      if(upVote === true) setUpVote(false)
        voting(id,false,true);
    }
     
  };
  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-200 transition-transform transform   ${resolved ? "opacity-50" : ""}`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{complaint.complaint.title}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{complaint.complaint.description}</p>
      
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full shadow-sm">
        {complaint.complaint.complaintType}
        </span>
        <span className={`px-4 py-1 text-sm font-semibold rounded-full shadow-sm ${
          severityLevel === "Mild" ? "bg-green-100 text-green-700" : 
          severityLevel === "Annoying" ? "bg-yellow-100 text-yellow-700" : 
          severityLevel === "Major" ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"
        }`}>
          Severity: {complaint.complaint.severityLevel}
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition font-medium shadow-sm transform hover:scale-105 duration-200 ${
            upVote === true ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() =>handleUpvote(complaint.complaint._id)}
          disabled={resolved}
        >
          <FaThumbsUp className="text-lg" />
          <span>UpVote {upvoteCount}</span>
        </button>

        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition font-medium shadow-sm transform hover:scale-105 duration-200 ${
            downVote === true ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() =>handleDownvote(complaint.complaint._id)}
          disabled={resolved}
        >
          <FaThumbsDown className="text-lg" />
          <span>Downvote {downvoteCount}</span>
        </button>
      </div>

      <button
        className={`w-full px-4 py-2 rounded-md text-white font-medium transition duration-200 shadow-sm transform hover:scale-105 ${
          resolved ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
        onClick={() => {setResolved(true);complaintResolved(complaint.complaint._id)} }
        disabled={resolved}
      >
        {resolved ? "Resolved" : "Mark as Resolved"}
      </button>
    </div>
  );
};

export default ComplaintCard;