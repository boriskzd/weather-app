import React from 'react';
import { Counter } from './components/Counter';
import { Weather } from './components/Weather';
import { Container, CssBaseline, Grid } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <div className='App'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Weather />
              <Counter />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default App;
