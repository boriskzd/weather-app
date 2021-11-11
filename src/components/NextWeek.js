import { Box } from '@mui/material';

import Day from './Day';

export default function NextWeek(props) {
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
      {props.data.daily.map((day) => {
        return <Day day={day} key={day.dt} />;
      })}
    </Box>
  );
}
