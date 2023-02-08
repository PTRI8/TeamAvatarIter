import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Button, TextField, Stack } from '@mui/material';
import logo from '../assets/Logo2.png';

const linkStyle = {
  textDecoration: 'none',
  color: 'black'
};



function Banner(){
  const handleClick = () => {
    const textField = document.querySelector('#text-field');
    textField.select(); 
    document.execCommand('copy');
  };


  return(
    <Grid container spacing={2}>
      <Stack 
        direction="column"
        spacing={5}
        margin={10}>

        <Grid>
          <Button 
            sx= {{ 
              minHeight: 59, 
              minWidth: 140, 
              marginBottom: 0 }} 
            style= {{backgroundImage:`url(${logo})`}}>
          </Button></Grid> 

        <Container>This is filler text</Container>

        <Stack 
          direction="row" 
          spacing={5}>
          <Button variant="contained" sx={{height:56}}>Get Started</Button>
          <TextField id='text-field' value= 'npm install kafe-dlq' onClick = {handleClick}/>  
        </Stack>

      </Stack>
    </Grid>
    
  );
}
  
export default Banner;

