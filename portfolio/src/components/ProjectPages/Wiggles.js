import React from "react";

const Wiggles= () => {
  return (
    <section>
      <div className="about">
        <h1 className="mt-20 text-center">Weekly Wiggles</h1>
        <a>Website</a>
        <a>Repo</a>
      
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
        </div>
        

        
        <div className="mt-8">
        <h3>Related Categories</h3>
        </div>
      </div>
    </section>
  );
};

export default Wiggles;
