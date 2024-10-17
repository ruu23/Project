import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-md">
        <div className="text-white text-3xl font-monoton">

          <Link to="/" className="transition duration-300 ease-in-out hover:text-pink-300">
            MyWebsite
          </Link>

        </div>
        <div className="flex space-x-6">
          
          <Link to="/user" className="text-white text-lg font-medium transition duration-300 ease-in-out hover:text-pink-300">
            User Details
          </Link>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
