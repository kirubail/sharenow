import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (user) {
    return (
      <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ">
        <div className="flex justify-start items-center w-full position-fixed px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
            onFocus={() => navigate('/Search')}
            className="p-2 w-full bg-white outline-none position-fixed"
          /><div className="flex gap-3 ">
        <Link to="/create-pin" className="bg-black text-white rounded-lg w-12 h-12 md:w-15 md:h-13 flex justify-center items-center">
            <IoMdAdd />
          </Link>
          </div>
        </div>
        
      </div>
    );
  }

  return null;
};

export default Navbar;