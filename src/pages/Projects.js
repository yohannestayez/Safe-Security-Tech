import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Button,
  useTheme,
  Avatar,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SecurityCameraIcon from '@mui/icons-material/Videocam';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import BuildIcon from '@mui/icons-material/Build';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    clientName: 'Shebele Hotel',
    location: 'Addis Ababa',
    description: 'Successfully installed and configured 53 CCTV cameras throughout the hotel premises, ensuring comprehensive security coverage. The project included strategic camera placement, system integration, and staff training.',
    services: ['CCTV Installation', 'System Configuration', 'Staff Training'],
    outcomes: [
      'Complete coverage with 53 CCTV cameras',
      'Integrated security monitoring system',
      'Trained staff for system operation',
      'Enhanced guest and property security'
    ],
    testimonial: {
      text: 'Safe Security Technology and Network Engineering company demonstrated professionalism, technical expertise, and a strong commitment to quality. We are extremely satisfied with their services.',
      author: 'Towfik Maki',
      position: 'General Manager, Shebele Hotel'
    }
  },
  {
    id: 2,
    clientName: 'Chamber Printing House PLC',
    location: 'Addis Ababa',
    description: 'Implemented a comprehensive security solution featuring advanced IP camera systems, ensuring optimal surveillance coverage and system integration.',
    services: ['IP Camera Installation', 'System Integration', 'Technical Support'],
    outcomes: [
      'Installation of 4 IP cameras',
      'Seamless system integration',
      'Enhanced security monitoring',
      'On-time project delivery'
    ],
    testimonial: {
      text: 'Your company has been instrumental in providing us with the latest technology solutions and services that have helped us stay ahead of the competition.',
      author: 'Management Team',
      position: 'Chamber Printing House PLC'
    }
  },
  {
    id: 3,
    clientName: 'GIG Label Printing PLC',
    location: 'Addis Ababa',
    description: 'Designed and implemented a robust networking infrastructure combined with comprehensive security camera solutions to meet the clients specific requirements.',
    services: ['Network Infrastructure', 'IP Camera Installation', 'Ongoing Support'],
    outcomes: [
      'Complete network setup',
      'IP camera system installation',
      'Continuous technical support',
      'Enhanced operational efficiency'
    ],
    testimonial: {
      text: 'We are highly satisfied with the service provided and have no hesitation in recommending their networking and security solutions.',
      author: 'Management Team',
      position: 'GIG Label Printing PLC'
    }
  },
  {
    id: 4,
    clientName: 'Retail Business',
    location: 'Awassa',
    description: 'Executed a full security camera installation project across 400 sq. meters of retail space, optimizing camera placement for maximum coverage and security effectiveness.',
    services: ['Security System Design', 'Camera Installation', 'Coverage Optimization'],
    outcomes: [
      'Strategic camera placement',
      'Comprehensive coverage',
      'Optimized security monitoring',
      'Timely project completion'
    ],
    testimonial: {
      text: 'The team executed the project in a timely and proper manner, ensuring all our security needs were met.',
      author: 'Store Manager',
      position: 'Retail Business'
    }
  }
];

const Projects = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box 
      sx={{ 
        bgcolor: 'background.default',
        pt: { xs: 6, md: 8 },
        pb: { xs: 8, md: 12 },
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              component="h1"
              variant="h2"
              color="primary"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 3,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                  : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Our Projects
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
            >
              At Safe Security Technology and Network Engineering, we are proud to showcase our work and the partnerships we've built with clients across various industries.
            </Typography>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={project.id}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={theme.palette.mode === 'dark' ? 4 : 1}
                    sx={{
                      height: '100%',
                      p: 3,
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8],
                      },
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))'
                        : 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {/* Project Header */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h4" component="h2" gutterBottom color="primary">
                        {project.clientName}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="subtitle1" color="text.secondary">
                          {project.location}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Project Description */}
                    <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                      {project.description}
                    </Typography>

                    {/* Services */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom color="primary">
                        Services Provided
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.services.map((service, i) => (
                          <Chip
                            key={i}
                            label={service}
                            color="primary"
                            variant="outlined"
                            size="medium"
                            sx={{ 
                              borderRadius: '16px',
                              '& .MuiChip-label': {
                                px: 2
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Outcomes */}
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" gutterBottom color="primary">
                        Key Outcomes
                      </Typography>
                      <List dense>
                        {project.outcomes.map((outcome, i) => (
                          <ListItem key={i} sx={{ px: 0 }}>
                            <ListItemIcon>
                              <CheckCircleIcon color="success" />
                            </ListItemIcon>
                            <ListItemText 
                              primary={outcome}
                              primaryTypographyProps={{
                                variant: 'body1',
                                color: 'text.primary'
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    {/* Testimonial */}
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.02)',
                        borderRadius: 2,
                        position: 'relative'
                      }}
                    >
                      <FormatQuoteIcon 
                        sx={{ 
                          position: 'absolute',
                          top: -20,
                          left: 20,
                          color: 'primary.main',
                          fontSize: 40,
                          transform: 'rotate(180deg)'
                        }}
                      />
                      <Typography 
                        variant="body1" 
                        paragraph 
                        sx={{ 
                          fontStyle: 'italic',
                          mb: 2
                        }}
                      >
                        "{project.testimonial.text}"
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: 'primary.main',
                            mr: 2
                          }}
                        >
                          {project.testimonial.author[0]}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {project.testimonial.author}
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary">
                            {project.testimonial.position}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Box 
            sx={{ 
              textAlign: 'center',
              mt: 8,
              p: 6,
              borderRadius: 4,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(33, 203, 243, 0.1))'
                : 'linear-gradient(45deg, rgba(33, 150, 243, 0.05), rgba(33, 203, 243, 0.05))',
            }}
          >
            <Typography variant="h4" gutterBottom color="primary">
              Inspired by our work?
            </Typography>
            <Typography 
              variant="h6" 
              paragraph
              color="text.secondary"
              sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}
            >
              Let us help you achieve your goals with our innovative networking and security solutions.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '28px',
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976D2 30%, #00B8D4 90%)',
                }
              }}
            >
              Contact Us Today
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
