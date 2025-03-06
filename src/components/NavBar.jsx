import React from "react";
import { Link } from "react-router-dom"; // Use Next.js's Link if applicable
import { navigation } from "../constants"; // Adjust the path based on your folder structure

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">Walkthru.AI</div>
      <ul className="flex space-x-6">
        {navigation.map((item) => (
          <li key={item.id}>
            <Link to={item.url} className="hover:text-gray-400">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
