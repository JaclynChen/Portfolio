import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { Nav, Button } from "react-bootstrap";

import Jaclyn_Chen_Resume from "../assets/Jaclyn_Chen_Resume_July22.pdf";

import { React, useState } from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div>
        <div className="mt-20">
          <h1> About </h1>
        </div>

        <div className="grid justify-items-start">
          <h2 className="pt-12"> Jaclyn Chen &#40;she/her&#41;</h2>

          <p className="text-left">
            I'm a sophomore at the University of Washington studying computer
            science.
          </p>

          <p className="text-left">
            I love learning, problem-solving, and creating. CSE constantly
            evolves at an intersection of fields from education to medicine. I'm
            incredibly excited to explore this bustling world of technology.
          </p>
        </div>

        <div className="flex space-x-4 justify-center justify-items-center p-8 mt-4">
          <Nav.Link href="https://www.linkedin.com/in/jaclyn-chen5/">
            <SideBarIcon icon={<FaLinkedinIn size="28" />} />
          </Nav.Link>

          <Nav.Link href="https://github.com/JaclynChen">
            <SideBarIcon icon={<FaGithub size="28" />} />
          </Nav.Link>

          <Nav.Link href="https://devpost.com/jaclynchen5?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
            <SideBarIcon icon={<SiDevpost size="28" />} />
          </Nav.Link>

          <EmailIcon />
        </div>

        <a href={Jaclyn_Chen_Resume} target="_blank" rel="noopener noreferrer">
          <div className="flex justify-items-center justify-center items-center">
            <Button className="custom-button">
              View resume
              <div className="ml-2">
                <FaFileAlt size="24" />
              </div>
            </Button>
          </div>
        </a>

        <h3 className="pt-16 pb-8 text-left">Skills</h3>

        <h4 className="text-left pb-4"> Languages</h4>

        <ul>
          <li className="custom-li">
            <p className="text-left">Java</p>
          </li>
          <li className="custom-li">
            <p className="text-left">Python</p>
          </li>
          <li className="custom-li">
            <p className="text-left">Javascript</p>
          </li>
          <li className="custom-li">
            <p className="text-left">Typescript</p>
          </li>
          <li className="custom-li">
            <p className="text-left"> HTML</p>
          </li>
          <li className="custom-li">
            <p className="text-left">CSS</p>
          </li>
          <li className="custom-li">
            <p className="text-left">C</p>
          </li>
          <li className="custom-li">
            <p className="text-left">C++</p>
          </li>
          <li className="custom-li">
            <p className="text-left">Dart</p>
          </li>
        </ul>

        <h4 className="text-left pb-4 pt-8">Technologies</h4>

        <ul>
          <li className="custom-li">
            <p className="text-left">Git</p>
          </li>
          <li className="custom-li">
            <p className="text-left">Bash</p>
          </li>
          <li className="custom-li">
            <p className="text-left">React</p>
          </li>
          <li className="custom-li">
            <p className="text-left">Django</p>
          </li>
          <li className="custom-li">
            <p className="text-left">Flutter</p>
          </li>
        </ul>

        <h4 className="text-left pb-4 pt-8">Other</h4>
        <ul>
          <li className="custom-li">
            <p className="text-left">
              CAD 3D-Modeling: Fusion 360, Blender, OnShape
            </p>
          </li>
          <li className="custom-li">
            <p className="text-left">SLA and Resin 3D-Printing, Lasercutting</p>
          </li>
          <li className="custom-li">
            <p className="text-left">IoT Microcontrollers</p>
          </li>
          <li className="custom-li">
            <p className="text-left">
              Adobe Creative Suite: Photoshop, Illustrator, Animate,
              AfterEffects
            </p>
          </li>
          <li className="custom-li">
            <p className="text-left">Video Editing: Final Cut Pro, iMovie</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group">{icon}</div>
);

const HoverIcon = ({ icon, text }) => (
  <Button onClick={CopyEmail}>
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </Button>
);

function CopyEmail() {
  navigator.clipboard.writeText("jaclync5@cs.washington.edu");
}

//Testing
const EmailIcon = () => {
  const [emailTip, setEmailTip] = useState(1);
  const handleMode = () => setEmailTip(!emailTip);
  const handleModeOut = () => {
    if (!emailTip) {
      setEmailTip(!emailTip);
    }
  };
  return (
    <span onClick={handleMode} onMouseOut={handleModeOut}>
      {emailTip ? (
        <HoverIcon
          icon={<FaEnvelope size="28" />}
          text={"jaclync5@cs.washington.edu"}
        />
      ) : (
        <HoverIcon icon={<FaEnvelope size="28" />} text={"Copied email!"} />
      )}
    </span>
  );
};

export default About;
