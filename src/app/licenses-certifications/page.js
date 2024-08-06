// pages/licenses-certifications.js
"use client";

import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Zoom from "react-reveal/Zoom";
import theme from "../theme";
import AddLocationSharpIcon from "@mui/icons-material/AddLocationSharp";
import Link from "next/link";
const useStyles = makeStyles(() => ({
  section: {
    padding: theme.spacing(8, 0),
    backgroundColor: "#E6EFF8",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

const licensesCertifications = [
  { src: "/certificate/certificate0006.jpg", alt: "Certification 2" },
  { src: "/certificate/certificate0005.jpg", alt: "Certification 2" },
  { src: "/certificate/certificate0007.jpg", alt: "Certification 2" },
  { src: "/certificate/v1.jpg", alt: "Certification 2" },
  { src: "/certificate/v2.jpg", alt: "Certification 2" },
  { src: "/certificate/v3.jpg", alt: "Certification 2" },
  { src: "/certificate/v4.jpg", alt: "Certification 2" },
  { src: "/certificate/v5.jpg", alt: "Certification 2" },
  { src: "/certificate/v6.jpg", alt: "Certification 2" },
  { src: "/certificate/v7.jpg", alt: "Certification 2" },
  { src: "/certificate/v8.jpg", alt: "Certification 2" },
  { src: "/certificate/v9.jpg", alt: "Certification 2" },
  { src: "/certificate/v10.jpg", alt: "Certification 2" },
  { src: "/certificate/v11.jpg", alt: "Certification 2" },
  { src: "/certificate/aaopo_page-0001.jpg", alt: "License 1" },
  { src: "/certificate/aaopo_page-0002.jpg", alt: "License 2" },
  { src: "/certificate/aaopo_page-0003.jpg", alt: "Certification 1" },
  { src: "/certificate/aaopo_page-0004.jpg", alt: "Certification 2" },
  { src: "/certificate/aaopo_page-0005.jpg", alt: "Certification 2" },
  { src: "/certificate/certificate0001.jpg", alt: "Certification 2" },
  { src: "/certificate/certificate0002.jpg", alt: "Certification 2" },
  { src: "/certificate/certificate0003.jpg", alt: "Certification 2" },
  { src: "/certificate/certificate0004.jpg", alt: "Certification 2" },

  // Add more images as needed
];
const links = [
  "https://search.wdoms.org/home/SchoolDetail/F0006354",
  "https://www.ecfmg.org/certification-pathways/pathway-schools.php?country=KYRGYZSTAN&next=Submit",
  "https://aaopo.kg/en/international-accreditation-of-medical-universities/topic/262",
  "https://www.amc.org.au/check-eligible-medical-school-medical-degrees-and-graduation-years/",
  "https://www.ecfmg.org/certification-pathways/pathway-schools.php?country=KYRGYZSTAN&next=Submit",
  "https://whed.net/results_institutions.php",
  "https://whed.net/detail_institution.php?KDo2MF0sQ0RXLSMsYApgCg",
  "https://amse-med.eu/members-and-membership/members/",
];

const LicensesCertifications = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#001e60",
          color: "white",
          py: 12,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Licenses & Certifications
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {licensesCertifications.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Zoom>
                <img src={item.src} alt={item.alt} className={classes.image} />
              </Zoom>
            </Grid>
          ))}
        </Grid>
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
          Our Licenses & Certifications Links
        </Typography>

        <List
          sx={{
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 1,
          }}
        >
          {links.map((item, index) => (
            <ListItem component={Link} href={item} key={index} sx={{ borderBottom: "1px solid #e0e0e0" }}>
              <ListItemIcon>
                <AddLocationSharpIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default LicensesCertifications;
