import { toast } from "react-hot-toast"
import { setLoading,} from "../../slices/authSlice"
import { apiConnector } from "../apiConnector"

export function submitComplaint(data, navigate,token) {
    
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      console.log("token" )
      
      try {
      console.log("token",token)
        const response = await apiConnector("POST", "http://localhost:4000/api/v1/complaint/createComplaint", {
          title : data.title, 
          description : data.description, 
          complaintType : data.complaintType, 
          severityLevel : data.severityLevel,
          token:token
        }, )
  
        console.log("complaint API response............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Complaint Submit Successful")
        
        
        navigate("/contact")
      } catch (error) {
        console.log("Error in complaint submissionnn............", error)
        toast.error("Complaint Submission Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  