"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "@/app/theme";
import Fade from "react-reveal/Fade";

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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  cardMedia: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 200,
    },
  },
  cardContent: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function ViseDean() {
  const classes = useStyles();

  return (
    <>
     
      <Container className={classes.cardContainer}>
        <Fade bottom>
        <Box sx={{background: "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",padding:3,borderTopLeftRadius:5,borderTopRightRadius:5}}>
        <Typography variant="h5" color="white">
         Vice Deans Message
        </Typography>
        </Box>
       
          <Card className={classes.card}>
            <CardMedia
              component="img"
              className={classes.cardMedia}
              image="/assets/staf/t2.jpg"
              alt="Rector"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: 700, lineHeight: "1.2em", color: "#382153" }}
              >
                Dear Students,
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                mt={2}
              >
                Medicine is not just an occupation or a career but a profession. We at Avicenna medical university strive to instill in our students an appreciation of the meaning of service, a love of learning that will stay with them throughout their professional lives and a sense of duty to their patients, their colleagues and their community. Avicenna medical university’s program in medical education is designed to foster excellence in the future leaders of medicine. The focus of our educational program is not merely the transfer of information but the transformation of the learner in a culture providing that ingenious combination of support and challenge that leads to education. We have designed a program to provide a broad, rigorous and flexible foundation that will enable students to reach their highest potential of achievements.
                </Typography>
              <Typography
                variant="h6"
                component="h2"
                mt={2}
                sx={{ fontWeight: 700, lineHeight: "1.2em", color: "#382153" }}
              >
                Madina B. Berdibekova
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </Container>
    </>
  );
}
