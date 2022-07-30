import React from "react";
import {Button, Card, Nav, Badge} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.css';


const ProjectCard = ({title, description, link, tags}) =>{

    return (

      <div className="projectCard"> 
      <Nav.Link href= {link}>

      <h3 className="pb-4">{title}</h3>

      <p>{description}</p>



      <div> 
       
       {tags.map((tagTitle, index) => {

        return <Badge key={index} bg="primary">{tagTitle}</Badge>;

       })}

        </div> 

      </Nav.Link>
      

      </div>
        

    
      );





}

export default ProjectCard; 