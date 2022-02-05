import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-4 px-6 bg-dark-bg-1">
      <div className="text-xl font-semibold ">Brand</div>

      <div className="flex items-center">
        <button type="button" aria-label="dark light theme switcher">
          Theme Switcher
        </button>
      </div>
    </nav>
  );
};

export default Header;
