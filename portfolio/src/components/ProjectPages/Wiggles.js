import React from "react";

import { FaGithub, FaLink } from "react-icons/fa";
import { Button} from "react-bootstrap";


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
          href="https://github.com/JaclynChen/weeklyWiggles"
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
        <p  className="mt-4">A space to organize and track learning goals.
        Weekly Wiggles was created to encourage curiosity in a fun and playful nature. 
        Whether you have a random question like "What happens to the crusts when they make uncrustables?"/
        "Do elevator buttons actually work?", learning a new skill like "Blender sculpting"/"Tensorflow RNNs", 
        or picking up a new hobby like "pogo stick jumping"/"latte art", learning new things is an awesome aspect
        of life. You don't have know how everything works, nor do you need to be an expert at everything you do. 
        And you definitely don't have to be good at hobbies to try them. Weekly Wiggles was also built to destigmatize 
        learning new hobbies and hobby-bouncing for those with ADHD. I've heard that people with ADHD sometimes go through a 
        cycle of discovering a new hobby, endlessly researching it, and become totally absorbed in doing it.
        However, this can also lead to a lost of interest and burnout.
        Yet, having ideas and the motivation to try new things is amazing. Some hobbies become hyperfixations while others
        may stick. In the end, you're left with new skills. In the meantime, Weekly Wiggles may help organize and keep 
        learning on track by setting realisitc goals and reminders of its motivations. Instead of the dopamine hitting at once, 
        it's celebrated through mini goals of a larger wiggle. 


        A user can jot down something they want to learn (called a wiggle) in a "to-do list" style. Moreover,
        they have the option to add details, notes, links etc. in a pop-up modal. 
        When they're ready to start learning, they can drag it to the "learning" area. Finally, when
        they've accomplished the learning goal, they can press the "learned" button and celebrate with
        a shower of digital confetti. And because learning is a continous process, a user can always 
        "relearn" or "continue learning" a wiggle by pressing a button. Along the way, Weekly Wiggles tracks 
        the progress of a wiggle (when it was first added, when the user started learning, etc. ). Additionally, 
        it displays a heatmap of learning streaks and what a user has learned in the past week, month, and year. 

        </p>

        </div>

        <div className="mt-8">
        <h3>How it was built</h3>
        <p className="mt-4">
        I built a React frontend with Typescript and a Django backend to store each users' wiggles and status. 
        I used Heroku to deploy it. 

        In addition, I used React Bootstrap, React-rewards (for the confetti), and CSS. 
        </p>
        </div>


        <div className="mt-8">
        <h3>What I learned</h3>
        <p className="mt-4">This was my first time creating an application with user
            registration and authentication.
            Furthermore, this gave me the chance to explore Django further by creating custom 
            classes and models. 
            
            
            </p>
        
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
