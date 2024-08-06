// pages/about.js
"use client";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import { Fade } from "@mui/material";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import FAQ from "../components/faq/FAQ";
import AffiliatedHospitals from "../components/AffiliatedHospitals";
import Curriculum from "../components/Curriculum";
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#001e60",
  color: "#fff",
  padding: theme.spacing(10, 0),
  textAlign: "center",
}));

const HistorySection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const MissionVisionSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(10, 0),
  borderRadius:"15px"
}));

const About = () => {
  const [checked, setChecked] = useState(false);
  const staffData = [
    {
      name: "Dr. Temir Arapov",
      image: "/b3.jpg",
    },
    {
      name: "Builashev talaibek Sabralievich",
      image: "/b9.jpg",
    },
    {
      name: "Nasirova Svetlana Akbarovna",
      image: "/b8.jpg",
    },
    {
      name: "Kogaartbai Kyzy Akylai",
      image: "/b13.jpg",
    },
    {
      name: "Kogaartbai Kyzy Akylai",
      image: "/b2.jpg",
    },
    {
      name: "Kogaartbai Kyzy Akylai",
      image: "/b14.jpg",
    },
   
    // Add more staff members as needed
  ];
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <HeroSection>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6">
          Welcome to Avicenna International Medical University
        </Typography>
      </HeroSection>
      <Container sx={{ paddingBottom: "100px" }}>
        <HistorySection>
          <Fade in={checked} timeout={1000}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image="/building.JPG" // Replace with your image path
                  alt="University History"
                />
              </Grid>
              <Grid item xs={12} md={6}>
               
               
                    <Typography sx={{ color: "#000" }} variant="h5" gutterBottom>
                      Our Institute
                    </Typography>

                    <Typography sx={{ color: "#000" }} variant="body1" textAlign="justify">
                      Avicenna International Medical University was established
                      in 2019 and registered with the Ministry of Justice of the
                      Kyrgyz Republic at the address: Avenue shabdan batir 74
                      Bishkek city Kyrgyz Republic. Avicenna International
                      Medical University is listed in World Health Organization
                      Directory (W.H.O), Avicenna Directory, and FAIMER. Such
                      students holding medical qualifications are eligible for
                      the screening tests in any country of the world and
                      subsequent recognition of their degree.
                      <br></br>
                      <br></br>
                      The campus of Avicenna International Medical University is
                      extended over an area of 3 acres (approx.) of land
                      situated in the beautiful, calm and quiet, and well
                      communicated location of Bishkek city. Academic building
                      will have adequate facilities to teach the students with
                      its spacious lecture halls, well equipped laboratories,
                      sufficient number of tutorial room for small groups,
                      discussion room and a well-built dissection hall,
                      resourceful library with computer & internet facilities,
                      students’ common room and cafeteria.
                    </Typography>
                 
                 
              
              </Grid>
            </Grid>
          </Fade>
        </HistorySection>
        <Typography variant="h5" gutterBottom sx={{ color: "#000", }}>
                      High Quality Education
                    </Typography>
                    <Grid container spacing={4}>
        {staffData.map((staff, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minHeight: "350px" }}>
              <CardMedia
                component="img"
                height="300"
                image={staff.image}
                alt={staff.name}
              />
             
            </Card>
          </Grid>
        ))}
      </Grid>
                    <Typography variant="body1" textAlign="justify" sx={{ color: "#000",mb:5 }}>
                      Faculty is enriched with highly qualified, experienced and
                      dedicated teachers with academic, clinical and research
                      expertise. This College has been established with a view
                      to providing quality education and research opportunities
                      to teachers as well as students. Being an institution
                      equipped with enough facilities and intended to be the
                      best one of its kind, AIMU aims at excellence, integrity,
                      transparency, and accountability.
                      <br></br>
                      
                      <br></br>In this age of globalization since a College is
                      better known for cultivation of knowledge and research
                      activities, AIMU has decided to make the research work
                      obligatory for both the teachers and students alike.
                      Seminars and workshops are integral to College curriculum.
                      We arrange them on weekly and regular basis and the
                      participants include students, teachers and sometimes
                      eminent scholars from both home and abroad.
                    </Typography>
        
        <MissionVisionSection className="svg1">
          <Fade in={checked} timeout={1000}>
            <Box sx={{ padding: "20px", color: "#ffffff" }}>
              <Typography variant="h4" gutterBottom>
                Multicultural Environment
              </Typography>
              <Typography variant="body1" textAlign="justify" paragraph>
                Near about 50% of the students in AIMU are foreigners from
                different countries like Pakistan, Bangladesh, India, Russia,
                USA, Australia, Ukraine and Nepal. So Admission in AIMU
                facilitates opportunity to expose the students in multiple
                cultural environment which enriches their knowledge and
                experience.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Administrative Structure
              </Typography>
              <Typography variant="body1" textAlign="justify">
                Efficient administration of Avicenna International Medical
                University is capable of solving problems quickly and
                effectively. The Board of Directors, Governing Body, Academic
                Council, Disciplinary Committee and Departmental Heads take care
                of administrative and academic affairs. The top administrative
                team of BMC consists of some exceptionally talented
                personalities with national and international recognition.
              </Typography>
            </Box>
          </Fade>
        </MissionVisionSection>
        <Typography sx={{ color: "#000",mt:5,mb:5 }} textAlign="justify">
          The higher institution is meant for training qualified specialists in
          the medical sphere both for the Kyrgyz Republic and other countries of
          the world including Pakistan, India, Nepal, Nigeria, America, Turkey,
          Egypt, Somalia, Russia, and CIS countries (Kazakhstan, Uzbekistan,
          Tajikistan, etc.). Students are studying from 15 countries. More than
          8 batches have graduated and are currently working in their home
          countries such as Kyrgyzstan, Kazakhstan, Russia, Pakistan, India,
          Nepal, Tajikistan, Nigeria, Afghanistan, after clearing their
          respective licensing exams (NEB/NLE, MCI/NEXT, MDCN, USMLE, PLAB,
          etc.)
          <br></br>
          <br></br>
          There are doctors & candidates of medical science participating in the
          training process. The combination of utilization of modern training
          programs, technical material base, new training technologies, and
          qualified teachers promotes the improvement of training quality.
          Students will be taught not only on a clinical basis in Kant but also
          in Bishkek, the capital city. Many republican medical institutions and
          scientific centers are the clinical bases of the Avicenna medical
          university. Institute’s departments will be working out both the
          fundamental and applied research problems on medicine priority
          direction.
        </Typography>
        <Box sx={{ marginBottom: "150px", }}>
          <Curriculum />
          
        </Box>
        
        <AffiliatedHospitals />
        <Box mt={3}>
            <FAQ />
          </Box>
      </Container>
    </Box>
  );
};

export default About;
