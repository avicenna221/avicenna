// Import necessary libraries
"use client";
import React from "react";
import { Box, Container, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Zoom from "react-reveal/Zoom";
import theme from "@/app/theme";

const useStyles = makeStyles(() => ({
  root: {
    padding: theme.spacing(8, 0),
    textAlign: "center",
  },
  cardContainer: {
    position: "relative",
  },
  card: {
    position: "relative",
    overflow: "hidden",
    transition: "transform 1s, background-color 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      color: "#fff",
    },
  },
  cardMedia: {
    width: "100%",
    height: "200px", // Set the height of the card image
    objectFit: "cover",
    transition: "transform 1s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  cardContent: {
    textAlign: "center",
    height: "120px",
    padding: theme.spacing(2),
  },
}));
const programs = [
  {
    title: "Nursing",
    image: "/assets/programs/nursing.jpg",
    description: "Learn about our Nursing program English or Russian Medium.",
  },
  {
    title: "MBBS/MD",
    image: "/assets/programs/doctor.jpg",
    description: "5 Year Course / 6 Year Course English or Russian Medium",
  },
  {
    title: "BDS",
    image: "/assets/programs/BDS.jpg",
    description: "5 Year Course English or Russian Medium",
  },
  {
    title: "PG",
    image: "/assets/programs/pg.jpg",
    description: "3 Year English or Russian Medium  ",
  },
  {
    title: "PHD",
    image: "https://t3.ftcdn.net/jpg/02/94/40/64/360_F_294406436_q4Zkq5wmSMjuzxnBWEK0zkOr8wPsJpG0.jpg",
    description: "3 Year English or Russian Medium  ",
  },
];

const OurPrograms = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800, color: "#593e7e", marginBottom:"70px", }}>
          Our Programs
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {programs.map((program, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Zoom>
                <Box className={classes.cardContainer}>
                  <Card className={classes.card}>
                    <CardMedia
                      image={program.image}
                      title={program.title}
                      className={classes.cardMedia}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h6" component="h3" sx={{fontWeight:800,}}>
                        {program.title}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {program.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPrograms;