import React from "react";
import { Container, Grid, Box, Link, Toolbar, Icon } from "@mui/material";
import shub from "../images/shub.png";
import arrows from "../images/arrows.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

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
        <Container  maxWidth="lg">
          <Grid container spacing={5} >
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} marginBottom={'10px'}>HELP</Box>
              <Box>
                <Link href="#" color={"inherit"} style={{textDecoration:'none'}}>
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="#" color={"inherit"} style={{textDecoration:'none'}}>
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="#" color={"inherit"} style={{textDecoration:'none'}}>
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box marginBottom={'10px'} borderBottom={1}>Contact us</Box>
              <Box>
                <Link href="#" color={"inherit"} style={{textDecoration:'none'}}>
                  +55 11 5225 8126
                </Link>
              </Box>
              <Box>
                <Link href="#" color={"inherit"} style={{textDecoration:'none'}}>
                  +54 9 11 3691 8940
                </Link>
              </Box>
              <Box>
                <Link href="#" color={"inherit"} style={{textDecoration:'none'}}>
                  contact@smarthis.com.br
                </Link>
              </Box>
            </Grid>
            <Grid
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              item
              xs={12}
              sm={4}
            >
              {/* <Box borderBottom={1}>HELP</Box> */}
              <Box padding={"10px"} alignSelf={"flex-end"}>
                <Link href="#" color={"inherit"}>
                  <a
                    textDecoration={"none"}
                    target={"_blank"}
                    href="https://www.linkedin.com/company/smarthis/mycompany/"
                  >
                    <LinkedInIcon
                      style={{ fill: "#01FFA9" }}
                      fontSize="large"
                    ></LinkedInIcon>
                  </a>
                </Link>
              </Box>
              <Box padding={"10px"} alignSelf={"flex-end"}>
                <Link href="#" color={"inherit"}>
                  <a
                    textDecoration={"none"}
                    target={"_blank"}
                    href="https://www.linkedin.com/company/smarthis/mycompany/"
                  >
                    <InstagramIcon
                      style={{ fill: "#01FFA9" }}
                      fontSize="large"
                    ></InstagramIcon>
                  </a>
                </Link>
              </Box>
              {/* <Box>
                <Link href="#" color={"inherit"}>
                  Privacy
                </Link>
              </Box> */}
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
