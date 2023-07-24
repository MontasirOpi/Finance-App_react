import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-10">
      <h2 className="text-4xl">404 Page Not Found</h2>
      <Link to="/income" className="form-btn text-white py-2 px-5 rounded-md">Go to income</Link>
    </div>
  );
}

export default NotFound;
