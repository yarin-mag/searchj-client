import React from "react";
import blackAndWhiteLogo from "../images/searchj_black_n_white_logo.png";
import whiteAndBlackLogo from "../images/searchj_white_n_black_logo.png";
const Nav = ({ minimal, authToken, showModal, setShowModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };
  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? blackAndWhiteLogo : whiteAndBlackLogo}
        />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
