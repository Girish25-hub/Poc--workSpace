import React from 'react'
import {Box,Grid,Container }from '@mui/material';
import Logoicons from './Logo/logoicons';
import NavBar from './nav/navBar';

function Header() {
  return (
    <Container >
    <Box sx={{ flexGrow: 1}}>
      <Grid container   
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
         < Logoicons />
        </Grid>
        <Grid item xs={9}>
          <Grid container   
           direction="row"
           justifyContent="flex-end"
           alignItems="center"
           spacing={1}
           >
            <  NavBar />
          </Grid>
        </Grid>
      </Grid>
    </Box>  
    </Container>
  )
}

export default Header;
