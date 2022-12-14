import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

import House from "./House.js";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Student", "Explorer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="h-full">
        <h1>{`Hi! I'm Jaclyn`} </h1>
        <h2>
          <span
            className="txt-rotate"
            data-period="1000"
            data-rotate='["Student", "Explorer" ]'
          >
            <span className="wrap">{text}</span>
          </span>
        </h2>

        <House />

        <p className="text-left ml-20 text-white mt-40 text-white" id="imgCredit">
          Photo by{" "}
          <a href="https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Alessio Soggetti
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
        <p className="text-left ml-20 text-white text-white" id="imgCredit"> Low Poly Island <a href ="https://skfb.ly/6WMZu"> by davevink </a></p>
      </div>
    </section>
  );
};

export default Banner;
