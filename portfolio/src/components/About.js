import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { Nav, Button } from "react-bootstrap";

import Jaclyn_Chen_Resume_June22 from "../assets/Jaclyn_Chen_Resume_June22.pdf";


import {React, useState } from 'react';

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

     
        {/*  <HoverIcon 
          icon={<FaEnvelope size="28" />} text={"jaclync5@cs.washington.edu"}/> */}

          <EmailIcon/>

        </div>


        <a 
        href={Jaclyn_Chen_Resume_June22}
        target="_blank"
        rel="noopener noreferrer"
        
      >
        <div className="flex justify-items-center justify-center items-center">
        <Button className="custom-button">View resume 
        <div className = "ml-2" ><FaFileAlt size = "24" /></div>
        </Button>

        </div>
      </a>

        <h3>Skills</h3>
      </div>
    </section>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group">{icon}</div>
);

const HoverIcon = ({ icon, text}) => (

  <Button onClick ={CopyEmail}> 
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>

  </Button>

  );


function CopyEmail(){

navigator.clipboard.writeText("jaclync5@cs.washington.edu"); 

}

//Testing
const EmailIcon = () => {
  const [emailTip, setEmailTip] = useState(1);
  const handleMode = () => setEmailTip(!emailTip);
  const handleModeOut = () => {
    if(!emailTip){
    setEmailTip(!emailTip);
    }

  }
  return (
    <span onClick={handleMode} onMouseOut={handleModeOut}>
      {emailTip ? (
        <HoverIcon 
        icon={<FaEnvelope size="28" />} text={"jaclync5@cs.washington.edu"}/>
        
      ) : (
        <HoverIcon 
          icon={<FaEnvelope size="28" />} text={"Copied email!"}/>
      )}
    </span>
  );
};



export default About;
