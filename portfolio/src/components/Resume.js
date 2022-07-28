import Jaclyn_Chen_Resume_June22 from "../assets/Jaclyn_Chen_Resume_June22.pdf";

import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Button from "react-bootstrap/Button";

const Resume = () => {
  return (
    <section className="about" id="resume">
      <div className="mt-20">
        <h1>Resume</h1>

        <a
          href={Jaclyn_Chen_Resume_June22}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className = "custom-button">
          Open and download pdf{" "}

          </Button>
        </a>
        


        <Document file={Jaclyn_Chen_Resume_June22}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </section>
  );
};

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default Resume;
