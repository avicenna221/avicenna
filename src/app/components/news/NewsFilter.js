import React from 'react';
import { Box, TextField, MenuItem, Grid } from '@mui/material';

const topics = [
  'All Topics',
  'Research',
  'Events',
  'Announcements',
  'Student Life',
];

const tags = [
  'All Tags',
  'Health',
  'Technology',
  'Education',
  'Science',
];

const NewsFilter = ({ searchQuery, setSearchQuery, selectedTopic, setSelectedTopic, selectedTag, setSelectedTag,data }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <TextField
            fullWidth
            label="Search News"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={12} >
          <TextField
            select
            fullWidth
            label="Filter by Topic"
            variant="outlined"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            {topics.map((topic, index) => (
              <MenuItem key={index} value={topic}>
                {topic}
              </MenuItem>
            ))}
          </TextField>
        </Grid> */}
        <Grid item xs={12} >
          <TextField
            select
            fullWidth
            label="Filter by Category"
            variant="outlined"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            {tags.map((tag, index) => (
              <MenuItem key={index} value={tag}>
                {tag}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsFilter;
