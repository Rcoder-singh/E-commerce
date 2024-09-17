import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-between  px-10 mb-2 p-2 bg-slate-950">
      <div className="flex items-center">
        <img src="" alt="Logo" className="text-white " />
      </div>
      <form className="flex gap-2">
        <input
          className="border p-1 border-black rounded"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />{" "}
        <button
          className="bg-green-600 border p-1 text-white rounded text-sm"
          type="submit"
        >
          Search{" "}
        </button>
      </form>
      <ul className="flex text-white gap-5 items-center ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/men">
            Men
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link className="nav-link" to="/women">
            Women
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link className="nav-link" to="/vehicle">
            Vehicle
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="" to="/signup">
            Sign-up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
