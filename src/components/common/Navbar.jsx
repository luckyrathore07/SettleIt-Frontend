import { Link , useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../services/operations/authAPI";
import { useDispatch  } from "react-redux"
import logo from  "../../assets/Settleit_Logo_Small.png"

const Navbar = () => {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and App Name */}
        <div className="flex items-center">
          <img src={logo} alt="QuirkyRoomie Logo" className="h-10 w-25 mr-2" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
        <li>
            { token  &&
              <li>
                <Link to="/createComplaint" className="hover:underline">Submit Complaint</Link>
              </li>
            }
          </li>
          <li>
            { token == null &&
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
            }
          </li>
          
          <li>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </li>
          { token == null && 
            <div className="flex gap-2">
            <li>
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
          </li>
          </div>
            
          }

          { token &&
            <li>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            </li>
          }
          { token &&
            <div onClick={() => {
              dispatch(logout(navigate))
            }}>
            <Link to="/signup" className="hover:underline">Log Out</Link>
            </div>
          }
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
