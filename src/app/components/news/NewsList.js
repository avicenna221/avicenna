import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Link, IconButton, Popover, List, ListItem } from '@mui/material';
import { ThumbUp, Share } from '@mui/icons-material';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const newsData = [
  {
    title: 'New Research on Heart Diseases',
    shortDis:"Coronary artery disease is a common heart condition that affects the major blood vessels that supply the heart muscle...",
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
  {
    title: 'University Labortary',
    shortDis:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin...",
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    image: '/banner2.jpg',
    topic: 'Events',
    tags: ['Education', ],
    slug: 'university-labortary',
    postedDate: '2023-02-15',
    postedBy: 'Jane Smith',
  },
  // Add more news items here...
];

const NewsList = ({ searchQuery, selectedTopic, selectedTag, currentPage, itemsPerPage,data,loading }) => {
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

  const filteredNews = data.filter((news) => {
    return (
      
      (selectedTag === 'All Tags' || news.blogCategory.includes(selectedTag)) &&
      (searchQuery === '' || news.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const paginatedNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={4}>

        {paginatedNews.map((news, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: 'flex' }}>
            {news.bannerPhoto!=null?<CardMedia
                component="img"
                sx={{ width: 150 }}
                image={news.bannerPhoto.url}
                alt={news.title}
              />:null}
              
              <CardContent sx={{ flex: 1 }}>
                <Link href={`/news/feed/${news._id}`} underline="none">
                  <Typography variant="h6" component="div">
                    {news.title}
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
               
                  {news.description.substring(0, 260) + '...'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Posted on {news.postedDate} by {news.postedBy}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  {/* <IconButton aria-label="like">
                    <ThumbUp />
                  </IconButton>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    Like
                  </Typography> */}
                  <IconButton aria-label="share" onClick={(event) => handleShareClick(event, `https://yourwebsite.com/news/feed/${news.slug}`)}>
                    <Share />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List>
          <ListItem>
            <FacebookShareButton url={shareUrl} style={{ marginRight: '10px' }}>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </FacebookShareButton>
            <Typography>Facebook</Typography>
          </ListItem>
          <ListItem>
            <TwitterShareButton url={shareUrl} style={{ marginRight: '10px' }}>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </TwitterShareButton>
            <Typography>Twitter</Typography>
          </ListItem>
          <ListItem>
            <WhatsappShareButton url={shareUrl} style={{ marginRight: '10px' }}>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </WhatsappShareButton>
            <Typography>Whatsapp</Typography>
          </ListItem>
        </List>
      </Popover>
    </Box>
  );
};

export default NewsList;
export { newsData };
