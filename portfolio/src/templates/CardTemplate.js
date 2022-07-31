import React from "react";
import { Button, Card, Nav, Badge } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.css';

const ProjectCard = ({ title, description, link, tags }) => {
  return (
    <Nav.Link href={link}>
      <div className="projectCard">
        <h3 className="my-4">{title}</h3>

        <p className="m-0">{description}</p>

        <div className=" mx-4 absolute bottom-0 flex flex-wrap pb-4">
          {tags.map((tagTitle, index) => {
            return (
              <div key={index} className="badge">
                {tagTitle}
              </div>
            );
          })}
        </div>
      </div>
    </Nav.Link>
  );
};

export default ProjectCard;
