import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const handleLogout = () => {
    setUser(localStorage.removeItem("user"));
    if (user && !logout) {
      setLogout(true);
      toast.success("Logout");
    }
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-around items-center p-2 bg-gray-900 text-gray-300">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <button
          type="button"
          onClick={handleLogout}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
