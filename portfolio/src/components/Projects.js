import React from "react";
import ProjectCard from "../templates/projectTemplate";
import { Container, Row, Col } from "react-bootstrap";

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { Grid } from "@material-ui/core";






const Projects = () => {

  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


  return(
  
    <section className="about" id="projects">

      <div>
     
       
          <h1> Projects</h1>
          {/* <ProjectCard /> */}

          {/* <Card variant="outlined">{card}</Card> */}

         {/*  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <ProjectCard />
        </Grid>
        <Grid item xs={4}>
        <ProjectCard />
        </Grid>
        <Grid item xs={4}>
        <ProjectCard />
        </Grid>
        <Grid item xs={8}>
        <ProjectCard />
        </Grid>
      </Grid>
    </Box>
 */}
    
    </div>

       
     
    </section>
  );
  
};

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', }}
  >
    •
  </Box>
);



const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);


export default Projects;
