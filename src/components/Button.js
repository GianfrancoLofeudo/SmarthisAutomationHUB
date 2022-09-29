import React from "react";
import { Container } from "@mui/material";
import "../styles/ButtonMain.css";
import { motion } from "framer-motion";

const ButtonMain = ({ msg }) => {
  return (
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="button-container"
      >
        <motion.button whileHover={{ scale: 1.2 }} className="button-main">
          {msg}
        </motion.button>
      </motion.div>
    </Container>
  );
};

export default ButtonMain;
