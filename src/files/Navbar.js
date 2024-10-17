import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ComputerIcon from "@mui/icons-material/Computer";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Alert from "./Alert";
import myPhoto from "./photo_2024-10-17_21-30-52.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handelOpen() {
    let op = !open;
    setOpen(op);
    setAnchorElUser(null);
  }

  return (
    <AppBar
      position="relative"
      style={{
        background: "rgb(97 97 97 / 16%)",
        zIndex: "-1",
      }}
    >
      {" "}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              HA.
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Link
                    to="/"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <>
                      {" "}
                      <HomeIcon
                        style={{
                          color: "gray",
                          textAlign: "center",
                          height: "100%",
                        }}
                      />
                      <span
                        style={{
                          color: "black",
                        }}
                      >
                        Home
                      </span>
                    </>
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Link
                    to="/about"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <>
                      {" "}
                      <AccountBoxIcon
                        style={{
                          color: "blue",
                          textAlign: "center",
                          height: "100%",
                        }}
                      />
                      <span
                        style={{
                          color: "black",
                        }}
                      >
                        About
                      </span>
                    </>
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Link
                    to="/projects"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <>
                      {" "}
                      <LightbulbIcon
                        style={{
                          color: "yellow",
                          textAlign: "center",
                          height: "100%",
                        }}
                      />
                      <span
                        style={{
                          color: "black",
                        }}
                      >
                        Projects
                      </span>
                    </>
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <ComputerIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            style={{ color: "#ec407a" }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              HA.
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              {/* <Button
                className="btn-over"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                🏠 Home
              </Button> */}
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                <Tab
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    margin: "2px",
                  }}
                  value="one"
                  label={
                    <>
                      {" "}
                      <HomeIcon style={{ color: "#fafafa" }} />
                      <span style={{ color: "white" }}>Home</span>
                    </>
                  }
                />
              </Tabs>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              {/* <Button
                className="btn-over"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                👨🏻‍💻 About
              </Button> */}
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                <Tab
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    margin: "2px",
                  }}
                  value="two"
                  label={
                    <>
                      {" "}
                      <AccountBoxIcon style={{ color: "#fafafa" }} />
                      <span style={{ color: "white" }}>About</span>
                    </>
                  }
                />
              </Tabs>
            </Link>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              {/* <Button
                className="btn-over"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                💡 Projects
              </Button> */}
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                sx={{ my: 2, color: "white", display: "flex" }}
              >
                <Tab
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    margin: "2px",
                  }}
                  value="three"
                  label={
                    <>
                      {" "}
                      <LightbulbIcon style={{ color: "#fafafa" }} />
                      <span style={{ color: "white" }}>Projects</span>
                    </>
                  }
                />
              </Tabs>
            </Link>
            {/* <Link to="/resume" style={{ textDecoration: "none" }}>
              <Button
                className="btn-over"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                📰 Resume
              </Button>
            </Link> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open CV">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Hidra Ayash"
                  src={myPhoto}
                  style={{ background: "#dd33fa" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography  sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  className="resume-btn"
                  onClick={handelOpen}
                  sx={{ my: 2, color: "purple" }}
                >
                  <>
                    {" "}
                    <BookIcon style={{ color: "#e91e63" }} />
                    <span style={{ color: "black" }}>Resume</span>
                  </>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  href="https://github.com/Hidra-Ayash/Hidra-Ayash-Portfolio"
                  className="resume-btn"
                  sx={{ my: 2, color: "black" }}
                >
                  <>
                    {" "}
                    <GitHubIcon style={{ color: "black" }} />
                    <span style={{ color: "black" }}>GitHub</span>
                  </>
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>{" "}
      <div>{open ? <Alert open={open} closeOpen={setOpen} /> : null}</div>
    </AppBar>
  );
}
export default Navbar;
