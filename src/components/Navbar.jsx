import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="absolute w-full bg-gradient-to-b from-gray-800  text-white flex justify-between   pb-8 z-50">
        <div className="flex gap-2 m-3">
          <button className="block md:hidden">=</button>
          <Link to="/">
            <h3 className="text-2xl whitespace-nowrap font-extrabold">
              House <span className="font-light">Marketplace</span>
            </h3>
          </Link>
        </div>
        <ul className="flex items-start">
          <div className="hidden md:flex items-start ">
            <Link to="/category/sale">
              <li className="hover:text-blue-800 p-2 hover:bg-white">Buy </li>
            </Link>
            <Link to="/category/rent">
              <li className="hover:text-blue-800 p-2 hover:bg-white">Rent</li>{" "}
            </Link>
            <Link to="/create-listing">
              <li className="hover:text-blue-800 p-2 hover:bg-white">Sell</li>
            </Link>
            <Link to="/offers">
              <li className="hover:text-blue-800 p-2 hover:bg-white">
                <span className="font-extrabold">H</span>M exclusive
              </li>
            </Link>
          </div>

          <Link to="/sign-in">
            <li className="hover:text-blue-800 p-2 hover:bg-white">
              Register/Sign In
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
