import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupportIcon from '@mui/icons-material/Support';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StarIcon from '@mui/icons-material/Star';

const Experts = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Yibeltal Ayalew',
      role: 'General Manager',
      description: 'Leading Safe Security Technology with a vision to become Ethiopia\'s premier networking solutions provider.',
      icon: PersonIcon,
      highlights: [
        'Strategic leadership',
        'Industry expertise',
        'Innovation-driven approach',
      ],
    },
    {
      name: 'Technical Lead',
      role: 'Head of Technical Operations',
      description: 'Ensuring excellence in technical service delivery and team performance.',
      icon: EngineeringIcon,
      highlights: [
        'CCNA certified',
        'Project management',
        'Quality assurance',
      ],
    },
  ];

  const teamStrengths = [
    {
      title: 'Certified Engineers',
      description: 'Our team includes CCNA certified professionals with extensive experience in network design and implementation.',
      icon: VerifiedIcon,
    },
    {
      title: 'Continuous Learning',
      description: 'Regular training and certification programs to stay updated with the latest technologies.',
      icon: SchoolIcon,
    },
    {
      title: 'Collaborative Approach',
      description: 'Strong teamwork and communication ensure efficient project delivery and client satisfaction.',
      icon: GroupsIcon,
    },
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
            Our Experts
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
          >
            Our team of dedicated professionals is the cornerstone of our success in delivering innovative,
            secure, and cost-effective networking solutions. With extensive experience and technical expertise,
            we work together to exceed our clients' expectations and drive technological advancement in Ethiopia.
          </Typography>
        </motion.div>

        {/* Management Team */}
        <Box ref={ref} sx={{ my: 8 }}>
          <Typography variant="h3" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
            Leadership Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
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
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          sx={{
                            bgcolor: 'primary.main',
                            width: 80,
                            height: 80,
                            mr: 2,
                          }}
                        >
                          <member.icon sx={{ fontSize: 40 }} />
                        </Avatar>
                        <Box>
                          <Typography variant="h5" gutterBottom>
                            {member.name}
                          </Typography>
                          <Typography variant="subtitle1" color="primary">
                            {member.role}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" paragraph color="text.secondary">
                        {member.description}
                      </Typography>
                      <List>
                        {member.highlights.map((highlight, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <StarIcon sx={{ color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText primary={highlight} />
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

        {/* Organizational Structure */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h3" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
            Organizational Structure
          </Typography>
          <Card
            sx={{
              bgcolor: 'background.paper',
              p: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <AccountTreeIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <PersonIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="h6" gutterBottom>
                      General Manager
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Strategic direction & leadership
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <EngineeringIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="h6" gutterBottom>
                      Technical Lead
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Technical operations & quality
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <GroupsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="h6" gutterBottom>
                      Network Engineers
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Implementation & maintenance
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <SupportIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="h6" gutterBottom>
                      Support Team
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Client service & assistance
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>

        {/* Team Strengths */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h3" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
            Our Strengths
          </Typography>
          <Grid container spacing={4}>
            {teamStrengths.map((strength, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                        <strength.icon sx={{ fontSize: 48, color: 'primary.main' }} />
                      </Box>
                      <Typography variant="h6" align="center" gutterBottom>
                        {strength.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        {strength.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            my: 8,
            textAlign: 'center',
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom color="primary">
            Work With Our Expert Team
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
            Our team is here to provide you with the best networking and security solutions.
            Contact us today to learn how we can support your business needs.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Experts;
