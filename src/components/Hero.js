import React, {useState, useEffect} from "react";
import HeroItem from "./HeroItem";
import { Grid, Container } from "@mui/material";
import IconTablet from "../images/iconTablet.png";
import IconLaptop from "../images/iconLaptop.png";
import IconTelevision from "../images/iconTelevision.png";
// import  LaptopSvg from  './LaptopSvg.js'

const Hero = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "https://sheet.best/api/sheets/5f7e3080-862d-4706-a476-36cfdf3fc28c"
    );
    const data = await res.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Grid
        container
        justifyContent="space-around"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <HeroItem item xs={6} data={data} img={IconTablet} tittle="Procesos" />
        <HeroItem item xs={6} data={data} img={IconLaptop} tittle="Cantidad de Ideas" />
        <HeroItem item xs={6} data={data} img={IconTelevision} tittle="Datos" />
      </Grid>
    </Container>
  );
};

export default Hero;
