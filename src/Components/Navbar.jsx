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
    // <nav className="navbar  bg-dark bg-slate-950">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <form className="d-flex ms-auto">
    //         <input
    //           className="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button className="btn btn-outline-success" type="submit">
    //           Search
    //         </button>
    //       </form>
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">
    //             About
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/cart">
    //             Cart
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/contact">
    //             Contact
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/login">
    //             Login
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/signup">
    //             Sign-up
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
