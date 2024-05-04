import React, { useState } from "react";
import "./Navbar.css";
import logo_image from "../../Assets/whole.png";
import SigninPopup from "../Popup/SigninPopup";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);

    if (!showPopup) {
      // document.body.style.background = "rgba(0, 0, 0, 0.5)";
      document.body.style.overflow = "hidden";
    } else {
      // document.body.style.background = "initial";
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <div className="navbar_container container d-none d-lg-flex align-items-center justify-content-between p-3">
        <div className="logo_image">
          <a href="/">
            <img src={logo_image} alt="" />
          </a>
        </div>
        <div className="search_bar d-flex">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            className=" custom-input-search"
            type="text"
            name=""
            id=""
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div className="create_account_btn d-flex gap-1">
          <button
            onClick={handleTogglePopup}
            className="btn custom-btn-create p-0 m-0"
            type="submit"
          >
            create Account. <span>It's Free!</span>
          </button>
          <i class="fa-solid fa-sort-down"></i>
        </div>
      </div>
      {showPopup && <SigninPopup onClose={handleTogglePopup} />}
    </>
  );
};

export default Navbar;
