"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Fade from "react-reveal/Fade";
import theme from "@/app/theme";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

const useStyles = makeStyles(() => ({
  section: {
    position: "relative",
    backgroundImage: "url('/banner2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    marginTop: "150px",
    padding: theme.spacing(16, 0), // Adjust padding to accommodate 50% offset
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 1,
    },
  },
  container: {
    position: "relative",
    zIndex: 2,
  },
  listContainer: {
    display: "flex",
    justifyContent: "center",

    gap: theme.spacing(2),
    marginTop: "-200px", // Position 50% above the main section
  },
  listItem: {
    background:
      "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
    padding: theme.spacing(2),
    display: "flex",
    color: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minWidth: "140px",
    height: "140px",
    textAlign: "center",
    transition: "transform 1s, background-color 0.3s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "#fff",
    },
  },
  textFieldContainer: {
    textAlign: "center",
    marginTop: theme.spacing(4),
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
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      color: "#fff",
    },
  },
  cardMedia: {
    width: "100%",
    height: "130px", // Set the height of the card image
    objectFit: "cover",
    transition: "transform 1s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  cardContent: {
    textAlign: "center",
    height: "100px",
    padding: theme.spacing(2),
  },
}));

const data = [
  { label: "Staff", value: "300+" },
  { label: "Graduates", value: "100+" },
  { label: "Campuses", value: "6" },
  { label: "Batches Graduated", value: "4" },
];
const data2 = [
  {
    title: "Modern Campuses",
    image: "/building.JPG",
    description: "Learn about our Nursing program.",
  },
  {
    title: "Avicenna Teaching Hospital",
    image: "/assets/programs/doctor.jpg",
    description: "5 Year Course / 6 Year Course English Medium",
  },
  {
    title: "Highly Qualified Local and Foreign Staf",
    image: "/assets/staf/t2.jpg",
    description: "3 Year English or Russian Medium  ",
  },
  {
    title: "4 Batches Graduated",
    image: "/graduate.jpg",
    description: "5 Year Course English Medium",
  },
];
const StatsSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container className={classes.container}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "center",
            gap: 2,
            marginTop: "-200px",
          }}
        >
          {data.map((item, index) => (
            <Zoom key={index}>
              <Paper elevation={3} className={classes.listItem}>
                <Typography variant="h5">{item.value}</Typography>
                <Typography variant="body1">{item.label}</Typography>
              </Paper>
            </Zoom>
          ))}
        </Box>
        <Grid container spacing={4} justifyContent="center" mt={5}>
          <Grid
            item
            xs={12}
            md={6}
            mt={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Fade left>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  borderLeft: "5px solid red",
                  paddingLeft: "8px",
                  borderRadius: "15px",
                }}
              >
                OUR FEATURES
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 800, color: "#fff" }}
              >
                Medical Education
              </Typography>
              <Typography paragraph sx={{ color: "white" }}>
                "Medical education is not just a program for building knowledge
                and skills in its recipients... it is also an experience which
                creates attitudes and expectations."
              </Typography>
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                component={Link}
                href="studentportal"
                sx={{
                  borderRadius: "30px",
                  maxHeight: "40px",
                  marginTop: "5px",
                  marginBottom: "20px",
                  fontWeight: 700,
                  width: "150px",
                  background:
                    "linear-gradient(to right, #441e87 0%, #4b91f1 20%, #4b91f1 50%, #441e87 100%)",
                }}
              >
                Apply Now
              </Button>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Grid container spacing={4} justifyContent="center" mt={5}>
              {data2.map((program, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Zoom>
                    <Box className={classes.cardContainer}>
                      <Card className={classes.card}>
                        <CardMedia
                          image={program.image}
                          title={program.title}
                          className={classes.cardMedia}
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontWeight: 700 }}
                          >
                            {program.title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
