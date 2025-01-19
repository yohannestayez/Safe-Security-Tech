import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import RouterIcon from '@mui/icons-material/Router';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Network Solutions',
    description: 'Advanced LAN/WAN setup, configuration, and maintenance services.',
    icon: RouterIcon,
  },
  {
    title: 'Data Centers',
    description: 'State-of-the-art data center design, implementation, and management.',
    icon: StorageIcon,
  },
  {
    title: 'Security Systems',
    description: 'Comprehensive security solutions including CCTV and access control.',
    icon: SecurityIcon,
  },
];

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: { xs: '300px', md: '400px' },
        borderRadius: 4,
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {/* Blur overlay container */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            right: '-10%',
            bottom: '-10%',
            filter: 'blur(20px)',
            transform: 'scale(1.2)',
            zIndex: 0,
            opacity: 0.7,
            overflow: 'hidden',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src={require('../images/video.mp4')} type="video/mp4" />
          </video>
        </Box>

        {/* Main video container */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 4,
            overflow: 'hidden',
            zIndex: 1,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src={require('../images/video.mp4')} type="video/mp4" />
          </video>
        </Box>

        {/* Gradient overlays for seamless blending */}
        <Box
          sx={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            right: '-20px',
            bottom: '-20px',
            background: `
              radial-gradient(circle at center, transparent 30%, rgba(18,18,18,0.3) 100%),
              linear-gradient(to right, rgba(18,18,18,0.8), transparent 20%, transparent 80%, rgba(18,18,18,0.8))
            `,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </Box>
  );
};

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          mt: '-64px', // Offset for navbar height
          pt: '64px', // Add padding to compensate for navbar
          background: theme => theme.palette.mode === 'light' 
            ? 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(245,245,245,1) 100%)'
            : 'linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,1) 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Background video for right side */}
        <Box
          sx={{
            position: 'absolute',
            top: '-50%',
            right: '-25%',
            width: '80%',
            height: '200%',
            overflow: 'hidden',
            filter: 'blur(8px)',
            opacity: theme => theme.palette.mode === 'light' ? 0.8 : 0.6,
            transform: 'scale(1.5)',
            zIndex: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: theme => theme.palette.mode === 'light'
                ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 100%)'
                : 'linear-gradient(90deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.2) 100%)',
            }
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src={require('../images/video.mp4')} type="video/mp4" />
          </video>
        </Box>

        <Container maxWidth="lg" sx={{ height: '100%', position: 'relative' }}>
          <Grid 
            container 
            spacing={0} 
            alignItems="center"
            sx={{
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              height: '100%',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Grid 
              item 
              xs={12} 
              md={5}
              sx={{
                pr: { md: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  color="primary"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  Securing Connections,
                  <br />
                  Powering Progress
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 4 }}
                >
                  Ethiopia's leading provider of advanced networking services and security solutions.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/contact"
                  sx={{
                    mr: 2,
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Contact Us
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="/services"
                  sx={{
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Our Services
                </Button>
              </motion.div>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={7}
              sx={{
                mt: { xs: 4, md: 0 },
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                pl: { md: 4 },
                justifyContent: { md: 'flex-end' },
              }}
            >
              <Box sx={{ 
                width: '100%', 
                height: '100%', 
                position: 'relative',
                zIndex: 2,
                ml: { md: 4 },
                mr: { md: -6 },
              }}>
                <VideoBackground />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        ref={ref}
        sx={{
          py: 8,
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Our Services
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              sx={{ mb: 6 }}
            >
              Comprehensive networking and security solutions for your business
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <service.icon
                        sx={{ fontSize: 60, color: 'primary.main' }}
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        align="center"
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        align="center"
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
