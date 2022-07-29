import { Nav } from "react-bootstrap";
import { BsFillPersonFill} from "react-icons/bs";
import { FaHome, FaWrench, FaSun, FaMoon } from "react-icons/fa";
import {IoMdSchool} from "react-icons/io";


//hooks
import useDarkMode from "../hooks/useDarkMode";

//import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <Nav.Link href="#home">
        <SideBarIcon icon={<FaHome size="26" />} text={"Home"} />
      </Nav.Link>
      <Divider />
      <Nav.Link href="#about">
        <SideBarIcon icon={<BsFillPersonFill size="28" />} text={"About"} />
      </Nav.Link>
      <Nav.Link href="#education">
        <SideBarIcon
          icon={<IoMdSchool size="28" />}
          text={"Education"}
        />
      </Nav.Link>

      <Nav.Link href="#projects">
        <SideBarIcon icon={<FaWrench size="22" />} text={"Projects"} />
      </Nav.Link>

      <Divider />

      <ThemeIcon />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
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
          icon={<FaSun size="22" />}
          text = {"Light Mode"}
        />
      ) : (
        <SideBarIcon
          icon={<FaMoon size="22" />}
          text={"Dark Mode"}
        />
      )}
    </span>
  );
};

export default NavBar;
