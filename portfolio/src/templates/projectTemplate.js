import React from "react";
import {Button, Card} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.css';


const ProjectCard = ({title, description}) =>{

    return (

      <div className="projectCard"> 

      <h3>{title}</h3>

      <p>{description}</p>
      



      </div>
        

      
    
    
    
      );





}

export default ProjectCard; 