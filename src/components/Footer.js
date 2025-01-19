import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  const services = [
    'Network Design & Installation',
    'CCTV & Security Solutions',
    'Data Center Solutions',
    'IT Support Services',
  ];

  const quickLinks = [
    { text: 'About Us', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Our Experts', path: '/experts' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        position: 'relative',
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(0deg, rgba(18,18,18,0.4) 0%, rgba(18,18,18,0) 100%)',
          zIndex: -1,
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Safe Security Technology
            </Typography>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Securing Connections, Powering Progress
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Ethiopia's leading provider of advanced networking services and security solutions.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                component={Link}
                href="https://linkedin.com"
                target="_blank"
                color="primary"
                size="small"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component={Link}
                href="https://facebook.com"
                target="_blank"
                color="primary"
                size="small"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component={Link}
                href="https://twitter.com"
                target="_blank"
                color="primary"
                size="small"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Our Services
            </Typography>
            <List dense>
              {services.map((service, index) => (
                <ListItem
                  key={index}
                  component={RouterLink}
                  to="/services"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <Typography variant="body2">{service}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact Us
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link
                      href="tel:+251913796382"
                      color="text.secondary"
                      sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      +251913796382
                    </Link>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link
                      href="mailto:safesectec@gmail.com"
                      color="text.secondary"
                      sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      safesectec@gmail.com
                    </Link>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" color="text.secondary">
                      Addis Ababa, Ethiopia
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12}>
            <Box
              sx={{
                pt: 3,
                mt: 3,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                &copy; {new Date().getFullYear()} Safe Security Technology. All rights reserved.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  mt: { xs: 2, sm: 0 },
                }}
              >
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to={link.path}
                    color="text.secondary"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    <Typography variant="body2">{link.text}</Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
