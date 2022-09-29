import React from "react";
import "../styles.css";
import theme from "./Theme.js";
import { AppBar, Toolbar, ThemeProvider, Stack, Avatar } from "@mui/material";
import shub from "../images/shub.png";
import arrows from "../images/arrows.png";

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="secondary"  sx={{ flexWrap: "wrap" , flexDirection: 'row', justifyContent: 'space-between' }}>
        <Toolbar sx={{ maxWidth: '100%', height: 'auto' }}>
          <img className="img-logo" alt="logo" src={shub} />
          <img className="img-logo" alt="logo" src={arrows} />
        </Toolbar>
        <Stack direction="row" sx={{ justifyContent: 'center',  alignItems: 'center', marginRight:'10px' }}>
          <Avatar component="div"></Avatar>
        </Stack>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
