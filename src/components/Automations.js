import React, { useEffect, useState } from "react";
import "../styles/Automations.css";
import { Grid, Container, Typography } from "@mui/material";
import ButtonMain from "./Button.js";
import IdeaCard from "./IdeaCard";
import NoIdeas from "./NoIdeas";
import CreateIdea from "./CreateIdea";

const Automations = () => {
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const res = await fetch(
  //     "https://sheet.best/api/sheets/5f7e3080-862d-4706-a476-36cfdf3fc28c"
  //   );
  //   const data = await res.json();
  //   setData(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="automations-container">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          margin={'0'}
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Automatizaciones
        </Typography>
        <Typography align="center" variant="p" sx={{ margin: "15px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Typography>
        <CreateIdea/>
        <Container sx={{ width: "100%", margin: "0px", padding: "0px" }}>
          <Grid marginTop={"15px"} container spacing={2}>
            <Grid
              display={"flex"}
              justifyContent={"center"}
              columnGap={"15px"}
              rowGap={"15px"}
              marginBottom={"20px"}
              container
              item
              spacing={1}
            >
              {/* {data !== null ?
              data.map((item) => (
                  <IdeaCard proceso={item.title} sector={item.sector} status= {item.status} />
                  )):
                  <NoIdeas />
                } */}
                <NoIdeas />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Automations;
