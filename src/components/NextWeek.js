import { Box } from '@mui/material';

import Day from './Day';

import { useSelector } from 'react-redux';

export default function NextWeek(data) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        gap: '5px',
        overflowY: 'auto',
        minWidth: 240,
        marginTop: '10px',
      }}
    >
      {data.data.daily.map((day) => {
        return <Day day={day} key={day.dt} />;
      })}
    </Box>
  );
}
