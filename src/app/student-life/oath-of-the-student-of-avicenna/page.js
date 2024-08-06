"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const theme = createTheme({
  palette: {
    primary: {
      main: "#001e60",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default function StaffPage() {
  const items = [
    "follow the ideology of the university, make every effort to expand your horizons, study hard and deepen your knowledge to improve the quality of the education received.",
    "show respect and courtesy to all employees, teachers, visitors and students of the university",
    "grow and develop as a person, and be a punctual, responsible and disciplined student, and later a doctor.",
  ];
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            textTransform="uppercase"
          >
            Oath of the Student of Avicenna
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{
          position: "relative",
          marginTop: "-80px",
          marginBottom: "100px",
          backgroundColor: "#ffffff",
          borderRadius: "30px",
        }}
      >
        <Box pt={5}></Box>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 800,
            borderLeft: "5px solid red",
            paddingLeft: "8px",
            borderRadius: "15px",
          }}
        >
          In English
        </Typography>
        
        <List
          sx={{
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 1,
          }}
        >
          {items.map((item, index) => (
            <ListItem key={index} sx={{ borderBottom: "1px solid #e0e0e0" }}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Box pt={5}></Box>
      
      </Container>
    </ThemeProvider>
  );
}
