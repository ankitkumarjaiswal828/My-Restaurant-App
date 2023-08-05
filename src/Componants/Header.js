import React from 'react'
import { Box,AppBar, Toolbar, Typography, IconButton, Drawer, Divider } from '@mui/material'
import { Link ,NavLink } from 'react-router-dom';
import '../Styles/HeaderStyle.css'
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';
import logo from '../Images/logo.svg'

export default function Header() {
    const [mobileopen, setMobileOpen] = useState(false)

    const handleDrawerToggle=()=>{
        setMobileOpen(!mobileopen)
    }

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography
          color={"goldenrod"}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, my: 2 }}
        >
          <img src={logo} alt="logo" height={"70"} width="200" />
        </Typography>
        <Divider />
        <ul className="mobile-navigation">
          <li>
            <NavLink activeClassName="active" to="/">Home</NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" to="/menu">Menu</NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" to="/about">About</NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </Box>
    );
  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={logo} alt="logo" height={"70"} width="250" />
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName='active' to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink activeClassName='active' to="/menu">Menu</NavLink>
                </li>

                <li>
                  <NavLink activeClassName='active' to="/about">About</NavLink>
                </li>

                <li>
                  <NavLink activeClassName='active' to="/contact">Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}
