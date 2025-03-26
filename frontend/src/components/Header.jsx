import React from "react";
import { Link } from "react-router-dom"; // ✅ Fixed Import

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Management</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Tasks
              </Link>
            </li>
            <li>
              <Link to="/create-task" className="hover:underline">
                Create
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
