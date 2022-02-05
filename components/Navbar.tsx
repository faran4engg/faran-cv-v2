import React from "react";

const Navbar = () => {
  const arr = [
    {
      item: "Home",
      onClick: () => handleClick("homeIsActive"),
    },
    {
      item: "Profile",
      onClick: () => handleClick("profileIsActive"),
    },
    {
      item: "Message",
      onClick: () => handleClick("messageIsActive"),
    },
    {
      item: "Photo",
      onClick: () => handleClick("photoIsActive"),
    },
    {
      item: "Setting",
      onClick: () => handleClick("settingIsActive"),
    },
  ];

  const handleClick = (str: string) => {
    console.log(str);
  };
  return (
    <div className="absolute flex justify-center w-full mx-auto bottom-4">
      <div className="px-2 shadow-lg bg-dark-bg-1 rounded-2xl">
        <div className="flex">
          <div className="flex-1 group">
            <a className="flex items-end justify-center w-full px-2 pt-2 mx-auto text-center hover:text-theme-color">
              <span className="block px-1 pt-1 pb-1">
                <span className="block pb-1 ">Home</span>
                <span className="block w-5 h-1 mx-auto rounded-full group-hover:bg-theme-color-hover"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a className="flex items-end justify-center w-full px-2 pt-2 mx-auto text-center group-hover:text-theme-color">
              <span className="block px-1 pt-1 pb-1">
                <span className="block pb-1 ">Explore</span>
                <span className="block w-5 h-1 mx-auto rounded-full group-hover:bg-theme-color-hover"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a className="flex items-end justify-center w-full px-2 pt-2 mx-auto text-center group-hover:text-theme-color">
              <span className="block px-1 pt-1 pb-1">
                <span className="block pb-1 ">Search</span>
                <span className="block w-5 h-1 mx-auto rounded-full group-hover:bg-theme-color-hover"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a className="flex items-end justify-center w-full px-2 pt-2 mx-auto text-center group-hover:text-theme-color">
              <span className="block px-1 pt-1 pb-1">
                <span className="block pb-1 ">Settings</span>
                <span className="block w-5 h-1 mx-auto rounded-full group-hover:bg-theme-color-hover"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
