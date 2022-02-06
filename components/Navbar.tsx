import { motion } from "framer-motion";
import Image from "next/image";
import Profile from "../assets/icons/profile.svg";

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
        <div className="flex gap-0">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 2, y: -10 }}
              whileTap={{ scale: 2, y: -10 }}
              key={item}
              className="flex-1 group"
            >
              <a className="flex items-end justify-center w-full px-2 pt-2 mx-auto text-center hover:text-theme-color">
                <span className="block px-1 pt-1 pb-1">
                  <Image src={Profile} height={30} width={30} alt="test" />
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
