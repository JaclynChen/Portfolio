import React from "react";
import {Button, Card, Nav} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.css';


const ProjectCard = ({title, description, link}) =>{

    return (

      <div className="projectCard"> 
      <Nav.Link href= {link}>

      <h3>{title}</h3>

      <p>{description}</p>

      </Nav.Link>
      



      </div>
        

      
    
    
    
      );





}

export default ProjectCard; 