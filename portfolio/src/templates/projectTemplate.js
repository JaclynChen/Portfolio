import React from "react";
import {Button, Card, Nav, Badge} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.css';


const ProjectCard = ({title, description, link, tags}) =>{

    return (

      <Nav.Link href= {link}>

      <div className="projectCard"> 
      

      <h3 className="my-4">{title}</h3>

      <p className="m-0">{description}</p>



      <div className=" mx-4 bottom-1 flex items-end  grid grid-cols-3"> 
       
       {tags.map((tagTitle, index) => {

        return <Badge key={index} className="badge">{tagTitle}</Badge>;

       })}

        </div> 


      </div>

      </Nav.Link>
        

    
      );





}

export default ProjectCard; 