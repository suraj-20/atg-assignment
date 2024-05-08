import React, { useState } from "react";
import "./Navbar.css";
import logo_image from "../../Assets/whole.png";
// import SigninPopup from "../Popup/SigninPopup";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [showPopup, setShowPopup] = useState(false);
  const [posts, setPosts] = useState([]);

  // const handleTogglePopup = () => {
  //   setShowPopup(!showPopup);

  //   if (!showPopup) {
  //     // document.body.style.background = "rgba(0, 0, 0, 0.5)";
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     // document.body.style.background = "initial";
  //     document.body.style.overflow = "auto";
  //   }
  // };

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
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
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className=" custom-input-search"
            type="text"
            name=""
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div className="create_account_btn d-flex gap-5">
          <div className="row">
            <Link
              onAddPost={handleAddPost}
              to={"/add-post"}
              className="btn custom-btn-create p-0 m-0"
              type="submit"
            >
              Add Post
            </Link>
          </div>

          <div className="nav-login">
            {localStorage.getItem("token") ? (
              <button
                className="btn btn-primary ms-2 gap-2 d-flex align-items-center"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.replace("/");
                }}
              >
                Logout
              </button>
            ) : (
              <div className="row">
                <Link
                  to={"/login"}
                  className="btn custom-btn-create p-0 m-0"
                  type="submit"
                >
                  create Account. <span>It's Free!</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* {showPopup && <SigninPopup onClose={handleTogglePopup} />} */}
    </>
  );
};

export default Navbar;
