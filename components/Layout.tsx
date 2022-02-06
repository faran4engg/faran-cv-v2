import React, { FC } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout: FC = ({ children }) => {
  return (
    <div className="h-screen overflow-y-auto text-xs text-dark-mode-text bg-dark-bg-2 md:text-base lg:text-lg xl:text-xl ">
      <Header />
      <div className="relative">
        {children}
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
