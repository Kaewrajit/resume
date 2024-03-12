import { useState } from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  };
  let Links = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "SKILLS", id: "skills" },
    { name: "PROJECTS", id: "projects" },
    { name: "CONTACT", id: "contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl  flex items-center  text-gray-800">
          Rajitkaew Janpaen
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FaBars name={open ? "close" : "menu"}></FaBars>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                onClick={() => scrollToSection(link.id)}
                className="text-gray-800 cursor-pointer hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
