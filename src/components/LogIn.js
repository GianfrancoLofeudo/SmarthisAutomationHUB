import React from "react";
import "../styles.css";
import theme from "./Theme.js";
import { AppBar, Toolbar, ThemeProvider, Stack, Typography } from "@mui/material";
import shub from "../images/shub.png";
import arrows from "../images/arrows.png";


import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import ButtonMain from "./Button.js";

const LogIn = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          color="secondary"
          sx={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Toolbar sx={{ maxWidth: "100%", height: "auto" }}>
            <img className="img-logo" alt="logo" src={shub} />
            <img className="img-logo" alt="logo" src={arrows} />
          </Toolbar>
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
            }}
          ></Stack>
        </AppBar>
      </ThemeProvider>
      
      <div>
        <form className="form-login">
          <Container
            sx={{
              border: "solid 1px black",
              borderRadius: "8px",
              width: "40%",
              display: "flex",
              flexDirection: "column",
              padding: "100px",
            }}
          >
            <img className="arrows-login-top" src= {arrows} />
            <FormControl sx={{ padding: "10px" }}>
              <InputLabel htmlFor="my-input">Usuario:</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                //   onChange={(e) => setName(e.target.value)}
                //   value={name}
              />
              {/* <FormHelperText id="my-helper-text">
              Ingrese nombres significativos
            </FormHelperText> */}
            </FormControl>
            <FormControl sx={{ padding: "10px" }}>
              <InputLabel htmlFor="my-input">Contraseña:</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                //   onChange={(e) => setSector(e.target.value)}
                //   value={sector}
              />
              {/* <FormHelperText id="my-helper-text">
              Ingrese nombres significativos
            </FormHelperText> */}
            </FormControl>
            <Typography
            sx={{ textAlign: "center", padding:"15px", cursor:"pointer", margin:"0" }}
            gutterBottom
            variant="a"
            component="a"
            fontSize={"15px"}
            >
                Olvidaste tu contraseña? Recordarla
            </Typography>
            <ButtonMain sx={{ margin: "25px"}} msg="Log In"></ButtonMain>
            <Typography
            sx={{ textAlign: "center", cursor:"pointer", margin:"0" }}
            gutterBottom
            variant="a"
            component="a"
            fontSize={"10px"}
            >
                No tenes una cuenta? Registate!
            </Typography>
            <img className="arrows-login-bottom" src= {arrows} />
          </Container>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
