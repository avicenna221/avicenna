// components/AffiliatedHospitals.js
"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HospitalIcon from "@mui/icons-material/LocalHospital";
import { makeStyles } from "@mui/styles";
import Fade from "react-reveal/Fade";
import theme from "../theme";
import Link from "next/link";
import AddLocationSharpIcon from '@mui/icons-material/AddLocationSharp';
const useStyles = makeStyles(() => ({
  section: {
    backgroundColor: "#E6EFF8",
    padding: theme.spacing(8, 0),
    color:"black"
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    marginBottom: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  listItem2: {
    marginBottom: theme.spacing(2),
  
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
   
  },
  listItemIcon: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  listItemIcon2: {
      color: theme.palette.common.white,
    
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const hospitals = [
  "National Hospital",
  "National Center for Maternal and Child Health",
  "National Surgery Center",
  "National Center of Oncology and Hematology",
  "National Center of Cardiology and Therapy named after M. Mirrakhimov",
  "National Center of Physiology",
  "Republican Mental Health Center",
  "Republican Pathoanatomical Bureau",
  "Republican Center of Forensic Medical Examination",
  "Republican Clinical Infectious Diseases Hospital",
  "Kyrgyz National Research Institute of Balneology and Rehabilitation",
  "Multidisciplinary Clinical Emergency Hospital of Bishkek",
  "City Clinical Children's Emergency Hospital of Bishkek",
  "Chui Regional Center for Tuberculosis Control",
  "Zhaiyl Territorial Hospital of Chui region",
  "Сenter of Emergency Medicine of Bishkek",
  "Republican Center for Narcology and Psychiatry",
  "Family Medicine Center №4, 5 Bishkek",
  "City Gynecological Hospital №1, 2 Bishkek",
  "Dental Clinic N2, 3, 4, 5, 6 Bishkek",
  "City Clinical Hospital N1, 2 Bishkek",
  "Chui United Regional Hospital",
  "Republican Dermatovenerologic Dispensary",
  "Chui Regional Center of Family Medicine",
  "Center for State Sanitary and Epidemiological Surveillance of Bishkek",
  "Medical Clinic of the 'Avicenna' International Medical University 'Avicenna.kg' (Bishkek, Bakaeva Street, 106)",
  "Medical Clinic of the 'Avicenna' International Medical University 'Avicenna.kg' (Bishkek, Junusalieva Street, 83)",
  "Medical Clinic of the 'Avicenna' International Medical University 'Avicenna.kg' (Bishkek, Zhukeeva Pudovkina Street, 124)",
  "Medical Clinic of the 'Avicenna' International Medical University 'Avicenna.kg' (Bishkek, Suerkulova Street, 3g)",
  "Medical Clinic of the 'Avicenna' International Medical University 'Avicenna.kg' (Bishkek, Moscow Street, 136)",
  "Medical Clinic of the 'Avicenna' International Medical University 'MEDI' (Bishkek, Suerkulova Street, 5/3)",
];

const AffiliatedHospitals = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{
                      fontWeight: 800,
                      lineHeight: "1.2em",
                      color: "#382153",
                      paddingBottom:"20px"
                    }}>
          Affiliated Hospitals
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <List className={classes.list}>
            <Fade bottom >
              <ListItem  className={classes.listItem2}>
                <ListItemIcon className={classes.listItemIcon2}>
                  <HospitalIcon />
                </ListItemIcon>
                <ListItemText primary="Medical Clinic of the 'Avicenna' International Medical University 'Avicenna.kg'">
               
                </ListItemText>
              
              </ListItem>
            </Fade>
            <Fade bottom >
              <ListItem  className={classes.listItem2}>
                <ListItemIcon className={classes.listItemIcon2}>
                  <AddLocationSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Bakaeva 106">            
                </ListItemText>              
              </ListItem>
            </Fade>
            <Fade bottom >
              <ListItem  className={classes.listItem2}>
                <ListItemIcon className={classes.listItemIcon2}>
                  <AddLocationSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Dzhunusalieva 83">            
                </ListItemText>              
              </ListItem>
            </Fade>
            <Fade bottom >
              <ListItem  className={classes.listItem2}>
                <ListItemIcon className={classes.listItemIcon2}>
                  <AddLocationSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Zhukeeva Pudovkina 124">            
                </ListItemText>              
              </ListItem>
            </Fade>
            <Fade bottom >
              <ListItem  className={classes.listItem2}>
                <ListItemIcon className={classes.listItemIcon2}>
                  <AddLocationSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Tokombaeva 23/1
">            
                </ListItemText>              
              </ListItem>
            </Fade>
            <Fade bottom >
              <ListItem  className={classes.listItem2}>
                <ListItemIcon className={classes.listItemIcon2}>
                  <AddLocationSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Moskovskaya 136
">            
                </ListItemText>              
              </ListItem>
            </Fade>
            <Fade bottom >
              <ListItem  className={classes.listItem2}>
                <ListItemIcon className={classes.listItemIcon2}>
                  <AddLocationSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Bakaeva 106">            
                </ListItemText>              
              </ListItem>
            </Fade>
              {hospitals
                .slice(0, Math.ceil(hospitals.length / 2))
                .map((hospital, index) => (
                  <Fade bottom key={index}>
                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <HospitalIcon />
                      </ListItemIcon>
                      <ListItemText primary={hospital} />
                    </ListItem>
                  </Fade>
                ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <List className={classes.list}>
           
            <Fade bottom >
              <ListItem className={classes.listItem2}>
                <ListItemIcon className={classes.listItemIcon2}>
                  <HospitalIcon />
                </ListItemIcon>
                <ListItemText primary="Medical Clinic of the 'Avicenna' International Medical University 'MEDI' " />
              </ListItem>
            </Fade>
              {hospitals
                .slice(Math.ceil(hospitals.length / 2))
                .map((hospital, index) => (
                  <Fade bottom key={index}>
                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <HospitalIcon />
                      </ListItemIcon>
                      <ListItemText primary={hospital} />
                    </ListItem>
                  </Fade>
                ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AffiliatedHospitals;
