/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Skills() {
  return (
    <div className="component-skills">
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          overflowX: "hidden",
        }}
        maxWidth="xl"
        fixed
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="box-style"
        >
          <Paper className="paper" elevation={2}>
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/fluency/48/css3.png"
              alt="css3"
            />
          </Paper>
          <Paper className="paper">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/color/48/html-5.png"
              alt="html-5"
            />
          </Paper>
          <Paper className="paper">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/fluency/48/javascript.png"
              alt="javascript"
            />
          </Paper>
          <Paper className="paper">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/officel/50/react.png"
              alt="react"
            />
          </Paper>
          <Paper className="paper">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/fluency/48/bootstrap.png"
              alt="bootstrap"
            />
          </Paper>
          <Paper className="paper">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/color/48/c-plus-plus-logo.png"
              alt="c-plus-plus-logo"
            />
          </Paper>
          <Paper className="paper">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/glyph-neue/50/github.png"
              alt="github"
            />
          </Paper>
          <Paper className="paper">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/3d-fluency/50/java.png"
              alt="java"
            />
          </Paper>
          <Paper className="paper">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/fluency/48/visual-studio.png"
              alt="visual-studio"
            />
          </Paper>
          <Paper className="paper">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/wired/64/postman-api.png"
              alt="postman-api"
            />
          </Paper>{" "}
          <Paper className="paper">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/officel/50/command-line.png"
              alt="command-line"
            />
          </Paper>
        </Box>
      </Container>
    </div>
  );
}
