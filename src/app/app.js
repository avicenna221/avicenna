"use client"
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function MyApp({ childrens }) {
  return (
    <ThemeProvider theme={theme}>
      {childrens}
    </ThemeProvider>
  );
}

export default MyApp;
