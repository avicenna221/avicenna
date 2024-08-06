"use client";
import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Fade from "react-reveal/Fade";
import Icon from '@mui/icons-material/CheckCircle'; // Import the icon you prefer
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ScienceIcon from '@mui/icons-material/Science';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import StarIcon from '@mui/icons-material/Star';
import SpaIcon from '@mui/icons-material/Spa';
import theme from "@/app/theme";
const useStyles = makeStyles(() => ({
  section: {
    padding: theme.spacing(12, 0),
    backgroundColor: "#E6EFF8",
  },
  leftContent: {
    textAlign: "left",
    padding: theme.spacing(4),
  },
  card: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    color: "#fff",
    height:"100px",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardIcon: {
    marginRight: theme.spacing(2),
    
  },
  cardContent: {
    flex: 1,
  },
}));

const reasons = [
  { icon: <Icon fontSize="large"/>, title: "95% Attendance" },
  { icon: <Diversity3Icon fontSize="large" />, title: "Group Study" },
  { icon: <ScienceIcon fontSize="large"/>, title: "Modern Labs" },
  { icon: <BeenhereIcon fontSize="large"/>, title: "co-curricular Activities" },
  { icon: <StarIcon fontSize="large"/>, title: "Certified as Corruption Free" },
  { icon: <SpaIcon fontSize="large"/>, title: "Health & Security Facilities" },
];

const WhyChooseUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className={classes.leftContent}>
              <Fade left>
              <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 800, borderLeft:"5px solid red" ,paddingLeft:"8px",borderRadius:"15px"}}
            >
              WHY CHOOSE US
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 800, color: "#593e7e" }}
            >
              We Have Well Trained Teachers!
            </Typography>
                <Typography variant="body1" paragraph>
                  We provide a unique combination of academic excellence, experienced faculty, state-of-the-art facilities, and comprehensive support to ensure our students achieve their full potential.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our curriculum is designed to foster innovation, critical thinking, and global perspectives. Join us to experience a transformative education that opens doors to a world of opportunities.
                </Typography>
              </Fade>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            {reasons.map((reason, index) => (
                <Grid key={index} item xs={12} md={6}>
              <Fade right key={index}>
                <Card className={classes.card}>
                  <Box className={classes.cardIcon}>{reason.icon}</Box>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body1">{reason.title}</Typography>
                  </CardContent>
                </Card>
                
              </Fade>
              </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
