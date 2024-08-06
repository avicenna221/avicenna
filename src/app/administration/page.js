"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import HeroSection from '../components/hero section/HeroSection';
const AcademicStaff = dynamic(() => import('../components/staff/AcademicStaff'), {
  ssr: false,
});
import DeansMessage from '../administration-message/deans-message/DeansMessage';
import RectorMessage from '../administration-message/rector-message/RectorMessage';
import ViceRectorMessage from '../administration-message/vice-rector-message/ViceRectorMessage';
import Image from 'next/image';
import ViseDean from '../administration-message/vise-dean-message/ViseDean';


const theme = createTheme({
  palette: {
    primary: {
      main: '#001e60',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default function StaffPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroSection />
      <RectorMessage/>
      <ViceRectorMessage/>
      <DeansMessage/>
      <ViseDean/>
      <AcademicStaff />
    </ThemeProvider>
  );
}
