import React from "react";
import Search from "./Search.js";

function Navbar({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navBar">
        <Search handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Navbar;
