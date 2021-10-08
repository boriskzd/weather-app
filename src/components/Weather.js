import { Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

import MediaCard from './Kartica';

const Item = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export const Weather = () => {
  return (
    <>
      <h1>Weather</h1>
      <Paper elevation={0}>
        <MediaCard />
      </Paper>
    </>
  );
};
