// pages/contact.js
"use client";
import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import theme from "../theme";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactForm from "../components/contact form/ContactForm";
import ApplicationStatus from "../components/application-status/ApplicationStatus";
const useStyles = makeStyles({
  hero: {
    backgroundColor: "#001e60",
    color: "white",
    paddingTop: "30px",
    paddingBottom: "30px",
    textAlign: "center",
  },
  section: {
    paddingTop: "10px",
  },
  image: {
    width: "100%",
    height: "auto",

    borderRadius: theme.shape.borderRadius,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  map: {
    width: "100%",
    height: "cover",
    border: 0,
    borderRadius: theme.shape.borderRadius,
  },
  socialMedia: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  socialMediaLink: {
    marginBottom: theme.spacing(2),
    color: "white",
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.hero}>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Application Status
          </Typography>
          <Typography variant="h5">
            Welcome to the Avicenna International Medical University! Our
            mission is to provide excellent medical education and research
            opportunities.
          </Typography>
        </Container>
      </div>
      <div>
        <Grid container spacing={4} alignItems="center" mb={12} mt={12}>
          <Grid item xs={12} md={12}>
            <Container>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700, lineHeight: "1.2em", color: "#382153" }}
              >
                Check Status
              </Typography>
             
              <ApplicationStatus />
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
