import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Card,
  CardContent,
  Checkbox,
  Alert,
  CircularProgress,
  Modal,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Search as SearchIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);  // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [summary, setSummary] = useState({
    total_messages: 0,
    unread_messages: 0,
    latest_message: null,
  });
  const [openModal, setOpenModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchDashboardData();
    fetchMessages();
  }, [navigate]);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/admin/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }

      const data = await response.json();
      setSummary(data);
    } catch (err) {
      setError('Failed to load dashboard data');
    }
  };

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/admin/messages', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      const data = await response.json();
      // Ensure data is an array
      setMessages(Array.isArray(data) ? data : []);
    } catch (err) {
      setError('Failed to load messages');
      setMessages([]); // Set to empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(0);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    setPage(0);
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedMessages(filteredMessages.map(msg => msg.id));
    } else {
      setSelectedMessages([]);
    }
  };

  const handleSelectMessage = (id) => {
    setSelectedMessages(prev => {
      if (prev.includes(id)) {
        return prev.filter(msgId => msgId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedMessage(null);
  };

  const handleDeleteSelected = async () => {
    if (!selectedMessages.length) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/admin/messages/bulk-delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ message_ids: selectedMessages }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete messages');
      }

      setSelectedMessages([]);
      fetchMessages();
      fetchDashboardData();
    } catch (err) {
      setError('Failed to delete messages');
    }
  };

  const handleToggleRead = async (message) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/admin/messages/${message.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ read: !message.read }),
      });

      if (!response.ok) {
        throw new Error('Failed to update message');
      }

      fetchMessages();
      fetchDashboardData();
    } catch (err) {
      setError('Failed to update message');
    }
  };

  const filteredMessages = Array.isArray(messages) ? messages.filter(message => {
    const matchesSearch = message.name?.toLowerCase().includes(search.toLowerCase()) ||
      message.email?.toLowerCase().includes(search.toLowerCase()) ||
      message.message?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = !status || (status === 'read' ? message.read : !message.read);
    return matchesSearch && matchesStatus;
  }) : [];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Admin Dashboard
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Messages
              </Typography>
              <Typography variant="h4">
                {summary.total_messages}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Unread Messages
              </Typography>
              <Typography variant="h4">
                {summary.unread_messages}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Latest Message
              </Typography>
              <Typography>
                {summary.latest_message ? new Date(summary.latest_message.created_at).toLocaleDateString() : 'No messages'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ mb: 2, p: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={search}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1 }} />,
            }}
          />
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              label="Status"
              onChange={handleStatusChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="read">Read</MenuItem>
              <MenuItem value="unread">Unread</MenuItem>
            </Select>
          </FormControl>
          {selectedMessages.length > 0 && (
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteSelected}
            >
              Delete Selected ({selectedMessages.length})
            </Button>
          )}
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={filteredMessages.length > 0 && selectedMessages.length === filteredMessages.length}
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredMessages
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((message) => (
                  <TableRow key={message.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedMessages.includes(message.id)}
                        onChange={() => handleSelectMessage(message.id)}
                      />
                    </TableCell>
                    <TableCell>{message.name}</TableCell>
                    <TableCell>{message.email}</TableCell>
                    <TableCell>
                      {message.message.length > 50
                        ? `${message.message.substring(0, 50)}...`
                        : message.message}
                    </TableCell>
                    <TableCell>
                      {new Date(message.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {message.read ? 'Read' : 'Unread'}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleToggleRead(message)}
                        color={message.read ? 'default' : 'primary'}
                      >
                        {message.read ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                      <IconButton
                        onClick={() => handleViewMessage(message)}
                        color="primary"
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredMessages.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="message-modal-title"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" component="h2">
              Message Details
            </Typography>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          {selectedMessage && (
            <>
              <Typography variant="subtitle1" gutterBottom>
                From: {selectedMessage.name}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Email: {selectedMessage.email}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {selectedMessage.message}
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', mt: 2 }}>
                Sent on: {new Date(selectedMessage.created_at).toLocaleString()}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
