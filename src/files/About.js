import React from "react";
import "../App.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import animationRobot from "../animation/Robot.json";
import Skills from "./Skills";

export default function About() {
  return (
    <>
      <div className="component-details">
        <Container style={{ height: "100svh" }} maxWidth="xl" fixed>
          <Grid className="grid-style" container spacing={2}>
            <div className="container-two">
              <div className="grid-one-details">
                <Grid item xs={6} md={8}>
                  <Typography
                    className="typ1-details-one-about"
                    fontFamily="Playpen"
                    variant="h4"
                    gutterBottom
                  >
                    Who{" "}
                    <span style={{ color: "#9c27b0", fontWeight: "800" }}>
                      I'M ?
                    </span>
                  </Typography>
                  <Typography
                    className="typ1-details-two-about"
                    fontFamily="Playpen"
                    variant="h5"
                    gutterBottom
                  >
                    Hello , I'm{" "}
                    <span style={{ color: "#9c27b0", fontWeight: "800" }}>
                      Hidra Ayash
                    </span>{" "}
                    From
                    <span style={{ color: "#9c27b0", fontWeight: "800" }}>
                      Homs , Syria
                    </span>{" "}
                    <br />
                    <br />
                    I’m studying in Al Baath University at the College of
                    Software Engineering. <br />
                    <br />I have extensive experience in developing dynamic and
                    responsive web applications using
                    <span style={{ color: "#9c27b0", fontWeight: "800" }}>
                      React.js
                    </span>{" "}
                    <br />
                    <br />
                    Experienced in managing application state using tools like
                    Redux and Context API to create
                    <span style={{ color: "#9c27b0", fontWeight: "800" }}>
                      seamless user experiences.
                    </span>{" "}
                  </Typography>
                </Grid>
              </div>
              <Grid className="grid-two-details" item xs={6} md={4}>
                <Lottie animationData={animationRobot} />
              </Grid>
            </div>
          </Grid>
        </Container>{" "}
      </div>
      <Typography
        fontFamily="Playpen"
        variant="h4"
        gutterBottom
        className="skills-typ"
      >
        My Professional{" "}
        <span style={{ color: "#9c27b0", fontWeight: "800" }}>
          Skills <span style={{ color: "white" }}>and</span> Tools
        </span>
      </Typography>{" "}
      <Skills />
      <Footer />
    </>
  );
}
