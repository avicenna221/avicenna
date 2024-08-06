"use client";
import React, { useEffect, useState } from "react";
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
import HeroSection from "../../components/hero section/HeroSection";
import { getRequest } from "@/app/RequestsAPI/RequestsApi";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from "next/link";
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
  const [data, setData] = useState(null);
  const getData = async () => {
    const data = await getRequest("/api/publication");
    if (data.status == 200) {
      setData(data.data.Data);
    }
  };
  useEffect(() => {
    getData();
  }, [])
  
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
           OUr publications
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
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 800,
            color: "#382153",
            paddingLeft: "8px",
            borderRadius: "15px",
            textDecoration: "underline",
            textAlign: "center",
          }}
          pt={5}
          pb={5}
        >
          SCIENTIFIC JOURNALS
        </Typography>
        <Box sx={{ mt: 2 }}>
        
        <List sx={{ bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 1 }}>
          {data!=null && data.map((item, index) => (
            <ListItem component={Link} href={item.link} key={index} sx={{ borderBottom: '1px solid #e0e0e0' }}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item.title} sx={{textDecoration:"underline"}}/>
            </ListItem>
          ))}
        </List>
      </Box>
        
      </Container>
    </ThemeProvider>
  );
}
