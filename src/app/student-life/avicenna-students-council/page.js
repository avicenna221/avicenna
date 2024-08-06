"use client";
import React from "react";
import Zoom from "react-reveal/Zoom";
import {
  Box,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
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
    "President",
    "vice president",
    "General secretary",
    "semester Representative",
    "Head of social media team",
    "Head of sports committee",
    "Head of academic affaires",
    "Head of Search council",
    "Head of event organization team",
  ];
  const list = [
    { src: "/councel/IMG-20240801-WA0010.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0011.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0012.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0013.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0014.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0015.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0016.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0017.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0018.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0019.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0020.jpg", alt: "counsel" },
    { src: "/councel/IMG-20240801-WA0021.jpg", alt: "counsel" },
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
            Avicenna Students Council
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
        <Box pt={5} sx={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <Box sx={{width:"200px"}}>
        <CardMedia
          component="img"
          height="200"
          width="200"
          image="/councel-logo.png"
          alt="councel-logo"
        />
        </Box>
        </Box>
        
        
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
          Introduction:
        </Typography>
        <Typography sx={{ color: "grey", fontWeight: 700 }}>
          Student Council is a group of elected and volunteer students who
          work with an adult advisor within the framework of bylaws to provide a
          means for student expression and assistance in school affairs and
          activities, provide opportunities for student leadership experience,
          and promote student, faculty, and community relations.
        </Typography>
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
          What we do:
        </Typography>
        <Typography sx={{ color: "grey", fontWeight: 700 }}>
          Student Council demonstrates the importance of representation and
          active involvement in the student community. We develop leadership and
          communication skills. The student council acts as a bridge that
          connects students with the administration of the institute. We provide
          a forum for the presentation of student ideas and opinions on
          institute policies that directly impact students. We improve the
          student community by directly addressing student issues and concerns.
        </Typography>
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
          Our aim:
        </Typography>
        <Typography sx={{ color: "grey", fontWeight: 700 }}>
          To initiate, implement, and complete projects and activities which
          will be of help to the institute, the students, the faculty, and the
          administration. To contribute to the educational experiences of
          students by providing them with a positive involvement in the
          institute, with widened areas of responsibility, and with more direct
          participation in organizing and implementing activities. To promote an
          awareness of human relations, power structures, and how one
          effectively operates within them. To provide a viable means for
          student expression and an increasing amount of self-direction.
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          mt={5}
          gutterBottom
          sx={{
            fontWeight: 800,
            borderLeft: "5px solid red",
            paddingLeft: "8px",
            borderRadius: "15px",
          }}
        >
          Our Avicenna students council Structure
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
        <Grid container spacing={4} mt={3}>
          {list.map((item, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Zoom>
                <img src={item.src} alt={item.alt} className="conselImg" />
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
