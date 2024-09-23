import React from "react";
import "../App.css";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
export default function Footer() {
  return (
    <div className="footer">
      <Grid container spacing={1}>
        <Grid className="g-one" item xs={12} md={4}>
          <h4>Designed and Developed by Engineer Hidra Ayash</h4>
        </Grid>
        <Grid className="g-two" item xs={12} md={4}>
          <h3>Copyright © 2024 | 2025 HA</h3>
        </Grid>
        <Grid className="g-three" item xs={12} md={4}>
          <h6>CONTACT ME HERE : </h6>

          <IconButton
            className="icon-btn"
            href="https://www.facebook.com/hidra.king.56"
          >
            <FacebookIcon style={{ color: "#fafafa" }} />
          </IconButton>
          <IconButton
            className="icon-btn"
            href="https://www.linkedin.com/in/hidra-ayash-6196142aa/"
          >
            <LinkedInIcon style={{ color: "#fafafa" }} />
          </IconButton>
          <IconButton
            className="icon-btn"
            href="https://github.com/Hidra-Ayash"
          >
            <GitHubIcon style={{ color: "#fafafa" }} />
          </IconButton>
          <IconButton className="icon-btn" href="https://x.com/hidrayash">
            <XIcon style={{ color: "#fafafa" }} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
