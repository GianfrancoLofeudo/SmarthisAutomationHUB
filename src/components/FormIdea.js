import React, { useState, Form } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import ButtonMain from "./Button.js";
import axios from "axios";

const CreateIdea = () => {
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data={
        title: name, 
        sector: sector,
        status: status
    }
    axios.post('https://sheet.best/api/sheets/5f7e3080-862d-4706-a476-36cfdf3fc28c',data).then((response)=>{
        console.log(response)
        setName('')
        setSector('')
        setStatus('')
    })
  };

  return (
    <form onSubmit={handleSubmit}>
        <Container
          sx={{ width: "100%", display: "flex", flexDirection: "column", paddingTop:'40px' }}
          
        >
          <FormControl sx={{ padding: "10px" }} >
            <InputLabel htmlFor="my-input">Nombre del proceso:</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <FormHelperText id="my-helper-text">
              Ingrese nombres significativos
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ padding: "10px" }}>
            <InputLabel htmlFor="my-input">Sector del proceso:</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={(e) => setSector(e.target.value)}
              value={sector}
            />
            <FormHelperText id="my-helper-text">
              Ingrese nombres significativos
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ padding: "10px" }}>
            <InputLabel htmlFor="my-input">Status:</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            />
            <FormHelperText id="my-helper-text">
              Ej: Idea, Assesment, En desarrollo, Bot Finalizado
            </FormHelperText>
          </FormControl>
          <ButtonMain sx={{ margin: "25px" }} msg="Enviar" ></ButtonMain>
        </Container>
    </form>
  );
};

export default CreateIdea;
