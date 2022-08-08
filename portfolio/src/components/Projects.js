import React from "react";
import ProjectCard from "../templates/CardTemplate";


//import projImg1 from "../assets/img/project-img1.png";

import "animate.css";


const Projects = () => {
  const projects = [
    {
      title: "Weekly Wiggles",
      description: "Space to organize and track learning goals",
      //imgUrl: projImg1,
      link: "/weeklywiggles",
      tags: ["Python", "Typescript", "React", "Django", "In-progress"],
    },
    {
      title: "Portfolio",
      description: "Website to showcase my work",
      //imgUrl: projImg1,
      link: "/portfolio",
      tags: ["React", "Javascript", "Tailwind CSS", "Three.js", "Blender", "In-progress" ],
    },
    {
      title: "Penn Wharton Budget Model",
      description: "Visualization tool for transparent economic analysis",
      //imgUrl: projImg1,
      link: "/pwbm",
      tags: ["Internship", "Research", "Python", "Flask", "NumPy", "Pandas",],
    },
    {
      title: "Campus Paths",
      description: "Shortest path visualizer for the UW campus",
      //imgUrl: projImg1,
      link: "/campuspaths",
      tags: ["Java", "Typescript", "React", "Dijkstra's", "Spark Java"],
    },
    {
      title: "Moonlight",
      description: " Modular led lamp",
      //imgUrl: projImg1,
      link: "/moonlight",
      tags: ["C/C++", "IoT", "CAD", "3D-Printing", "Woodworking", "In-progress"],
    },
    {
      title: "Tempo",
      description: "Archive for spotify music",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["React", "Django", "Typescript", "Spotify API", "In-progress"],
    },
    {
      title: "Phoenix",
      description: "Autonomous firefighting drone",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Hackathon", "Python", "Google Cloud Vision", "Flask", "C/C++", "IoT"],
    },
    {
      title: "NASA - Growing Beyond Earth",
      description: "Enclosure to harvest food in the International Space Station",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Competition", "Research", "C/C++", "IoT", "CAD", ],
    },
    {
      title: "Topographic Casting",
      description: "WOOF3D Project Team",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["CAD", "3D-printing", "Aluminum Casting", "Digital Elevation Map"],
    },
    {
      title: "AFloat",
      description: "Natural disaster relief system",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Hackathon", "C/C++", "IoT", "HTML", "CSS", "Google Cloud"],
    },
    {
      title: "Torch",
      description: "Wearable to connect separated loved ones",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Hackathon", "C/C++", "IoT", "HTML", "CSS", "Javascript", "React Native", "FastLED"],
    },
    {
      title: "WALL-E(CO)",
      description: "Smart trash can that sorts recycleables and nonrecyclables",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Hackathon", "C/C++", "IoT", "Python", "Rpi", "Image Recognition","IBM Watson"],
    },
    {
      title: "Medsnake",
      description: "Soft robot for minimally invasive surgery",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Hackathon", "C/C++", "IoT", "Arduino", "Soft Robotics", "CAD + 3D-printing"],
    },
    {
      title: "SOLRISE",
      description: "A more gentle way to wake up",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Hackathon", "C/C++", "IoT", "Arduino", "FastLED"],
    },
    {
      title: "3D-Models and Printables",
      description: "A collection of random 3d-models and prints",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["CAD", "3D-printing", "In-progress"],
    },
    {
      title: "Graphics",
      description: "A collection of random designs and graphics",
      //imgUrl: projImg1,
      link: "#home",
      tags: ["Illustrator", "Photoshop", "Animate", "Procreate", "In-progress"],
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
