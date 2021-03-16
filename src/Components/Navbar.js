import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import profile from "../images/profile.png";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="Netflix logo" />
      <img className="nav_profile" src={profile} alt="Profile" />
    </div>
  );
}

export default Navbar;
