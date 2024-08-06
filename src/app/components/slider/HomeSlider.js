"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";
const useStyles = makeStyles(() => ({
  sliderContainer: {
    position: "relative",
    overflow: "hidden",
    height:"100vh",
  
    width: "100%",
  },
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    transition: "transform 0.5s ease-in-out",
  },
  slideImage: {
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  },
  blueOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Blue color with 0.3 opacity
    zIndex: 1,
  },
  slideContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    textAlign: "center",
    zIndex: 2,
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

const slides = [
  {
    image: "/banner.jpg",
    heading: "Avicenna International Medical University",
    content: "Content for Slide 1",
  },
  {
    image: "/banner2.jpg",
    heading: "Get Ready To Learn With Us",
    content: "Content for Slide 2",
  },
  {
    image: "/b3.jpg",
    heading: "Top Medical facility",
    content: "Content for Slide 3",
  },
  {
    image: "/b9.jpg",
    heading: "Top Medical Staff",
    content: "Content for Slide 4",
  },
];

const HomepageSlider = () => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes.sliderContainer}>
      {slides.map((slide, index) => (
        <Box
          key={index}
          className={classes.slide}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
        <LazyLoadImage
          src={slide.image} 
          alt={`Slide ${index + 1}`} 
          effect="blur"
         
          className={classes.slideImage}
        />
       {/* <Image
       src={slide.image} alt={`Slide ${index + 1}`} 
      quality={100} fill sizes="100vw" style={{
          width: '100%',
          objectFit: 'cover',

         
        }} className={classes.slideImage}
    /> */}
          {/* <img src={slide.image} alt={`Slide ${index + 1}`} className={classes.slideImage} /> */}
          <Box className={classes.blueOverlay}></Box>
          <Box className={classes.slideContent}>
            <Zoom>
              <Typography variant="h3" sx={{
              width: { sm: "100%", md: "100%" },
              ml: "20px",
              fontWeight: 700,
              color: "white",
              fontSize: { xs: "40px", md: "80px" },
            }}>{slide.heading}</Typography>
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
                marginTop:"5px",
                marginBottom: "20px",
                fontWeight: 700,
                width: "150px",
                background: "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
                
              }}
            >
              Apply Now
            </Button>
              {/* <Typography variant="body1">{slide.content}</Typography> */}
            </Zoom>
          </Box>
        </Box>
      ))}
      <Box className={classes.navigation}>
        <Button className={classes.navButton} onClick={handlePrevSlide}>
          <ArrowBackIosIcon />
        </Button>
        <Button className={classes.navButton} onClick={handleNextSlide}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default HomepageSlider;
