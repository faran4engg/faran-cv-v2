import { motion } from "framer-motion";
import Image from "next/image";
import Home from "../assets/icons/home.svg";

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
    <div className="fixed flex justify-center w-full mx-auto bottom-4 ">
      <div className="px-2 shadow-lg bg-dark-bg-1 rounded-2xl backdrop-blur">
        <div className="flex gap-0 ">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.4, y: -15 }}
              whileTap={{ scale: 1.4, y: -15 }}
              key={item}
              className="flex-1 group"
            >
              <a className="flex items-end justify-center w-full px-2 pt-2 mx-auto text-center hover:text-theme-color">
                <span className="block px-1 pt-1 pb-1">
                  <Image src={Home} height={30} width={30} alt="test" />
                  {/* <span className="block pb-1 "> {item}</span> */}
                  {/* <span className="block w-5 h-1 mx-auto rounded-full group-hover:bg-theme-color-hover"></span> */}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
