import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { Nav } from "react-bootstrap";

const About = () => {
  return (
    <section className="about" id="about">
      <div>
        <div className="mt-20">
          <h1> About </h1>

          
        </div>

        <h2> Jaclyn Chen</h2>

        <p>
          I'm a student at the University of Washington studying computer
          science.
        </p>

        <p>School: University of Washington</p>

        <div className="flex space-x-4 justify-center justify-items-center">
          <Nav.Link href="https://www.linkedin.com/in/jaclyn-chen5/">
            <SideBarIcon icon={<FaLinkedinIn size="28" />} />
          </Nav.Link>

          <Nav.Link href="https://github.com/JaclynChen">
            <SideBarIcon icon={<FaGithub size="28" />} />
          </Nav.Link>

          <Nav.Link href="https://devpost.com/jaclynchen5?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
            <SideBarIcon icon={<SiDevpost size="28" />} />
          </Nav.Link>

        
         <HoverIcon icon={<FaEnvelope size="28" />} text={"jaclync5@cs.washington.edu"}/>
          


        </div>

        <h3>Skills</h3>
      </div>
    </section>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group">{icon}</div>
);

const HoverIcon = ({ icon, text}) => (
    <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );

export default About;
