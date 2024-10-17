import { useState } from "react";
import userData from "../data/user.json";
import Navbar from "../components/Navbar";

const UserDetails = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  function handleFetchUser() {
    const foundUser = userData.find(user => user.id === parseInt(userId));
    if (foundUser) {
      setUser(foundUser);
      setError("");
    } else {
      setUser(null);
      setError("User not found");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center" >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">User Details</h1>
        
        <div className="flex items-center mb-4">
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User ID"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"/>
            <button
              onClick={handleFetchUser}
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              GET
            </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {user && (
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 font-semibold text-gray-700">Field</th>
                <th className="px-4 py-2 font-semibold text-gray-700">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Name</td>
                <td className="px-4 py-2 border">{user.name}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Username</td>
                <td className="px-4 py-2 border">{user.username}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Email</td>
                <td className="px-4 py-2 border">{user.email}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Phone</td>
                <td className="px-4 py-2 border">{user.phone}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Address</td>
                <td className="px-4 py-2 border">{user.address}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
    </div>
  );
};

export default UserDetails;
