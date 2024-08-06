"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

import { useEffect, useState } from "react";
import Layout from "../Layout";
// material-ui
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { getRequest } from "@/app/RequestsAPI/RequestsApi";

// project imports

// meta export
export const meta = () => ({
  title: "Dashboard | Berry - React Material Admin Dashboard Template",
  description:
    "Start your next React project with Berry admin template. It build with Reactjs, Material-UI, Redux, and Hook for faster web development.",
});

export default function Dashboard() {
  const [data, setData] = useState([]);
  console.log("dada", data);

  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const data = await getRequest("/api/dashboard-data");
    if (data.status == 200) {
      setData(data.data.Data);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <Layout>
      <Box minHeight="100vh">
      {loading == true ? (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Skeleton variant="rounded" width="100%" height={100} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skeleton variant="rounded" width="100%" height={100} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skeleton variant="rounded" width="100%" height={100} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skeleton variant="rounded" width="100%" height={100} />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={6} mt={2} p={3}>
          <Grid item xs={12} md={6}  >
              <Box p={3} sx={{
                background:
                  "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
                cursor: "pointer",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                gap:3,
                alignItems: "center",
              }}>
              <Typography variant="h4" color="white">
              Total Appliactions
            </Typography>
           
            <Typography variant="h3" color="white">
            {data.applications}
            </Typography>
              </Box>
            
          </Grid>
          <Grid item xs={12} md={6}  >
              <Box p={3} sx={{
                background:
                  "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
                cursor: "pointer",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                gap:3,
                alignItems: "center",
              }}>
              <Typography variant="h4" color="white">
              Total News
            </Typography>
           
            <Typography variant="h3" color="white">
            {data.blogs}
            </Typography>
              </Box>
            
          </Grid>
          <Grid item xs={12} md={6}  >
              <Box p={3} sx={{
                background:
                  "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
                cursor: "pointer",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                gap:3,
                alignItems: "center",
              }}>
              <Typography variant="h4" color="white">
              Total Publications
            </Typography>
           
            <Typography variant="h3" color="white">
            {data.publications}
            </Typography>
              </Box>
            
          </Grid>
          <Grid item xs={12} md={6}  >
              <Box p={3} sx={{
                background:
                  "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
                cursor: "pointer",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                gap:3,
                alignItems: "center",
              }}>
              <Typography variant="h4" color="white">
              Total Contacts
            </Typography>
           
            <Typography variant="h3" color="white">
              {data.contacts}
            </Typography>
              </Box>
            
          </Grid>
        
        </Grid>
      )}
      </Box>
      
    </Layout>
  );
}
