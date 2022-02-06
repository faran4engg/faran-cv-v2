import React from "react";

const Header = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between p-4 px-6 z-[1] bg-dark-bg-1 backdrop-blur">
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
