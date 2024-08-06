// src/pages/university-photos.js

import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
} from "@mui/material";
import Link from "next/link";
import PermMediaIcon from "@mui/icons-material/PermMedia";
const universityPhotos = [
  {
    id: "1",
    name: "University Pictures",
    imageUrl: "/assets/news/heartDisease.jpg",
    path:"university-pictures"
  },
  { id: "2", name: "Events", imageUrl: "/assets/news/heartDisease.jpg",
    path:"events"
   },
  { id: "3", name: "Awords", imageUrl: "/assets/news/heartDisease.jpg" , path:"awards"},
  // Add more photos as needed
];

const UniversityPhotos = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#001e60",
          color: "white",
          py: 12,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            textAlign="center"
          >
            University Photos
          </Typography>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4} paddingTop={15} paddingBottom={15}>
          {universityPhotos.map((photo) => (
            <Grid item key={photo.id} xs={12} sm={6} md={4}>
              <Link href={`/university-photos/${photo.path}`} passHref>
                <Card
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    color: "#fff",
                    background:
                      "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
                    transition: "transform 1s, background-color 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
                    },
                  }}
                >
                
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">{photo.name}</Typography>
                    <PermMediaIcon />
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default UniversityPhotos;
