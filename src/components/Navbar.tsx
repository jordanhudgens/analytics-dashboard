import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <img
        src={require("../../static/assets/logo.png")}
        alt="Logo"
        className="logo"
      />
    </div>
  );
};

export default Navbar;
