import React from 'react';
import Grid from '@mui/material/Grid';

function Dashboard(){

  return(
    <>
      <Grid container spacing={2} sx={{ minHeight: '100%'}}>
        <Grid item md={12} sx={{ minHeight: '120px'}}>
        </Grid>
        <Grid item md={12} sx={{ background: 'linear-gradient(to top, #CCE1EB, white)', minHeight: '120px'}}>
        </Grid>
        <Grid item md={12} sx={{ bgcolor: 'primary.light', minHeight: '100vh' }}>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;