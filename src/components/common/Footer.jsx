import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Brand */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">SettleIt</h2>
          <p className="text-sm">Making roommate living easier & conflict-free.</p>
        </div>

        <div className="flex space-x-6 text-sm">
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
 
        <div className="flex space-x-4 text-xl mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} SettleIt. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
