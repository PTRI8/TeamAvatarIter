import React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

function Dashboard(){

  return(
    <>
      <Grid container sx={{ minHeight: '100%'}}>
        <Grid item md={12} sx={{ minHeight: '120px'}}>
          <Navbar />
        </Grid>
        <Grid item md={12} sx={{ background: 'linear-gradient(to top, #CCE1EB, white)', minHeight: '400px'}}>
          <Banner />
        </Grid>
        <Grid item md={12} sx={{ bgcolor: 'primary.light', minHeight: '100vh' }}>

          <h1>space</h1>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;