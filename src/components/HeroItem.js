import React from "react";
import "../styles.css";
import theme from "./Theme.js";
import { Card, ThemeProvider, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ButtonMain from "./Button.js";
import { motion } from "framer-motion";

const HeroItem = ({data, img, tittle }) => {

  const amountCard = (tittle) => {
    if (tittle === "Cantidad de Ideas" & data){
      return data.length
    }else{
      return <p>0</p>
    }
  }



  return (
    <motion.div
      className="div-heroItem"
      whileHover={{ scale: 1.2 }}
      whileTap={{
        borderRadius: "100%",
      }}
    >
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            marginTop: "100px",
            maxWidth: 180,
            maxHeight: "auto",
            border: "0",
            boxShadow: "0",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            width="100%"
            height="auto"
            image={img}
            alt="tablet icon"
          />
          <CardContent
            sx={{
              alignContent: "center",
              justifyContent: "center",
              padding: "0",
            }}
          >
            <Typography
              sx={{ textAlign: "center" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {tittle}
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              gutterBottom
              variant="p"
              component="p"
            >
              {
                amountCard(tittle)
              }
            </Typography>
          </CardContent>
          <ButtonMain msg="Ver mas" />
        </Card>
      </ThemeProvider>
    </motion.div>
  );
};

export default HeroItem;
