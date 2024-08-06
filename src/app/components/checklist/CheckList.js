import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Container, Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CheckList = () => {
  const items = [
    'To maintain the honor, dignity and to uphold the prestige and to foster cordial relationship with administration, teachers, students and authorities.',
    'To cultivate and promote medical and allied sciences including improvement of public health and medical education nationally & internationally.',
    'To strengthen the bonds of co-operation and fellowship amongst all the graduates of the medical institute.',
    'To look after the interests of the ex-students of the Institution and to maintain and strengthen the fraternal relationship amongst them.',
    
  ];

  return (
    <Container >
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Purpose
        </Typography>
        <List sx={{ bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 1 }}>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #e0e0e0' }}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default CheckList;
