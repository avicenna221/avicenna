
import React from 'react';

import { Container, Typography, Grid, Card, CardMedia, Box } from '@mui/material';
import GallaryImages from '@/app/institute/gallary/GallaryImages';

const UniversityGallery = ({params}) => {


  return (
    <><Box
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
  <GallaryImages/>
      
    
    </Container></>
    
  );
};

export default UniversityGallery;
