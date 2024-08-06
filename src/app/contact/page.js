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
const useStyles = makeStyles({
  hero: {
    backgroundColor: "#001e60",
    color: "white",
    paddingTop: "30px",
    paddingBottom: "30px",
    textAlign: "center",
  },
  section: {
    paddingTop:"10px"
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
    color:"white"
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.hero}>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5">
            Welcome to the Avicenna International Medical University! Our
            mission is to provide excellent medical education and research
            opportunities.
          </Typography>
        </Container>
      </div>
      <div >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Image
              src="/assets/conatct.jpeg"
              alt="Contact Us"
              width={500}
              height={500}
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Container>
              <Typography variant="h4" component="h2" gutterBottom sx={{    fontWeight: 700,
    lineHeight: "1.2em",
    color: "#382153",
}}>
                Contact Us
              </Typography>
              <Typography variant="body" gutterBottom sx={{ marginBottom: "20px" }}>
                Fields marked with an * are required
              </Typography>
              <ContactForm />
            </Container>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            md={4}
            sx={{display:"flex",flexDirection:"column", backgroundColor: "#001e60", padding: 4, color: "white",height:400,justifyContent:"center"}}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="h6">Follow Us</Typography>
            <Box className={classes.socialMedia}>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener"
                className={classes.socialMediaLink}
              >
                <FacebookRoundedIcon />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener"
                className={classes.socialMediaLink}
              >
                <TwitterIcon />
              </Link>

              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener"
                className={classes.socialMediaLink}
              >
                <InstagramIcon />
              </Link>
            </Box>
            <Box mt={2}>
              <Typography variant="h6">Contact Details</Typography>
              <Typography variant="body1">
                Address: Avenue shabdan batir 74 Bishkek city Kyrgyz Republic
              </Typography>
             
              <Typography variant="body1">
                Email: info@avicenna.edu.kg / avicennaedu@yahoo.com 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <iframe
              className={classes.map}
              loading="lazy"
              src="https://maps.google.com/maps?q=aviceena%20international%20medical%20university%20&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
              title="aviceena international medical university"
              aria-label="aviceena international medical university"
              original-font-size="16px"
              original-border-color="rgb(80, 80, 80)"
              original-background-color="rgba(0, 0, 0, 0)"
              original-background-image="none"
              original-color="rgb(80, 80, 80)"
              original-box-shadow="none"
              original-text-shadow="none"
              original-font-family="Roboto, sans-serif"
              original-letter-spacing="0"
              original-line-height="16px"
              allowFullScreen
              height="400"
            ></iframe>
            {/* <iframe
              className={classes.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098506!2d144.9559233153184!3d-37.817209979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f0ed3c9c0b!2sVictoria%20University!5e0!3m2!1sen!2sau!4v1602153851274!5m2!1sen!2sau"
             
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
