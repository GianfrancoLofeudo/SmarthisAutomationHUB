import React from "react";
import { Container, Grid, Box, Link, Toolbar } from "@mui/material";
import shub from "../images/shub.png";
import arrows from "../images/arrows.png";

const Footer = () => {
  return (
    <footer>
      <Box
        margin={0}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor={"black"}
        color={"white"}
        display={"flex"}
        flexDirection={"row"}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>HELP</Box>
              <Box>
                <Link href="#" color={"inherit"}>
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="#" color={"inherit"}>
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="#" color={"inherit"}>
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>HELP</Box>
              <Box>
                <Link href="#" color={"inherit"}>
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="#" color={"inherit"}>
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="#" color={"inherit"}>
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>HELP</Box>
              <Box>
                <Link href="#" color={"inherit"}>
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="#" color={"inherit"}>
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="#" color={"inherit"}>
                  Privacy
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            display={"flex"}
            textAlign={"center"}
            justifyContent={"center"}
            pt={{ xm: 20, sm: 15 }}
            pb={{ xs: 5, sm: 0 }}
          >
            <Toolbar
              sx={{ alignContent: "center", maxWidth: "300px", height: "auto" }}
            >
              <img className="img-logo" alt="logo" src={shub} />
              <img className="img-logo" alt="logo" src={arrows} />
            </Toolbar>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
