"use client"
import React from 'react';

import { Box, Card, CardContent, CardMedia, Container, CssBaseline, Grid, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, Typography, createTheme } from '@mui/material';
import Fade from "react-reveal/Fade";
import theme from "@/app/theme";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
    heroSection: {
      backgroundColor: "#001e60",
      color: "#fff",
      padding: theme.spacing(12, 0),
      position: "relative",
    },
    heroText: {
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
    cardContainer: {
      position: "relative",
      marginTop: "-80px",
      marginBottom: "100px",
    },
    card: {
      display: "flex",
      gap:"30px",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems:"center"
      },
    },
    cardMedia: {
      width: "30%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        
      },
    },
    cardContent: {
      width: "70%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  }));

export default function StaffPage() {
    const items = [
        'To maintain the honor, dignity and to uphold the prestige and to foster cordial relationship with administration, teachers, students and authorities.',
        'To cultivate and promote medical and allied sciences including improvement of public health and medical education nationally & internationally.',
        'To strengthen the bonds of co-operation and fellowship amongst all the graduates of the medical institute.',
        'To look after the interests of the ex-students of the Institution and to maintain and strengthen the fraternal relationship amongst them.'
      ];
    const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box
      sx={{
        backgroundColor: '#001e60',
        color: 'white',
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
          Avicenna Alumni Association
        </Typography>
        
      </Container>
    </Box>
    
        <Fade bottom>
       <Container sx={{ position: "relative",
      marginTop: "-80px",
      marginBottom: "100px", backgroundColor:"#ffffff",borderRadius:"20px"}}>
       <Grid container spacing={4} >
          <Grid item xs={12} sm={6} md={6} sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            <img
              
              width="80%"
              src="/assets/alumni-assoiciation.jpg"
              alt="Rector"
            />
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
            <List >
          {items.map((item, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #e0e0e0' }}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
            </Grid>
          
          </Grid>
       </Container>
       
        </Fade>
      
     
    </>
  );
}
