import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import createHttpClient from '../services/httpClient/httpClientFactory';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const httpClient = createHttpClient('axios');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpClient.get('/api/dashboard-data');
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <Typography variant="h4">Dashboard</Typography>
      {data ? (
        <Typography>{JSON.stringify(data)}</Typography>
      ) : (
        <Typography>Loading...</Typography>
      )}
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
