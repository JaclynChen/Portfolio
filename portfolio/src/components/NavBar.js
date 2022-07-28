import { Nav } from "react-bootstrap";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo, FaSun, FaMoon } from "react-icons/fa";

//hooks
import useDarkMode from "../hooks/useDarkMode";

import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <Nav.Link href="#home">
        <SideBarIcon icon={<FaFire size="28" />} text={"Home"} />
      </Nav.Link>
      <Divider />
      <Nav.Link href="#about">
        <SideBarIcon icon={<BsPlus size="32" />} text={"About"} />
      </Nav.Link>
      <Nav.Link href="#education">
        <SideBarIcon
          icon={<BsFillLightningFill size="20" />}
          text={"education"}
        />
      </Nav.Link>

      <Nav.Link href="#resume">
        <SideBarIcon icon={<FaPoo size="20" />} text={"Resume"} />
      </Nav.Link>

      <Nav.Link href="#projects">
        <SideBarIcon icon={<BsGearFill size="22" />} text={"Projects"} />
      </Nav.Link>

      <Divider />

      <ThemeIcon />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <SideBarIcon
          icon={<FaSun size="22" className="top-navigation-icon" />}
        />
      ) : (
        <SideBarIcon
          icon={<FaMoon size="22" className="top-navigation-icon" />}
        />
      )}
    </span>
  );
};

export default NavBar;
