import { Nav } from "react-bootstrap";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <Nav.Link href="#home">
        <SideBarIcon icon={<FaFire size="28" />} text={"home"} />
      </Nav.Link>
      <Divider />
      <Nav.Link href="#about">
        <SideBarIcon icon={<BsPlus size="32" />} text={"about"} />
      </Nav.Link>
      <Nav.Link href="#education">
        <SideBarIcon
          icon={<BsFillLightningFill size="20" />}
          text={"education"}
        />
      </Nav.Link>

      <Nav.Link href="#resume">
        <SideBarIcon icon={<FaPoo size="20" />} text={"resume"} />
      </Nav.Link>

      <Nav.Link href="#projects">
        <SideBarIcon icon={<BsGearFill size="22" />} text={"projects"} />
      </Nav.Link>

      <Divider />

      {/* light/dark toggle */}
      <SideBarIcon icon={<BsGearFill size="22" />} />
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

export default NavBar;
