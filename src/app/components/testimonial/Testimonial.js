"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TestimonialIcon from "@mui/icons-material/FormatQuote"; // Choose an appropriate icon for testimonials
import Fade from "react-reveal/Fade";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "@/app/theme";

const useStyles = makeStyles(() => ({
  section: {
    padding: theme.spacing(8, 0),
    background:
      "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
  },
  heading: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  testimonialContainer: {
    overflow: "hidden",
    position: "relative",
  },
  testimonialSlide: {
    display: "flex",
    justifyContent: "center",
    transition: "transform 0.5s ease-in-out",
  },
  card: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: theme.spacing(2),
    padding: theme.spacing(2),

    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  icon: {
    position: "relative",
    Bottom: "80px",
    fontSize: "3rem",
    color: theme.palette.primary.main,
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    width: "80px",
    height: "80px",
  },
  cardContent: {
    textAlign: "center",
  },
  userName: {
    marginTop: theme.spacing(1),
  },
  navigation: {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    transform: "translateY(-50%)",
    zIndex: 3,
  },
  navButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },
}));

const testimonials = [
  {
    content:
      "I am DR. Farhan Ahmad from Pakistan, 1st year student pursing from AVICENNA university medical faculty, I came here in 2022. my experience with my university has been quite positive overall. The faculty members are knowledgeable and experienced in their respective fields, and they are always willing to help students who need guidance or clarification on a particular topic. The curriculum is well-structured, with a good balance between theoretical knowledge and practical skills training.",
    userName: "Farhan Ahmad",
    avatar: "/testimonials/farhan.JPG",
  },
  {
    content:
      "I am DR. Muhammad Abdullah from Pakistan, 3rd year student pursing from AVICENNA university medical faculty, I came here in 2020. I appreciate the rigorous curriculum and the high standards of education provided. The faculty members are knowledgeable and experienced in their respective fields, and they make an e",
    userName: "Muhammad Abdullah",
    avatar: "/testimonials/abdullah.JPG",
  },
  {
    content:
      "I am DR. Shahmeen shah Talpur, 3rd year student pursing from AVICENNA university medical faculty, I came here in 2020. I am grateful for the opportunity to pursue my dream of becoming a doctor and for the quality education I receive. The university has a reputable medical program with knowledgeable professors who are experts in their respective fields. The curriculum is comprehensive and covers all the necessary subjects and clinical rotations to develop a well-rounded understanding of medicine.",
    userName: "Shahmeen shah Talpur",
    avatar: "/testimonials/lailpur.JPG",
  },
  {
    content:
      "It is with great pleasure that I write this testimonial for Avicenna University. I am grateful to the administration, faculty, and staff for their unwavering support and guidance throughout my academic journey. The education I received at Avicenna University has been instrumental in shaping my career and personal growth. My experience at Avicenna University has been nothing short of amazing. The university's commitment to providing a conducive learning environment has enabled me to thrive academically and personally.",
    userName: "MD Farhan",
    avatar: "/testimonials/md farhan.JPG",
  },
  {
    content:
      "Hello, I'm Dr Udham Singh and have spent great times in Avicenna university and have a lot of great memories. In Avicenna university not only we have interesting courses with skilled professors, but we are also encouraged to apply what we learned in real life experiences. I had the opportunity to work on many extracurricular activities such as conferences, debates, trips etc. To be part of the Avicenna university family is one of the greatest things that had ever happened to me.",
    userName: "Udham Singh",
    avatar: "/testimonials/udhan.JPG",
  },
  {
    content:
      "I am DR.mohin singh from 4th year student pursing from AVICENNA university medical faculty. I came here in 2019, AVICENNA provides a golden opportunity for the brilliant students by providing scholarship to them. Mine and my parents’ dream was to become doctor. In my childhood I saw many people in pain that they were su",
    userName: "mohin singh",
    avatar: "/testimonials/singh.JPG",
  },
  {
    content:
      "I am DR. Kashish Singh from India, 2nd year student pursing from AVICENNA university medical faculty, I came here in 2022. the university has excellent infrastructure and resources, including well-equipped laboratories and libraries, which contribute to a conducive learning environment. The opportunities for research and clinical exposure are also abundant, allowing us to gain practical experience and develop our skills.",
    userName: "kashish singh",
    avatar: "/testimonials/kashish singh.JPG",
  },
];

const TestimonialSection = () => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(testimonials.length, "-----", currentSlide);
  const handlePrevSlide = () => {
    if (currentSlide != 0) setCurrentSlide(currentSlide - 1);
    else setCurrentSlide(6);
  };

  const handleNextSlide = () => {
    if (currentSlide != testimonials.length - 1)
      setCurrentSlide(currentSlide + 1);
    else setCurrentSlide(0);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide != testimonials.length - 1)
        setCurrentSlide(currentSlide + 1);
      else setCurrentSlide(0);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <Box className={classes.section}>
      <Container>
        <Box className={classes.heading}>
          <Fade>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#fff" }}>
              What Our Students Say
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff" }}>
              We value our Students' feedback and continuously strive to improve
              our services.
            </Typography>
          </Fade>
        </Box>
        <Box className={classes.testimonialContainer}>
          <Box className={classes.testimonialSlide}>
            {testimonials.map(
              (testimonial, index) =>
                currentSlide == index && (
                  <Card className={classes.card} key={index}>
                    <TestimonialIcon
                      className={classes.icon}
                      fontSize="large"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="body1">
                        {testimonial.content}
                      </Typography>
                    </CardContent>
                    <Grid
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap={2}
                    >
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.userName}
                        className={classes.avatar}
                      />
                      <Typography variant="h6" className={classes.userName}>
                        {testimonial.userName}
                      </Typography>
                    </Grid>
                  </Card>
                )
            )}
          </Box>
          <Box className={classes.navigation}>
            <Button className={classes.navButton} onClick={handlePrevSlide}>
              <ArrowBackIosIcon />
            </Button>
            <Button className={classes.navButton} onClick={handleNextSlide}>
              <ArrowForwardIosIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
