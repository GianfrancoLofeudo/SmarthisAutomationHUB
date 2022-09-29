import React from 'react'
import "../styles.css";
import { Container, Toolbar } from "@mui/material";


const BrandBanner = ({brand}) => {
  return (
    <Container maxWidth="100%"  sx={{ display: 'flex' , flexWrap: 'wrap' , marginTop:'100px' , alignContent:'center', justifyContent:'center' }}>
        <Toolbar sx={{ maxWidth: '100%', height: 'auto' }}>
            <img className="img-logo" alt='banner-brand' src= {brand} />
        </Toolbar>
    </Container>
  )
}

export default BrandBanner