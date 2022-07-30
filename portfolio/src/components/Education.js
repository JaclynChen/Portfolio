import * as React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const Education = () => {
  return (
    <section className="about" id="education">
      <div>
        <div className="mt-20">
          <h1>Education</h1>

          <div>
            <div className="grid justify-items-start p-6 mt-8">
              <Timeline>
                <TimelineItem>
                  <TimelineOppositeContent display="none"></TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h3 className="pb-4"> University of Washington</h3>
                    <p>2021 - 2024</p>
                    <p>Seattle, WA</p>
                    <p>B.S. in Computer Science</p>
                    <p>
                      Direct Admit to the Paul G. Allen School of Computer
                      Science and Engineering
                    </p>

                    
                      <h4 className="py-4"> Coursework </h4>


                      <ul>
                        <li className="custom-li">
                          <p>CSE 143</p>
                        </li>
                        <li className="custom-li">
                          <p>CSE 311</p>
                        </li>
                        <li className="custom-li">
                          <p>CSE 331</p>
                        </li>
                        <li className="custom-li">
                          <p>CSE 332</p>
                        </li>
                        <li className="custom-li">
                          <p>CSE 312</p>
                        </li>
                        <li className="custom-li">
                          <p>CSE 391</p>
                        </li>
                        <li className="custom-li">
                          <p>CSE 351</p>
                        </li>
                        <li className="custom-li">
                          <p>MATH 126</p>
                        </li>
                        <li className="custom-li">
                          <p>MATH 208</p>
                        </li>
                      </ul>


                      <h4 className="py-4">Extracurriculars </h4>
                      <ul>
                        <li className="custom-li ">
                          <p className="font-semibold">Outreach Director - WOOF 3D</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et odio ex.
                             Curabitur eu maximus nulla. Class aptent taciti sociosqu ad litora torquent
                              per conubia nostra, per inceptos himenaeos. Praesent in ex erat. Aenean sed 
                              dui lectus. Vestibulum ante ipsum primis in faucibus orci lu</p>
                        </li>
                        <li className="custom-li">
                          <p className="font-semibold pt-4">Project and Tech Lead - WOOF 3D</p>
                          <p className="pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et odio ex.
                             Curabitur eu maximus nulla. Class aptent taciti sociosqu ad litora torquent
                              per conubia nostra, per inceptos himenaeos. Praesent in ex erat. Aenean sed 
                              dui lectus. Vestibulum ante ipsum primis in faucibus orci lu</p>
                        </li>
                       
                      </ul>
                   
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent display="none"></TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h3 className="pb-4">Ridge High School</h3>
                    <p>2017 - 2021</p>
                    <p>Basking Ridge, NJ</p>

                    <h4 className="py-4"> Coursework </h4>

                    <ul>

                    <li className="custom-li">
                      <p>
                        AP Computer Science, AP Calculus AB, AP Calculus BC, AP
                        Physics I, AP Physic C Mechanics, AP Physics C
                        Electricity and Magnetism, AP Biology, AP U.S. History,
                        AP U.S. Government and Politics, AP Microeconomics, AP
                        Macroeconomics, AP Language and Composition, AP
                        Literature and Composition, AP French{" "}
                      </p>
                    </li>

                    </ul>

                    <h4 className="py-4">Extracurriculars </h4>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent display="none"></TimelineOppositeContent>
                  <TimelineSeparator></TimelineSeparator>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
