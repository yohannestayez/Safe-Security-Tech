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
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FocusIcon from '@mui/icons-material/CenterFocusStrong';
import InnovationIcon from '@mui/icons-material/Lightbulb';
import IntegrityIcon from '@mui/icons-material/Security';
import ExcellenceIcon from '@mui/icons-material/Star';
import CustomerIcon from '@mui/icons-material/People';
import AdaptabilityIcon from '@mui/icons-material/Refresh';
import AccountabilityIcon from '@mui/icons-material/VerifiedUser';
import CostEfficiencyIcon from '@mui/icons-material/MonetizationOn';
import ServiceIcon from '@mui/icons-material/Engineering';
import CommunityIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';
import ImageGallery from '../components/ImageGallery';

const AboutUs = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const coreValues = [
    { title: 'Customer Focus', description: 'Delivering tailored solutions and building lasting relationships.', icon: FocusIcon },
    { title: 'Innovation', description: 'Embracing new technologies to stay ahead.', icon: InnovationIcon },
    { title: 'Integrity', description: 'Acting with honesty and accountability.', icon: IntegrityIcon },
    { title: 'Excellence', description: 'Consistently exceeding expectations.', icon: ExcellenceIcon },
  ];

  const principles = [
    { title: 'Customer-Centric Approach', description: 'Prioritizing client needs with tailored solutions and exceptional service.', icon: CustomerIcon },
    { title: 'Innovation and Adaptability', description: 'Staying ahead with cutting-edge solutions and adapting to market needs.', icon: AdaptabilityIcon },
    { title: 'Accountability and Reliability', description: 'Building trust by consistently delivering on commitments.', icon: AccountabilityIcon },
    { title: 'Cost-Efficiency for Local Context', description: 'Offering affordable solutions without compromising quality.', icon: CostEfficiencyIcon },
    { title: 'Excellence in Service Delivery', description: 'Ensuring high-quality services through training, quality control, and attention to detail.', icon: ServiceIcon },
    { title: 'Community Development', description: 'Supporting local talent and contributing to Ethiopia\'s IT industry growth.', icon: CommunityIcon },
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
        {/* Introduction Section */}
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
            About Safe Security
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            No Limits, Just Solutions
          </Typography>

          <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
            Safe Security Technology and Network Engineering specializes in delivering reliable, innovative, and cost-effective networking solutions. We are committed to revolutionizing Ethiopia's IT and networking industry by bridging the technology gap with top-notch services and products.
          </Typography>
        </motion.div>

        {/* Vision & Mission Section */}
        <Box ref={ref} sx={{ my: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
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
                    <Typography variant="h4" component="h2" gutterBottom color="primary">
                      Our Vision
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      To become the leading provider of networking services and equipment in Ethiopia, setting benchmarks for quality and innovation.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
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
                    <Typography variant="h4" component="h2" gutterBottom color="primary">
                      Our Mission
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      To provide reliable, innovative, and cost-effective networking solutions that empower businesses to achieve their goals.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Core Values Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h3" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
            Core Values
          </Typography>
          <Grid container spacing={4}>
            {coreValues.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                      <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <value.icon sx={{ fontSize: 40, color: 'primary.main' }} />
                      </Box>
                      <Typography variant="h6" component="h3" gutterBottom align="center">
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Company Principles Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h3" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
            Our Principles
          </Typography>
          <Grid container spacing={4}>
            {principles.map((principle, index) => (
              <Grid item xs={12} sm={6} key={index}>
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
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <principle.icon sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="h6" component="h3" gutterBottom>
                                {principle.title}
                              </Typography>
                            }
                            secondary={
                              <Typography variant="body2" color="text.secondary">
                                {principle.description}
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Key Highlights Section */}
        <Box sx={{ my: 8 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Typography variant="h3" gutterBottom align="center" color="primary">
              Key Highlights
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
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
                      <Typography variant="h6" gutterBottom color="primary">
                        Company Structure & Location
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <BusinessIcon sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Legal Structure"
                            secondary="Solo Company (PLC)"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <LocationOnIcon sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Location"
                            secondary="Addis Ababa, Ethiopia"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <VerifiedIcon sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Registration"
                            secondary="Fully licensed and registered under Ethiopian business laws"
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
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
                      <Typography variant="h6" gutterBottom color="primary">
                        Key Achievements
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Successful Projects"
                            secondary="Completion of several successful networking projects for SMEs"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <HandshakeIcon sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Strategic Partnerships"
                            secondary="Partnerships with reputable equipment suppliers"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <SchoolIcon sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Team Development"
                            secondary="Certification and technical training for team members"
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        {/* Image Gallery Section */}
        <Box component="section" sx={{ my: 8 }}>
          <ImageGallery />
        </Box>

        {/* Closing Statement */}
        <Box sx={{ my: 8 }}>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Typography variant="body1" paragraph align="center" color="text.secondary">
              At Safe Security Technology and Network Engineering, we are dedicated to delivering exceptional value to our clients while contributing to the growth and sustainability of Ethiopia's networking industry. Our commitment to excellence, innovation, and community development drives us to continuously improve and expand our services, ensuring that we remain at the forefront of technological advancement in the region.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
