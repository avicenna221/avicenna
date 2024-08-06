// src/components/AdmissionOffice.js

import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const AdmissionOffice = ({ office }) => {
  return (
    <Paper
      sx={{
        padding: 2,
        marginBottom: 2,
        background:
          "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
        color: "#ffffff",
      }}
    >
      <Typography variant="h6">{office.city}</Typography>
      <Typography>{office.address}</Typography>
      <Typography>Email: {office.email}</Typography>
      <Typography>Phone: {office.phone}</Typography>
    </Paper>
  );
};

export default AdmissionOffice;
