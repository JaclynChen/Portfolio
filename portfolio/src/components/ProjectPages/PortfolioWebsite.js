import React from "react";

import { FaGithub, FaLink } from "react-icons/fa";
import { Button} from "react-bootstrap";

const tags = ["React", "Javascript", "Tailwind CSS", "Three.js", "Blender", "In-progress" ];

const PortfolioWebsite = () => {
  return (
      <section>
        <div className="about">
          <h1 className="mt-20 text-center">Portfolio</h1>
         
  <div className="flex mt-8 justify-center space-x-4">
  
  <a
            href="https://jaclynchen.netlify.app/"
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
            href=""
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
          <p  className="mt-4">I've wanted to build a portfolio website for a while now, but I never had a 
          block of time to justify starting the project. This summer, I set time to learn a few new technologies that 
          interested me, including Tailwind CSS and Three.js. Applying them to a portfolio website seemed like 
          the perfect project to test what I learned. Ultimately, this is a website to showcase my work and help me 
          keep track of my projects.</p>
  
          </div>
  
          <div className="mt-8">
          <h3>How it was built</h3>
          <p className="mt-4">
          I customed-designed the static site and leveraged the React library with Javascript. 
          Using Netlify, I deployed it. 

          I utilized Tailwind CSS to style the components (buttons with hover effects, tooltips, and a copying to clipboard feature;
          light/dark mode, cards with tags; timelines) Additionally, I added a 3D Model of a 
          floating island by <a href ="https://skfb.ly/6WMZu"> by davevink </a> to practice Three.js.
          
          </p>
          </div>
  
  
          <div className="mt-8">
          <h3>What I learned</h3>
          <p className="mt-4">
          At first, I cautiously followed <a href ="https://youtu.be/pfaSUYaSgRo"> Fireship's Tailwind CSS tutorial </a> 
          on Youtube and incorporated a Discord-like sidebar in the website. However, I quickly realized that Tailwind CSS 
          saves a lot of time and is really simple to use. It requires less code and is perfect for building custom components.
          
          Next, I found Netlify surprisingly easy to deploy static sites. This was the first time I tried using Netlify, and I'll
          definitely use it for future static sites. 

          Finally, as I set out to study Three.js, I learned the fundamentals of setting up cameras, lights, different geometries,
          and rendering. Previously, I've used Blender to create more natural shapes for 3D-printing and dabbling
          in 3D-animation. With Three.js, I can finally use Blender to display models on sites as well, which I think
          would be amazing for future data visualization projects I have in mind. Since I was using the React library, 
          I used React Three Fiber to render the models. There is a lot more to practice and learn about Three.js. Pretty excited!
        
          </p>
          
          </div>


          <div className="mt-8">
          <h3>Future Plans</h3>
          <p className="mt-4">I'm working on making this website media responsive, 
          finishing dark mode themes for all divs and texts, and developing a custom 
          Blender model for the splash page</p>
          
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

export default PortfolioWebsite;
