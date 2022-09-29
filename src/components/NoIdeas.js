import React from 'react'
import {Container, Typography } from "@mui/material";
import AutoFixOffTwoToneIcon from '@mui/icons-material/AutoFixOffTwoTone';
//import NoteAddIcon from '@mui/icons-material/NoteAdd';

const NoIdeas = () => {
  return (
    <div>
        <Container sx={{ display:'flex', flexDirection:'column', height:'100px' }}>
            <AutoFixOffTwoToneIcon fontSize="large" sx={{ width: '100', height: '200', margin: 'auto', padding: '0px' }}></AutoFixOffTwoToneIcon>
            <Typography fontWeight={'100'} fontSize={'17px'}>No se encontraron ideas. Crea la primera!</Typography>
        </Container>
    </div>
  )
}

export default NoIdeas