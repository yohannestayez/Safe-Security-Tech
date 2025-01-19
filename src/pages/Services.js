import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import RouterIcon from '@mui/icons-material/Router';
import SecurityCameraIcon from '@mui/icons-material/Videocam';
import StorageIcon from '@mui/icons-material/Storage';
import SupportIcon from '@mui/icons-material/Support';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import CloudIcon from '@mui/icons-material/Cloud';
import DevicesIcon from '@mui/icons-material/Devices';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FactoryIcon from '@mui/icons-material/Factory';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Services = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Network Design & Installation',
      description: 'Comprehensive networking solutions tailored for businesses of all sizes.',
      icon: RouterIcon,
      details: [
        'Custom network architecture design',
        'Professional installation services',
        'Regular maintenance and updates',
        'Performance optimization',
      ],
    },
    {
      title: 'CCTV & Security Solutions',
      description: 'Advanced surveillance and security systems for enhanced protection.',
      icon: SecurityCameraIcon,
      details: [
        'HD CCTV installation',
        'Smart monitoring systems',
        'IoT integration',
        '24/7 surveillance capabilities',
      ],
    },
    {
      title: 'Data Center Solutions',
      description: 'State-of-the-art data center design and implementation.',
      icon: StorageIcon,
      details: [
        'Custom data center design',
        'Equipment procurement',
        'Installation and configuration',
        'Maintenance services',
      ],
    },
    {
      title: 'IT Support Services',
      description: 'Professional IT support for smooth business operations.',
      icon: SupportIcon,
      details: [
        'Help desk support',
        'System maintenance',
        'Software updates',
        'Technical consulting',
      ],
    },
  ];

  const markets = [
    { title: 'SMEs', icon: BusinessIcon },
    { title: 'Educational Institutions', icon: SchoolIcon },
    { title: 'Government Agencies', icon: StorageIcon },
    { title: 'Corporate Offices', icon: BusinessIcon },
    { title: 'Hospitals', icon: LocalHospitalIcon },
    { title: 'Industries', icon: FactoryIcon },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              mb: 4,
              color: 'primary.main',
              fontWeight: 'bold',
            }}
          >
            Services & Products
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 2 }}
          >
            No Limits, Just Solutions
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
          >
            Safe Security Technology and Network Engineering provides innovative, reliable, and cost-effective solutions
            to meet the growing demands of Ethiopia's IT and networking industry. Our comprehensive range of services
            and products is designed to empower your business with cutting-edge technology solutions.
          </Typography>
        </motion.div>

        {/* Main Services */}
        <Box ref={ref} sx={{ my: 8 }}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'background.paper',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 24px rgba(33, 150, 243, 0.1)',
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <service.icon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                        <Typography variant="h5" component="h2">
                          {service.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {service.description}
                      </Typography>
                      <List>
                        {service.details.map((detail, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <NetworkCheckIcon sx={{ color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText primary={detail} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Target Market */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h3" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
            Who We Serve
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {markets.map((market, index) => (
              <Grid item key={index}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                >
                  <Chip
                    icon={<market.icon />}
                    label={market.title}
                    sx={{
                      bgcolor: 'background.paper',
                      color: 'text.primary',
                      '& .MuiChip-icon': {
                        color: 'primary.main',
                      },
                      px: 2,
                      py: 3,
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Industry Analysis */}
        <Box sx={{ my: 8 }}>
          <Card
            sx={{
              bgcolor: 'background.paper',
              p: 4,
            }}
          >
            <Typography variant="h4" gutterBottom color="primary">
              Why Choose Us
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <DevicesIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Personalized Services
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tailored solutions that address the unique needs of each client
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <CloudIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Innovation-Focused
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Commitment to staying ahead with cutting-edge solutions
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <NetworkCheckIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Competitive Pricing
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cost-effective solutions balancing quality and affordability
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>

        {/* Call to Action */}
        <Grid item xs={12}>
          <Card
            sx={{
              p: 4,
              textAlign: 'center',
              bgcolor: 'background.paper',
              boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}`,
            }}
          >
            <Typography variant="h4" color="primary" gutterBottom>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Contact us today to discuss your network security needs and get a customized solution for your business.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 2,
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
              }}
            >
              Contact Us Now
            </Button>
          </Card>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
