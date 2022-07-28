import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {SiDevpost} from "react-icons/si"
import { Nav } from "react-bootstrap";


const About = () => {
  return (

    <section className = "about" id = "about">
    <div>
    
    <div className = "mt-20"> 
      <h1> About</h1>


      </div>

      <h2> Jaclyn Chen</h2>

      <p>
        I'm a student at the University of Washington studying
        computer science.
      </p>

      <div className = "flex space-x-4"> 

      <Nav.Link href="https://www.linkedin.com/in/jaclyn-chen5/">
        <SideBarIcon icon={<FaLinkedinIn size="28" />}/>
      </Nav.Link>

      
      <Nav.Link href="https://github.com/JaclynChen">
        <SideBarIcon icon={<FaGithub size="28" />}/>
      </Nav.Link>

      
      <Nav.Link href="https://devpost.com/jaclynchen5?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
        <SideBarIcon icon={<SiDevpost size="28" />}/>
      </Nav.Link>





      </div>









      <h3>Skills</h3>


    </div>

    </section>
  );
};


const SideBarIcon = ({ icon}) => (
    <div className="sidebar-icon group">
      {icon}
     
    </div>
  );
  

export default About;
