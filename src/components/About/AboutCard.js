import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mufundi Landry </span>
            from <span className="purple"> Bujumbura, Burundi.</span>
            <br />
            I am currently employed as a software developer at Asyst Resources
            Ltd.
            <br />
            I have completed Integrated MSc (IMSc) in Network and Systems
            Security at Hope Africa University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovation is the compass guiding us through uncharted realms of
            possibility."
          </p>
          <footer className="blockquote-footer"> - Elon Musk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
