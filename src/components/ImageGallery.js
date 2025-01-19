import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Modal,
  IconButton,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { motion } from 'framer-motion';

const ImageGallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const importAll = (r) => r.keys().map(r);
      const context = require.context('../images', false, /\.(png|jpe?g|svg)$/);
      const importedImages = importAll(context);
      setImages(importedImages);
      if (importedImages.length === 0) {
        setError('No images found in the images folder.');
      }
    } catch (err) {
      setError('Please create an "images" folder in the src directory and add some images.');
    }
  }, []);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const getColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h2"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Our Gallery
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Explore our work through these images showcasing our projects and achievements.
        </Typography>
      </Box>

      {error ? (
        <Alert severity="info" sx={{ mb: 4 }}>
          {error}
        </Alert>
      ) : images.length > 0 ? (
        <Box
          sx={{
            maxHeight: '600px',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: theme.palette.background.paper,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme.palette.primary.main,
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            },
          }}
        >
          <ImageList
            variant="masonry"
            cols={getColumns()}
            gap={24}
            sx={{
              mb: 2,
              pr: 2,
              '& .MuiImageListItem-root': {
                overflow: 'hidden',
                borderRadius: 2,
              },
            }}
          >
            {images.map((image, index) => (
              <ImageListItem
                key={index}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleImageClick(image, index)}
                sx={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: 2,
                  '&:hover': {
                    boxShadow: `0 0 20px ${theme.palette.primary.main}20`,
                  },
                }}
              >
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ) : (
        <Alert severity="info" sx={{ mb: 4 }}>
          Loading images...
        </Alert>
      )}

      {/* Modal for full-screen view */}
      <Modal
        open={Boolean(selectedImage)}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: -40,
              top: -40,
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
          
          {images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: -50,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <NavigateBeforeIcon />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: -50,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <NavigateNextIcon />
              </IconButton>
            </>
          )}

          <img
            src={selectedImage}
            alt=""
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default ImageGallery;
