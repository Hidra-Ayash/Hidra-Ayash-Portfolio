import React from "react";
import "../App.css";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import animationData from "../animation/it2.json";
import animationDataAstr from "../animation/engine.json";
import hello from "../animation/hello.json";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <div className="component-Home">
        <Container style={{ height: "100svh" }} maxWidth="xl" fixed>
          <Grid className="grid-style" container spacing={3}>
            <div className="container ">
              <div className="grid-one">
                {" "}
                <Grid item xs={6}>
                  <Typography fontFamily="monospace" variant="h3" gutterBottom>
                    <div className="typ1">
                      <span
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          height: "100%",
                        }}
                      >
                        Hello{" "}
                        <Lottie
                          style={{
                            width: "100px",
                          }}
                          className="hello-lottie"
                          animationData={hello}
                        />
                      </span>
                      <span style={{ color: "white" }}> I'M </span>
                      <span style={{ color: "#9c27b0" }}>HIDRA AYASH</span>
                      <br />
                      <span style={{ fontWeight: "800", color: "#9c27b0" }}>
                        FRONTEND DEVELOPER{" "}
                      </span>
                    </div>
                  </Typography>{" "}
                </Grid>
              </div>{" "}
              <div className="grid-two">
                <Grid item xs={6}>
                  <Lottie
                    className="lottie-one"
                    animationData={animationData}
                  />
                </Grid>{" "}
              </div>
            </div>
          </Grid>
        </Container>{" "}
      </div>{" "}
      <div className="component-details">
        <Container style={{ height: "100svh" }} maxWidth="xl" fixed>
          <Grid className="grid-style" container spacing={2}>
            <div className="container-two">
              <div className="grid-one-details">
                <Grid item xs={6} md={8}>
                  <Typography
                    className="typ1-details-one"
                    fontFamily="Playpen"
                    variant="h3"
                    gutterBottom
                  >
                    MY JOURNEY IN THE{" "}
                    <span style={{ color: "#9c27b0", fontWeight: "800" }}>
                      Tech World
                    </span>
                  </Typography>
                  <Typography
                    className="typ1-details-two"
                    fontFamily="Playpen"
                    variant="h5"
                    gutterBottom
                  >
                    My journey into programming has been a love affair 👨🏻‍💻
                    <br />
                    <br />I am skilled in foundational languages like{" "}
                    <span style={{ color: "#9c27b0", fontWeight: "800" }}>
                      C++, JavaScript
                    </span>
                    <br />
                    <br />I am passionate about creating new{" "}
                    <span style={{ color: "#9c27b0", fontWeight: "800" }}>
                      web technologies.
                    </span>{" "}
                    <br />
                    <br />
                    Whenever I can, I apply my passion to developing products
                    with modern
                    <span style={{ color: "#9c27b0", fontWeight: "800" }}>
                      JavaScript libraries and frameworks like React.js.
                    </span>{" "}
                  </Typography>
                </Grid>
              </div>
              <Grid className="grid-two-details" item xs={6} md={4}>
                <Lottie animationData={animationDataAstr} />
              </Grid>
            </div>
          </Grid>
        </Container>
      </div>{" "}
      <Footer />
    </>
  );
}
