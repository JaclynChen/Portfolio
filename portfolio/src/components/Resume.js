import React from "react";
import Button from "react-bootstrap/Button";
import Jaclyn_Chen_Resume_June22 from "../assets/Jaclyn_Chen_Resume_June22.pdf";
import ResumePdf from "./Pdf";

const Resume = () => {
  return (
    <section className="about" id="resume">
      <h1>Resume</h1>

      <a
        href={Jaclyn_Chen_Resume_June22}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="custom-button">Open and download pdf</Button>
      </a>

      {/* <ResumePdf /> */}
    </section>
  );
};

export default Resume;
