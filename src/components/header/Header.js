import React from "react";
import "./Header.css";
import textLogo from "../../utils/images/netflix-logo-png-2564.png"; // Make sure the path to your image is correct

const Header = () => {
  return (
    <div className="header">
      <img src={textLogo} alt="logo" />{" "}
      {/* Use curly braces to reference the variable */}
    </div>
  );
};

export default Header;
