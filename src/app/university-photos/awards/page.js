import React from "react";

import { Container, Typography, Box } from "@mui/material";

const UniversityGallery = ({ params }) => {
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
            Awords
          </Typography>
        </Container>
      </Box>
      <Container>
        <Typography
          variant="h6"
          component="h1"
          gutterBottom
          textAlign="center"
          p={12}
        >
          No Data Found
        </Typography>
      </Container>
    </>
  );
};

export default UniversityGallery;
