import React from "react";
import ProjectCard from "../templates/projectTemplate";
import { Container, Row, Col, Nav, Tab} from "react-bootstrap";

//import { ProjectCard } from "../templates/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
//import projImg2 from "../assets/img/project-img2.png";
//import projImg3 from "../assets/img/project-img3.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';



const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      //imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      //imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
     // imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      //imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      //imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      //imgUrl: projImg1,
    },
  ];



  return(
  
    <section className="about" id="projects">

      <div>
     
       
          <h1> Projects</h1>
          {/* <ProjectCard /> */}

          {/* <Card variant="outlined">{card}</Card> */}

<div className = "grid lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-20 mt-20 justify-items-center items-center" > 

{/* grid md:grid-cols-2 lg:grid-cols-3 gap-20 */}
          
                
              
           
                   
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    
                   
                  
                
              
      </div>

 
    
    </div>

       
     
    </section>
  );
  
};




export default Projects;
