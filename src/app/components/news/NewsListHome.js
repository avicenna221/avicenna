import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Link, IconButton, Popover, List, ListItem, Container } from '@mui/material';

import { getRequest } from '@/app/RequestsAPI/RequestsApi';

const newsData = [
  {
    title: 'New Research on Heart Diseases',
    shortDis:"Coronary artery disease is a common heart condition that affects the major blood vessels that supply...",
    description: "Coronary artery disease is a common heart condition that affects the major blood vessels that supply the heart muscle. Cholesterol deposits (plaques) in the heart arteries are usually the cause of coronary artery disease. The buildup of these plaques is called atherosclerosis (ath-ur-o-skluh-ROE-sis). Atherosclerosis reduces blood flow to the heart and other parts of the body. It can lead to a heart attack, chest pain (angina) or stroke. Coronary artery disease symptoms may be different for men and women. For instance, men are more likely to have chest pain. Women are more likely to have other symptoms along with chest discomfort, such as shortness of breath, nausea and extreme fatigue. Symptoms of coronary artery disease can include:",
    image: '/assets/news/heartDisease.jpg',
    topic: 'Research',
    tags: ['Health', 'Science'],
    slug: 'new-research-on-heart-diseases',
    postedDate: '2023-05-01',
    postedBy: 'Dr. John Doe',
  },
  {
    title: 'Upcoming Annual Science Fair',
    shortDis:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    image: '/banner.jpg',
    topic: 'Events',
    tags: ['Education', 'Technology'],
    slug: 'upcoming-annual-science-fair',
    postedDate: '2023-04-15',
    postedBy: 'Jane Smith',
  },
  {
    title: 'Labs Training',
    shortDis:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    image: '/b3.jpg',
    topic: 'Events',
    tags: ['Education', 'Technology'],
    slug: 'labs-training',
    postedDate: '2023-03-15',
    postedBy: 'Jane Smith',
  },
 
  // Add more news items here...
];

const NewsListHome = () => {
  const [data, setData] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const data = await getRequest("/api/blogs/latest-blogs");
    if (data.status == 200) {
      setData(data.data.Data);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getData();
  }, [])
  const [anchorEl, setAnchorEl] = useState(null);
  const [shareUrl, setShareUrl] = useState('');

  const handleShareClick = (event, url) => {
    setAnchorEl(event.currentTarget);
    setShareUrl(url);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'share-popover' : undefined;



  return (
    <Box sx={{ mt: 4,p:4 }}>
      <Grid container spacing={4}>
        {data.map((news, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card >
            {news.bannerPhoto!=null?<CardMedia
                component="img"
                sx={{ width: 150 }}
                image={news.bannerPhoto.url}
                alt={news.title}
              />:null}
              
              <CardContent sx={{ flex: 1 }}>
                <Link href={`/news/feed/${news.slug}`} underline="none">
                  <Typography variant="h6" component="div">
                    {news.title}
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                {news.description.substring(0, 260) + '...'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Posted on {new Date(news.createdAt).toDateString()} by admin
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  {/* <IconButton aria-label="like">
                    <ThumbUp />
                  </IconButton>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    Like
                  </Typography> */}
                  
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
};

export default NewsListHome;
export { newsData };
