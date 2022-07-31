import React from "react";
import ProjectCard from "../templates/projectTemplate";
//import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

//import projImg1 from "../assets/img/project-img1.png";

import "animate.css";
//import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Weekly Wiggles",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#projectOne",
      tags: ["Python", "Typescript", "React", "Django",],
    },
    {
      title: "Portfolio Website",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["React", "Javascript", "Tailwind CSS", ],
    },
    {
      title: "Penn Wharton Budget Model",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Internship", "Python", "Flask", "NumPy", "Pandas",],
    },
    {
      title: "Moonlight",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["C/C++", "IoT", "CAD", "3D-Printing", "Woodworking"],
    },
    {
      title: "Phoenix",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Hackathon", "Python", "Google Cloud Vision", "Flask", "C/C++", "IoT"],
    },
    {
      title: "AFloat",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Hackathon", "C/C++", "IoT", "HTML", "CSS", "Google Cloud"],
    },
    
  ];

  return (
    <section className="about" id="projects">
      <div className="mt-20">
        <h1> Projects</h1>
        

        <div className="grid lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-20 mt-20 justify-items-center items-center">
       

          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};




export default Projects;
