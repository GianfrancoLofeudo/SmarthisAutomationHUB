import React from "react";
import { Container } from "@mui/material";
import '../styles/ButtonMain.css'
import { motion } from "framer-motion";

const ButtonSecondary = ({msg}) => {
  return (
    <Container>
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="button-container-secondary"
      >
        <button className="button-main-secondary">{msg}</button>
      </motion.div>
    </Container>
  );
};

export default ButtonSecondary;