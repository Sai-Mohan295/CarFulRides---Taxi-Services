import React from "react";
import "./Header.css";
import CarFulRide from "./Images/CarFulRideBlack.png"; // Path to your logo image

const Header = ({ onOpenPopup }) => {
  return (
    <header className="header">
      <img src={CarFulRide} alt="Logo" className="logo" onClick={onOpenPopup} />
    </header>
  );
};

export default Header;
