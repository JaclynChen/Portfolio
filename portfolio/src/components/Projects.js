import React from "react";
import ProjectCard from "../templates/projectTemplate";
//import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

//import projImg1 from "../assets/img/project-img1.png";

import "animate.css";
//import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Project Name",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#projectOne",
      tags: ["Python", "Django"],
    },
    {
      title: "Project Name",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Python", "Django"],
    },
    {
      title: "Project Name",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Python", "Django"],
    },
    {
      title: "Project Name",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Python", "Django"],
    },
    {
      title: "Project Name",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Python", "Django"],
    },
    {
      title: "Project Name",
      description: " A description blurb",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Python", "Django"],
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
