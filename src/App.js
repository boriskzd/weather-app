import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';

import Weather from './components/Weather';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#00003f', paddingBottom: '50px' }}>
        <Container maxWidth='sm'>
          <Weather />
        </Container>
      </Box>
    </>
  );
}

export default App;
