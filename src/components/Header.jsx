import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-blue-500 py-4" >
      <div className="container max-w-6xl mx-auto px-2 flex justify-between items-center">
        <h1 className="text-3xl text-white font-semibold tracking-wider">Montasir's Finance App</h1>
        <div className="flex items-center space-x-4">
          <NavLink
            className="menu-link text-white hover:bg-teal-600 hover:text-white px-4 py-2 rounded-md transition-colors"
            activeClassName="bg-teal-600 text-white"
            to="/income"
          >
            Income
          </NavLink>
          <NavLink
            className="menu-link text-white hover:bg-teal-600 hover:text-white px-4 py-2 rounded-md transition-colors"
            activeClassName="bg-teal-600 text-white"
            to="/expenses"
          >
            Expenses
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
