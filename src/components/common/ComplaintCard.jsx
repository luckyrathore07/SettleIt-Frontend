import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ComplaintCard = () => {
   // { title, description, complaintType, severityLevel, upvotes, downvotes }
  const [vote, setVote] = useState(null);
  const [resolved, setResolved] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(5);
  const [downvoteCount, setDownvoteCount] = useState(9);
  var severityLevel = "Mild"
  const handleUpvote = () => {
    if (vote === "upvote") {
      setVote(null);
      setUpvoteCount(upvoteCount - 1);
    } else {
      setVote("upvote");
      setUpvoteCount(upvoteCount + 1);
      if (vote === "downvote") setDownvoteCount(downvoteCount - 1);
    }
  };

  const handleDownvote = () => {
    if (vote === "downvote") {
      setVote(null);
      setDownvoteCount(downvoteCount - 1);
    } else {
      setVote("downvote");
      setDownvoteCount(downvoteCount + 1);
      if (vote === "upvote") setUpvoteCount(upvoteCount - 1);
    }
  };

  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-200 transition-transform transform   ${resolved ? "opacity-50" : ""}`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing.</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde in facilis iusto ipsa sunt ex error debitis natus, laborum dignissimos optio maiores culpa reprehenderit et eligendi accusamus aut odio.</p>
      
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full shadow-sm">
          Mild
        </span>
        <span className={`px-4 py-1 text-sm font-semibold rounded-full shadow-sm ${
          severityLevel === "Mild" ? "bg-green-100 text-green-700" : 
          severityLevel === "Annoying" ? "bg-yellow-100 text-yellow-700" : 
          severityLevel === "Major" ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"
        }`}>
          Severity: {severityLevel}
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition font-medium shadow-sm transform hover:scale-105 duration-200 ${
            vote === "upvote" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={handleUpvote}
          disabled={resolved}
        >
          <FaThumbsUp className="text-lg" />
          <span>UpVote {upvoteCount}</span>
        </button>

        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition font-medium shadow-sm transform hover:scale-105 duration-200 ${
            vote === "downvote" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={handleDownvote}
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
        onClick={() => setResolved(true)}
        disabled={resolved}
      >
        {resolved ? "Resolved" : "Mark as Resolved"}
      </button>
    </div>
  );
};

export default ComplaintCard;