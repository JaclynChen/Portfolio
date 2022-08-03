import * as React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Collapsible from "react-collapsible";
import { BiCaretDown } from "react-icons/bi";

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
                    <p className="italic">2021 - 2025</p>
                    <p>Seattle, WA</p>
                    <p>B.S. in Computer Science</p>
                    <p>
                      Direct Admit to the Paul G. Allen School of Computer
                      Science and Engineering
                    </p>

                    <h4 className="py-4"> Coursework </h4>

                    <ul>
                      <li className="custom-li">
                        <p>
                          <a
                            className="font-bold underline"
                            href="https://courses.cs.washington.edu/courses/cse143/"
                          >
                            CSE 143
                          </a>{" "}
                          - Introduction to Computer Programming II
                        </p>
                      </li>
                      <li className="custom-li">
                        <p>
                          <a
                            className="font-bold underline"
                            href="https://courses.cs.washington.edu/courses/cse311/"
                          >
                            CSE 311
                          </a>{" "}
                          - Foundations of Computing I
                        </p>
                      </li>
                      <li className="custom-li">
                        <p>
                          <a
                            className="font-bold underline"
                            href="https://courses.cs.washington.edu/courses/cse312/"
                          >
                            CSE 312
                          </a>{" "}
                          - Foundations of Computing II
                        </p>
                      </li>
                      <li className="custom-li">
                        <p>
                          <a
                            className="font-bold underline"
                            href="https://courses.cs.washington.edu/courses/cse331/"
                          >
                            CSE 331
                          </a>{" "}
                          - Software Design and Implementation
                        </p>
                      </li>
                      <li className="custom-li">
                        <p>
                          <a
                            className="font-bold underline"
                            href="https://courses.cs.washington.edu/courses/cse332/"
                          >
                            CSE 332
                          </a>{" "}
                          - Data Structures and Parallelism
                        </p>
                      </li>
                      <li className="custom-li">
                        <p>
                          <a
                            className="font-bold underline"
                            href="https://courses.cs.washington.edu/courses/cse391/"
                          >
                            CSE 391
                          </a>{" "}
                          - System and Software Tools
                        </p>
                      </li>
                    </ul>

                    <h4 className="py-4">Extracurriculars </h4>

                    <ul>
                      <li className="custom-li">
                        <p className="font-semibold">WOOF 3D</p>

                        <Timeline>
                          <TimelineItem>
                            <TimelineOppositeContent display="none"></TimelineOppositeContent>
                            <TimelineSeparator>
                              <TimelineDot variant="outlined" />
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                              <p className="font-semibold">Outreach Director</p>
                              <p className="italic">2022 - Present</p>
                              <p>
                                {" "}
                                Coordinate grass-roots workshops for K-12
                                Education and strengthen collegiate interest in
                                DFab
                              </p>
                            </TimelineContent>
                          </TimelineItem>

                          <TimelineItem>
                            <TimelineOppositeContent display="none"></TimelineOppositeContent>
                            <TimelineSeparator>
                              <TimelineDot variant="outlined" />
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                              <p className="font-semibold">
                                Project and Tech Lead
                              </p>
                              <p className="italic">2018 - 2019</p>
                              <p>
                                Lead a team to develop software and engineering
                                processes to convert topographical map data to
                                3D-printed and aluminum-casted models
                              </p>
                            </TimelineContent>
                          </TimelineItem>
                        </Timeline>
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
                    <p className="italic">2017 - 2021</p>
                    <p>Basking Ridge, NJ</p>

                    <h4 className="py-4"> Coursework </h4>

                    <ul>
                      <li className="custom-li">
                        <p>
                          AP Computer Science, AP Calculus AB, AP Calculus BC,
                          AP Physics I, AP Physic C Mechanics, AP Physics C
                          Electricity and Magnetism, AP Biology, AP U.S.
                          History, AP U.S. Government and Politics, AP
                          Microeconomics, AP Macroeconomics, AP Language and
                          Composition, AP Literature and Composition, AP French{" "}
                        </p>
                      </li>
                    </ul>

                    <Collapsible
                      trigger={
                        <div className="flex">
                          {" "}
                          <h4 className="py-4">Extracurriculars </h4>{" "}
                          <div className="relative flex items-center justify-center ">
                            <BiCaretDown size="32" />
                          </div>{" "}
                        </div>
                      }
                    >
                      <ul>
                        <li className="custom-li">
                          <p className="font-semibold">Computer Science Club</p>

                          <Timeline>
                            <TimelineItem>
                              <TimelineOppositeContent display="none"></TimelineOppositeContent>
                              <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <p className="font-semibold">Co-President </p>
                                <p className="italic">2019 - 2021</p>
                                <p>
                                  Devised a weekly workshop and project oriented
                                  CSE curriculum for high school students and
                                  worked to build a CS community through local
                                  events at middle schools and libraries{" "}
                                </p>
                              </TimelineContent>
                            </TimelineItem>
                          </Timeline>
                        </li>

                        <li className="custom-li">
                          <p className="font-semibold">RidgeHacks</p>

                          <Timeline>
                            <TimelineItem>
                              <TimelineOppositeContent display="none"></TimelineOppositeContent>
                              <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <p className="font-semibold">
                                  Co-Executive Director
                                </p>
                                <p className="italic">2019 - 2021</p>
                                <p>
                                  • Supervised the Sponsorship, Logistics, and
                                  Outreach teams to organize a successful event
                                  with $3000 in prizes, 50 participants, and 15
                                  demoed projects
                                </p>
                              </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                              <TimelineOppositeContent display="none"></TimelineOppositeContent>
                              <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <p className="font-semibold">
                                  Hackathon Organizer
                                </p>
                                <p className="italic">2018 - 2019</p>
                                <p>
                                  Organized the first 12-hour annual middle and
                                  high school hackathon to increase CSE
                                  engagement and accessibility
                                </p>
                              </TimelineContent>
                            </TimelineItem>
                          </Timeline>
                        </li>

                        <li className="custom-li">
                          <p className="font-semibold">
                            Technology and Engineering Club
                          </p>

                          <Timeline>
                            <TimelineItem>
                              <TimelineOppositeContent display="none"></TimelineOppositeContent>
                              <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <p className="font-semibold">President </p>
                                <p className="italic">2018 - 2021</p>
                                <p>
                                  Designed monthly engineering challenges;
                                  increased female-male turnout by 40%
                                </p>
                              </TimelineContent>
                            </TimelineItem>
                          </Timeline>
                        </li>

                        <li className="custom-li">
                          <p className="font-semibold">Legwork for Lungs</p>

                          <Timeline>
                            <TimelineItem>
                              <TimelineOppositeContent display="none"></TimelineOppositeContent>
                              <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <p className="font-semibold">Vice-President</p>
                                <p className="italic">2019 - 2021</p>
                                <p>
                                  Oversaw the logisitcs team of the annual 5k;
                                  Broke the Guinness World Record for the
                                  Longest Hopscotch Course to fundraise for lung
                                  cancer research (July 2019)
                                </p>
                              </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                              <TimelineOppositeContent display="none"></TimelineOppositeContent>
                              <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <p className="font-semibold">Treasurer</p>
                                <p className="italic">2018 - 2019</p>
                                <p>
                                  Fundraised/managed accounts for annual 5k for
                                  lung cancer research at the Memorial Sloan
                                  Kettering Center
                                </p>
                              </TimelineContent>
                            </TimelineItem>
                          </Timeline>
                        </li>

                        <li className="custom-li">
                          <p className="font-semibold">Varsity Fencing</p>

                          <Timeline>
                            <TimelineItem>
                              <TimelineOppositeContent display="none"></TimelineOppositeContent>
                              <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <p className="font-semibold">Squad Captain</p>
                                <p className="italic">2019 - 2020</p>
                                <p>
                                  Led the team during practice and meets;
                                  Counties, Santellis, District, and State
                                  Champions 2019, 2020
                                </p>
                              </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                              <TimelineOppositeContent display="none"></TimelineOppositeContent>
                              <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <p className="font-semibold">Varsity Fencer</p>
                                <p className="italic">2018 - 2019</p>
                                <p>
                                  Starter for team meets; team placed 3rd at
                                  States; 2nd place in individuals Frosh Sophs
                                  Fencing Tournament;
                                </p>
                              </TimelineContent>
                            </TimelineItem>
                          </Timeline>
                        </li>
                      </ul>
                    </Collapsible>
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
