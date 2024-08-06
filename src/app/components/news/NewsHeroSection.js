import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const NewsHeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#001e60',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Latest News
        </Typography>
        <Typography variant="h5" component="p">
          Stay updated with the latest news and announcements from our university.
        </Typography>
      </Container>
    </Box>
  );
};

export default NewsHeroSection;
