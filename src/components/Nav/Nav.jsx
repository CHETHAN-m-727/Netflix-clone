import React, { useEffect, useState } from "react";
import logo from "../../utils/images/netflix-logo-png-2564.png";
import Style from "./Nav.module.scss";
import { useSelector } from "react-redux";

function Nav() {
  const [show, handleShow] = useState(false);

  const isLoggedIn = useSelector((_) => _.project.isLoggedIn);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${Style.nav} ${show ? Style.nav_blank : ""}`}>
      <img className={Style.nav_logo} src={logo} alt="logo" />
      {isLoggedIn && ( // Conditionally render based on login state
        <img
          className={Style.nav_avatar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile Photo"
        />
      )}
    </div>
  );
}

export default Nav;
