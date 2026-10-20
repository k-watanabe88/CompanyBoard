import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{
      bgcolor: '#9e0f3f',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20%',
    }}>
      <Typography  sx={{color: 'white', fontSize: 40}}>
        CompanyBoard
      </Typography>
    </Box>
  );
};

export default Header;