import React, { FC } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout: FC = ({ children }) => {
  return (
    <div className="h-screen overflow-y-auto text-xs text-gray-300 bg-zinc-900 md:text-base lg:text-lg xl:text-xl ">
      <Header />
      <div className="container">
        {children}
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
