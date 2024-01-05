import React, { useState } from "react";
import logo from "../assets/img/Pantry Experts.jpg";

const Navbar = ({ setSearch }) => {
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(term);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h3 className="navbar-brand" >
            <img
              src={logo}
              alt=""
              width={100}
              height={28}
              className="d-inline-block me-2 align-text-top logo"
            />
            Pantry Expert
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
            <form onSubmit={(e) => handleSearch(e)} className="d-flex w-50">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for recipe"
                aria-label="Search"
                onChange={(e) => setTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
