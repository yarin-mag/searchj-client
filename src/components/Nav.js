import React from "react";
import blackAndWhiteLogo from "../images/searchj_black_n_white_logo.png";
import whiteAndBlackLogo from "../images/searchj_white_n_black_logo.png";
const Nav = ({ minimal, showModal, setShowModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };
  const authToken = true;
  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? whiteAndBlackLogo : whiteAndBlackLogo}
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
