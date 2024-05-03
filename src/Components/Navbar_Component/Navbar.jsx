import React from "react";
import logo_image from "../../Assets/whole.png";

const Navbar = () => {
  return (
    <div className="navbar_container container">
      <a href="/">
        <img src={logo_image} alt="" />
      </a>
    </div>
  );
};

export default Navbar;
