import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow justify-between px-5 ">
      {/* Left side: Company name */}
      <div className="flex ">
        <a className="text-xl font-bold">Auction Gallery</a>
      </div>

      {/* Middle: Navigation links */}
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Auctions</a></li>
          <li><a>Categories</a></li>
          <li><a>How to Works</a></li>
        </ul>
      </div>

      {/* Right: Avatar dropdown */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/150?img=3" alt="User avatar" />
            </div>
          </label>
         
        </div>
      </div>
    </div>
    );
};

export default Navbar;