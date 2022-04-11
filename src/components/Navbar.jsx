import React from "react";

import logo from "../images/logo-endless.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="endless logo" className="logo" />
    </nav>
  );
};

export default Navbar;
