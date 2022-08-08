import React from "react";

import {/*  FaGithub, */ FaLink } from "react-icons/fa";
import { Button } from "react-bootstrap";

const tags = ["Java", "Typescript", "React", "Dijkstra's", "Spark Java"];

const CampusPaths = () => {
  return (
    <section>
      <div className="about">
        <h1 className="mt-20 text-center">
         Campus Paths
        </h1>

        <div className="flex mt-8 justify-center space-x-4">
          <a
            href="#home"
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

         
        </div>

        <div className="mt-40">
          <h3>What it is</h3>
          <p className="mt-4">Shortest path visualizer for the UW campus</p>
        </div>

        <div className="mt-8">
          <h3>How it was built</h3>
          <p className="mt-4"></p>
        </div>

        <div className="mt-8">
          <h3>What I learned</h3>
          <p className="mt-4"></p>
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

export default CampusPaths;
