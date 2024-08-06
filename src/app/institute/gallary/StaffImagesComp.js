// pages/gallery.js
"use client"
import { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, Modal, Backdrop, Fade, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#001e60',
  color: '#fff',
  padding: theme.spacing(10, 0),
  textAlign: 'center',
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

const GallerySection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const images = [
    "/assets/staf/t1.jpg",
    "/assets/staf/t2.jpg",
    "/assets/staf/t8.jpg",
    "/assets/staf/t4.jpg",
    "/assets/staf/t5.jpg",
    "/assets/staf/t6.jpg",
];

const itemData = images.map((image, index) => ({
  img: image,
  title: `Image ${index + 1}`,
  rows: index % 3 === 0 ? 2 : 1,
  cols: index % 4 === 0 ? 2 : 1,
}));

const StaffImagesComp = () => { const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleOpen = (index) => {
      setSelectedImage(images[index]);
      setCurrentIndex(index);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setSelectedImage(null);
    };
  
    const handlePrev = () => {
      const newIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    };
  
    const handleNext = () => {
      const newIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    };
  
    return (
      <div>
     
  
        <GallerySection>
          <Typography variant="h4" gutterBottom>Staff Images</Typography>
          <Zoom>
            <ImageList variant="quilted" cols={4} rowHeight={121}>
              {itemData.map((item, index) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} onClick={() => handleOpen(index)} style={{ cursor: 'pointer' }}>
                  <img
                    src={`${item.img}?w=${item.cols * 121}&h=${item.rows * 121}&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=${item.cols * 121}&h=${item.rows * 121}&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Zoom>
        </GallerySection>
      
  
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 500 }}
        >
          <Fade in={open}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                outline: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconButton
                sx={{ position: 'absolute', top: 16, right: 16 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <IconButton
                sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }}
                onClick={handlePrev}
              >
                <ArrowBackIcon />
              </IconButton>
              <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
              <IconButton
                sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}
                onClick={handleNext}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  };

export default StaffImagesComp