import React from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function handleLogout() {
  const Navigate = useNavigate();
  alert("Logging out");
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  Navigate('/login');
};
const Header = () => {
  return (
    <header className="bg-gray-100 py-4 px-12 flex items-center justify-end">
      <div className="flex space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <FiUser size={24} />
        </button>
        <button className="text-gray-600 hover:text-gray-800"
          onClick={handleLogout}
        >
          <FiLogOut size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
