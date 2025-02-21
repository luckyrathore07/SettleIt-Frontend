import { toast } from "react-hot-toast"
import { setLoading, setToken } from "../../slices/authSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"

export function login(data, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
       
      try {
        const response = await apiConnector("POST", "http://localhost:4000/api/v1/auth/login", {
          email : data.email,
          password : data.password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
         console.log(response.data.token)
        dispatch(setUser({ ...response.data.user }))
        localStorage.setItem("token", JSON.stringify(response.data.token))
        navigate("/dashboard")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  export function signUp(
    data,
    navigate
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", "http://localhost:4000/api/v1/auth/signup", {
            name:data.name,
            email : data.email, 
            password : data.password, 
            confirmPassword : data.confirmPassword,
            flatCode : data.flatCode, 
            
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Signup Successful")
        navigate("/login")
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/signup")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }