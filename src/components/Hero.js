import React, {useState, useEffect} from "react";
import HeroItem from "./HeroItem";
import { Grid, Container } from "@mui/material";
import IconTablet from "../images/iconTablet.png";
import IconLaptop from "../images/iconLaptop.png";
import IconTelevision from "../images/iconTelevision.png";
// import  LaptopSvg from  './LaptopSvg.js'

const Hero = () => {
  const [dataHero, setDataHero] = useState([]);

  const getDataHero = async () => {
    const res = await fetch(
      "https://sheet.best/api/sheets/5f7e3080-862d-4706-a476-36cfdf3fc28c"
    );
    const dataHero = await res.json();
    setDataHero(dataHero);
    console.log(dataHero);
  };

  useEffect(() => {
    getDataHero();
  }, []);

  return (
    <Container>
      <Grid
        container
        justifyContent="space-around"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <HeroItem item xs={6} data={dataHero} img={IconTablet} tittle="Procesos" />
        <HeroItem item xs={6} data={dataHero} img={IconLaptop} tittle="Cantidad de Ideas" />
        <HeroItem item xs={6} data={dataHero} img={IconTelevision} tittle="Datos" />
      </Grid>
    </Container>
  );
};

export default Hero;
