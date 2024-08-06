// pages/Alumni.js
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
import CheckList from "../components/checklist/CheckList";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
}));

const StaffSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const Alumni = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div>
      <HeroSection>
        <Typography variant="h2" gutterBottom>
          Alumni and Friends
        </Typography>
        <Typography variant="h6">
          Welcome to Avicenna International Medical University
        </Typography>
      </HeroSection>
      <Container sx={{ marginBottom: "50px" }}>
        <Fade in={checked} timeout={1000}>
          <Box
            container
            mt={5}
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "center",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Box
              component={Link}
              href="/alumni/association"
              item
              p={3}
              sx={{
                background:
                  "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
                cursor: "pointer",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" textAlign="center" color="white">
                Alumni Association
              </Typography>
              <KeyboardArrowRightIcon style={{ color: "#ffffff" }} />
            </Box>
            <Box
              component={Link}
              href="/alumni/graduate-oath"
              item
              p={3}
              sx={{
                background:
                  "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
                cursor: "pointer",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" textAlign="center" color="white">
                Avicenna Graduate Oath
              </Typography>
              <KeyboardArrowRightIcon style={{ color: "#ffffff" }} />
            </Box>
          </Box>
        </Fade>
        <HistorySection>
          <Fade in={checked} timeout={1000}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Our Alumni
                    </Typography>

                    <Typography variant="body1">
                      We’ve taught some of the most remarkable individuals from
                      all over the world who have gone on to have successful
                      careers. As part of our unique and global alumni
                      community, you have a number of benefits and opportunities
                      available to you.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="body1">
                      Avicenna International Medical University is extremely
                      proud of its alumni. Over the years as the institution has
                      evolved from a chiropractic training college to a health
                      science focused University College, we have supported and
                      championed our alumni from around the world.
                      <br></br>
                      All former students of Avicenna, or its predecessor
                      institution, Anglo-European College of Chiropractic, are
                      automatically members, it is a great way to keep in touch
                      with each other and find out the latest news from the
                      University College.
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Exposure to Patients
                    </Typography>

                    <Typography variant="body1">
                      Students are exposing to patients in indoor, outdoor and
                      emergency department as a part of their regular clinical
                      teaching and learning process. This allows students an
                      opportunity to practice communication, interviewing and
                      data gathering skills, as well as physical examination and
                      patient assessment techniques in rural and urban
                      population.
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Mentoring
                    </Typography>

                    <Typography variant="body1">
                      Every students from the first year are assigned to a
                      particular teacher for mentoring. The mentor monitors the
                      selected student up to final year and help him/her to
                      overcome the academic or others problems even some extent
                      of personal also.
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Affordable tuition Fee
                    </Typography>

                    <Typography variant="body1">
                      Tuition Fees of MBBS course both Local as well as foreign
                      students are lower than any other Medical Universities in
                      the country and abroad.{" "}
                    </Typography>
                  </CardContent>
                  ````````````
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image="/cap.JPG" // Replace with your image path
                  alt="University History"
                />
              </Grid>
            </Grid>
          </Fade>
        </HistorySection>

        <CheckList />
      </Container>
    </div>
  );
};

export default Alumni;
