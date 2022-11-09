import React from "react";
import "../styles/CardContainer.css";
import { Card, CardContent, Typography } from "@mui/material";
import ButtonSecondary from "./ButtonSecondary";
import { motion } from "framer-motion";

const IdeaCard = ({ proceso, sector, status }) => {
  return (
    <motion.div
      className="div-heroItem"
      whileHover={{ scale: 1.1 }}
      whileTap={{
        borderRadius: "100%",
      }}
    >
      <Card className="card-container">
        <div className="card-header">
          <CardContent>
            <Typography fontSize={"1,5em"} fontWeight={"700"} variant="h5">
              {proceso}
            </Typography>
            <br></br>
            <Typography fontWeight={"300"} variant="p">
              {" "}
              Sector
            </Typography>

            <br></br>
            <Typography fontWeight={"600"} variant="p">
              {sector}
            </Typography>
          </CardContent>
        </div>
        <div className="card-content">
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="p" fontWeight={"200"}>
              {" "}
              Status{" "}
            </Typography>
            <Typography variant="p"> {status} </Typography>
          </CardContent>
          <div className="card-button">
            <ButtonSecondary msg="Ver mas" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default IdeaCard;
