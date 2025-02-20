import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and App Name */}
        <div className="flex items-center">
          <img src="/logo.png" alt="QuirkyRoomie Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold">QuirkyRoomie</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
