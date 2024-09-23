import React from "react";
import "../App.css";
import Container from "@mui/material/Container";
import Footer from "./Footer.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import adidasShoes from "./_b0b02b9b-7d07-47dc-9896-279a098fde60.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import bmiImage from "./bmi.jpeg";
import weatherImg from "./weather.jpeg";
export default function Projects() {
  return (
    <>
      <div className="projects-style">
        <Container style={{ height: "100svh" }} maxWidth="xl">
          {" "}
          <Typography className="typ-projects" variant="h4" gutterBottom>
            My Recent{" "}
            <span
              style={{
                color: "#9c27b0",
                fontWeight: "800",
              }}
            >
              Projects
            </span>{" "}
          </Typography>
          <div className="project-component">
            <Card
              className="card-project"
              sx={{ maxWidth: 400, margin: "20px" }}
            >
              <CardMedia
                component="img"
                alt="Shoes Store Website"
                image={adidasShoes}
                sx={{ maxHeight: 300 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shoes Store Website
                </Typography>
                <Typography variant="body2" className="card-typ">
                  Welcome to our Shoe Store website, a sleek and modern platform
                  designed to showcase a wide variety of footwear. This website
                  is built using HTML and CSS, ensuring a clean and responsive
                  design that looks great on all devices.
                </Typography>
              </CardContent>
              <CardActions className="card-action">
                <IconButton
                  className="icon-btn"
                  href="https://github.com/Hidra-Ayash/Hidra-Ayash-Shoes-Store-Website"
                >
                  <Button className="card-btn">
                    {" "}
                    <GitHubIcon style={{ color: "#fafafa" }} />
                    GitHub
                  </Button>
                </IconButton>
              </CardActions>
            </Card>{" "}
            <Card
              className="card-project"
              sx={{ maxWidth: 400, margin: "20px" }}
            >
              <CardMedia
                component="img"
                alt="bmi tracker website"
                sx={{ maxHeight: 275 }}
                image={bmiImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  BMI Tracker Website
                </Typography>
                <Typography
                  className="card-typ"
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  The BMI Tracker website is a responsive web application
                  designed to help users monitor their Body Mass Index (BMI).
                  Built with React.js, this application allows users to input
                  their weight and height to calculate their BMI and provides a
                  classification based on the result.
                </Typography>
              </CardContent>
              <CardActions className="card-action">
                <IconButton
                  className="icon-btn"
                  href="https://github.com/Hidra-Ayash/BMI-Repo"
                >
                  <Button className="card-btn">
                    {" "}
                    <GitHubIcon style={{ color: "#fafafa" }} />
                    GitHub
                  </Button>
                </IconButton>
                <IconButton
                  className="icon-btn"
                  href="https://hidra-ayash.github.io/BMI-Repo/"
                >
                  <Button className="card-btn"> 📰 Demo</Button>
                </IconButton>
              </CardActions>
            </Card>
            <Card
              className="card-project"
              sx={{ maxWidth: 400, margin: "20px" }}
            >
              <CardMedia
                component="img"
                alt="weather forecast website"
                sx={{ maxHeight: 275 }}
                image={weatherImg}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Weather Forecast Website{" "}
                </Typography>
                <Typography
                  className="card-typ"
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  The Weather Forecast Website is a sleek and modern weather
                  forecast website designed to provide users with real-time
                  weather updates and forecasts. Built using React.js and
                  Material-UI, this application offers a seamless and intuitive
                  user experience.
                </Typography>
              </CardContent>
              <CardActions className="card-action">
                <IconButton
                  className="icon-btn"
                  href="https://github.com/Hidra-Ayash/WeatherForecast"
                >
                  <Button className="card-btn">
                    {" "}
                    <GitHubIcon style={{ color: "#fafafa" }} />
                    GitHub
                  </Button>
                </IconButton>
                <IconButton
                  className="icon-btn"
                  href="https://weatherforec1ast.surge.sh/"
                >
                  <Button className="card-btn"> 📰 Demo</Button>
                </IconButton>
              </CardActions>
            </Card>
          </div>
        </Container>{" "}
      </div>{" "}
      <Footer />
    </>
  );
}
