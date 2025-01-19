import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'Contact Form Submission',
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message. We will get back to you soon!',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'An error occurred. Please try again later.',
      });
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      primary: 'Phone',
      secondary: '+251913796382',
      link: 'tel:+251913796382',
    },
    {
      icon: EmailIcon,
      primary: 'Email',
      secondary: 'safesectec@gmail.com',
      link: 'mailto:safesectec@gmail.com',
    },
    {
      icon: LocationOnIcon,
      primary: 'Address',
      secondary: 'Addis Ababa, Ethiopia',
      link: 'https://maps.google.com/?q=Addis+Ababa,Ethiopia',
    },
    {
      icon: AccessTimeIcon,
      primary: 'Working Hours',
      secondary: 'Monday - Friday: 9:00 AM - 6:00 PM',
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
            Contact Us
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
          >
            We're here to answer your questions and help you find the perfect solution for your business.
            Whether you have a query about our services or want to discuss a project, our team is ready to assist you.
          </Typography>
        </motion.div>

        <Grid container spacing={4} ref={ref}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'background.paper',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(33, 150, 243, 0.1)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary">
                    Get in Touch
                  </Typography>
                  <List>
                    {contactInfo.map((info, index) => (
                      <ListItem
                        key={index}
                        component={info.link ? 'a' : 'div'}
                        href={info.link}
                        target={info.link?.startsWith('http') ? '_blank' : undefined}
                        rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        sx={{
                          py: 2,
                          color: 'text.primary',
                          textDecoration: 'none',
                          '&:hover': {
                            bgcolor: 'rgba(33, 150, 243, 0.08)',
                          },
                        }}
                      >
                        <ListItemIcon>
                          <info.icon sx={{ color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={info.primary}
                          secondary={info.secondary}
                          primaryTypographyProps={{
                            variant: 'subtitle1',
                            color: 'text.primary',
                          }}
                          secondaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Card
                sx={{
                  bgcolor: 'background.paper',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(33, 150, 243, 0.1)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary">
                    Send Us a Message
                  </Typography>
                  {formStatus.submitted && (
                    <Alert
                      severity={formStatus.success ? 'success' : 'error'}
                      sx={{ mb: 2 }}
                    >
                      {formStatus.message}
                    </Alert>
                  )}
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.23)',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Phone (optional)"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          sx={{
                            py: 1.5,
                            mt: 2,
                            fontSize: '1.1rem',
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 8 }}>
          <Card
            sx={{
              bgcolor: 'background.paper',
              overflow: 'hidden',
            }}
          >
            <iframe
              title="Safe Security Technology Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126089.29077059472!2d38.6894648!3d8.9806034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1674059496961!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom color="primary">
            Ready to Start Your Next Project?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Contact us today, and let's discuss how we can help you achieve your networking goals.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
