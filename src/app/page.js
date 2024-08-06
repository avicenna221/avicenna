"use client";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Button,
  Typography,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "./theme";

import dynamic from 'next/dynamic';
const OurPrograms = dynamic(() => import('./components/programs/OurPrograms'), { ssr: false });
const StatsSection = dynamic(() => import('./components/programs/StatsSection'), { ssr: false });
const NewsListHome = dynamic(() => import('./components/news/NewsListHome'), { ssr: false });
const WhyChooseUs = dynamic(() => import('./components/whyChoooseUs/WhyChooseUs'), { ssr: false });
import PartnerComponet from "./community&partners/PartnerComponet";
const HomeSlider = dynamic(() => import('./components/slider/HomeSlider'), { ssr: false });

import TestimonialSection from "./components/testimonial/Testimonial";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getRequest } from "./RequestsAPI/RequestsApi";
import Curriculum from "./components/Curriculum";
const useStyles = makeStyles({
  hero: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(10, 0),
    textAlign: "center",
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
  },
  section: {
    padding: theme.spacing(6, 0),
  },
  slideMedia: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  card: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(2),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  callToAction: {
    marginTop: theme.spacing(4),
  },
  imageContentSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(0),
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
  },
  content: {
    padding: theme.spacing(4),
  },
});
export default function Home() {
 
  const classes = useStyles();
  return (
    <Box>
    <Box sx={{maxHeight:"100vh"}}>
    <HomeSlider />
    </Box>
     

      {/* <div className={classes.hero}>
        <Container className={classes.heroContent}>
          <Typography variant="h1" component="h1" gutterBottom>
            Welcome to Medical University
          </Typography>
          <Typography variant="h5" paragraph>
            Excellence in Medical Education, Research, and Healthcare.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.callToAction}
          >
            Learn More
          </Button>
        </Container>
      </div> */}

      <Box>
        <Box
          paddingLeft={4}
          backgroundColor="#E6EFF8"
          paddingRight={4}
          paddingTop={10}
          paddingBottom={10}
        >
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            spacing={4}
          >
            {/* <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 800, borderLeft:"5px solid red" ,paddingLeft:"8px",borderRadius:"15px"}}
            >
              About
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 800, color: "#593e7e" }}
            >
              Our University
            </Typography>
            <Typography paragraph sx={{color:"GrayText"}}>
              Avicenna International Medical University is registered with the
              Ministry of Justice, the Ministry of Education and the Ministry of
              Health of the Kyrgyz Republic at 74 Shabdan Baatyr Avenue,
              Bishkek, the Kyrgyz Republic, and has a license for higher
              professional education. The higher educational institution is
              designed to train qualified specialists in the medical field both
              for the Kyrgyz Republic and for other countries of the world,
              including Pakistan, Bangladesh, India, Nepal, Nigeria, America,
              Turkey and Egypt, etc...
            </Typography>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "30px",
                maxHeight: "40px",
                marginTop:"5px",
                marginBottom: "20px",
                fontWeight: 700,
                width: "150px",
                background: "linear-gradient(to right, #441e87 0%, #4b91f1 20%, #4b91f1 50%, #441e87 100%)",
                
              }}
            >
              Learn more
            </Button>
          </Grid> */}
            <Grid item xs={12} md={10}>
              {/* <video
              src="/video,mp4"
              autoPlay
              muted
              loop
              className={classes.slideMedia}
            /> */}
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/F7QWqZmVCJA?si=d-dW1uJW3hb_Ey3-"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </Box>

        {/* our programs */}
        
        <OurPrograms />
        <Curriculum/>
        <StatsSection />
        <WhyChooseUs />
        <Box pt={1} position="relative">
        <TestimonialSection />
        </Box>
        
        <Container>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 800,
              paddingLeft: "8px",
              borderRadius: "15px",
              color: "#593e7e",
              marginTop: "90px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Recognized and Approved by
          </Typography>
        </Container>

        <PartnerComponet />

        <Box
          sx={{
            backgroundColor: "#E6EFF8",
            marginTop: "90px",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <Container>
            <Grid container className={classes.imageContentSection}>
              <Grid item xs={12} md={6}>
                <Fade left>
                <CardMedia
                component="img"
                height="auto"
                image="/assets/vision.jpg"
                alt="jkhsj"
              />
                  {/* <img
                    src="/assets/vision.jpg"
                    alt="Left Section"
                    className={classes.image}
                  /> */}
                </Fade>
              </Grid>
              <Grid item xs={12} md={6} className={classes.content}>
                <Fade right>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      lineHeight: "1.2em",
                      color: "#382153",
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography paragraph>
                    The mission of the EI HPE IMU "Avicenna": Training of modern
                    medical personnel through the scientific and educational
                    process through the formation of students prectice-oriented
                    professional medical knowledge and skill that meet
                    international standards aiming to improve the provision of
                    medical sevices to the population of Central and South Asia,
                    as well as the requirements of the labour market focused on
                    the needs of the individual, society and the state.{" "}
                  </Typography>
                  
                </Fade>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid container className={classes.imageContentSection}>
              <Grid item xs={12} md={6} className={classes.content}>
                <Fade left>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      lineHeight: "1.2em",
                      color: "#382153",
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography paragraph>
                    Our vision is to be a leading institution in medical
                    education, research, and healthcare services. We aim to make
                    significant contributions to the field of medicine...
                  </Typography>
                  
                </Fade>
              </Grid>
              <Grid item xs={12} md={6}>
                <Fade right>
                <CardMedia
                component="img"
                height="auto"
                image="/assets/mission.jpg"
                alt="jkhsj"
              />
                 
                </Fade>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 800,
            paddingLeft: "8px",
            borderRadius: "15px",
            color: "#593e7e",
            marginTop: "90px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Latest News
        </Typography>
        <NewsListHome />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            component={Link}
            href="news"
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
            View More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
