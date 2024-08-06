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
  
    cardContent: {
      width: "100%",
     
    },
  }));

export default function StaffPage() {
    const items = [
    'I do solemnly swear by that which I will be loyal to the profession of medicine and just generous to it’s members.',
    "That I will lead my life and practice my art in uprightness and honor.",
    "That into whatsoever house I shall enter, it shall  before the good of side to the utmost of my power.",
    "I holding myself aloof from wrong ,from corruption and from the temptation of others to vice.",
    "That I will exercise my art solely for the cure of my patients, and will give no drug , perform no operation for a criminal purpose even if solicited , for less suggest.",
    "That whatsoever , I shall see or hear of the lives of men which is not fitting to be spoken  , I will keep secret.",
    "These things I do promise , and in proportion as I am faithful to this my oath may happiness and good repute be ever."    
    ];
      
      const staffData = [
        {
          name: "Dr. Temir Arapov",
          image: "/aoth/oth1.JPG",
        },
        {
          name: "Builashev talaibek Sabralievich",
          image: "/aoth/oth2.JPG",
        },
        {
          name: "Nasirova Svetlana Akbarovna",
          image: "/aoth/oth4.JPG",
        },
        
      
      
       
        // Add more staff members as needed
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
        <Typography variant="h2" component="h1" gutterBottom textAlign="center" sx={{ fontWeight: 800, color: "#fff" }}>
          Avicenna Graduate Oath
        </Typography>
        
      </Container>
    </Box>
    <Container className={classes.cardContainer}>
    <Grid container spacing={4}>
        {staffData.map((staff, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minHeight: "300px" }}>
              <CardMedia
                component="img"
                height="300"
                image={staff.image}
                alt={staff.name}
              />
             
            </Card>
          </Grid>
        ))}
      </Grid>
        <Fade bottom>
        <Typography variant='h4' pt={5} pb={3} sx={{ fontWeight: 800,  }}>
          Pre-Graduation Hippocratic Oath 
          </Typography>
       
          <Card className={classes.card}>
          
          
            <CardContent className={classes.cardContent}>
            <List sx={{ bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 1 }}>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #e0e0e0' }}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
            </CardContent>
          </Card>
        </Fade>
      </Container>
     
    </>
  );
}
