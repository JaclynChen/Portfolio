import React from "react";

import { FaGithub, FaLink } from "react-icons/fa";
import { Nav, Button} from "react-bootstrap";


const tags = ["Python", "Typescript", "React", "Django",];

const Wiggles= () => {
  return (
    <section>
      <div className="about">
        <h1 className="mt-20 text-center">Weekly Wiggles</h1>
       
<div className="flex mt-8 justify-center space-x-4">

<a
          href="https://weekly-wiggles.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-items-center justify-center items-center">
            <Button className="custom-button w-36 justify-center">
              Website
              <div className="ml-2">
                <FaLink size="20" />
              </div>
            </Button>
          </div>
        </a>

        <a
          href="https://weekly-wiggles.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-items-center justify-center items-center">
            <Button className="custom-button w-36 justify-center">
              Repo
              <div className="ml-2">
                <FaGithub size="20" />
              </div>
            </Button>
          </div>
        </a>


      
      </div>

        <div className="mt-40">
        <h3>What it is</h3>
        <p  className="mt-4">A space to organize and track learning goals</p>

        </div>

        <div className="mt-8">
        <h3>How it was built</h3>
        <p className="mt-4">Weekly Wiggles was built with a React frontend and Django backend</p>
        </div>



        <div className="mt-8">
        <h3>What I learned</h3>
        <p className="mt-4">This was my first time creating an application with user
            registration and authentication.</p>
        
        </div>
        

        
        <div className="mt-8">
        <h3>Related Categories</h3>

        <div className="mt-4 flex flex-wrap pb-4">
          {tags.map((tagTitle, index) => {
            return (
              <div key={index} className="badge">
                {tagTitle}
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};





export default Wiggles;
