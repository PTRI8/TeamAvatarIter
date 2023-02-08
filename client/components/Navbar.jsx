import React from 'react';
import { Stack } from '@mui/system';
import { Grid, Button, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const btnStyle = {minWidth: 150, 
  margin: '0px',
  textAlign:'right',
  textTransform: 'unset',
  color: 'palette.primary.dark',
};

function Navbar(){

  return( 
    <Grid container sx={{ marginLeft: 10}}>
      <Stack  direction="row" spacing={5} >
        <Button variant="outlined" sx={btnStyle}>Features</Button>
        <Button variant="outlined"  sx={btnStyle}>Docs</Button>
        <Button variant="outlined"  sx={btnStyle}>Team</Button>
        <Button variant="contained" startIcon={<LinkedInIcon />}></Button>
        <Button variant="contained" startIcon={<GitHubIcon />}></Button>
        <Button variant="contained" startIcon={<EmailIcon />}></Button>
      </Stack>
    </Grid>
  );
}

export default Navbar;
