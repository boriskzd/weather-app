import { Box, Grid, Paper, Typography } from '@mui/material';

const Day = (day) => {
  console.log(day);

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const dayOfWeek = new Date(day.day.dt * 1000).getDay();

  const day2 = daysOfWeek[dayOfWeek].slice(0, 3);

  const minTemp = Math.round(day.day.temp.min);
  const maxTemp = Math.round(day.day.temp.max);
  const weather = day.day.weather[0].description;
  const icon = `http://openweathermap.org/img/wn/${day.day.weather[0].icon}@2x.png`;

  return (
    <Grid item xs>
      <Paper variant='outlined' elevation={0}>
        <Box sx={{ color: 'text.primary', textAlign: 'center' }}>{day2}</Box>

        <div style={{ width: '100%' }}>
          <img src={icon} alt={weather} width='100%' />
        </div>

        <Typography
          sx={{ color: 'text.secondary', textAlign: 'center', fontSize: 12 }}
        >
          {weather}
        </Typography>

        <Typography
          sx={{ color: 'text.primary', textAlign: 'center', fontSize: 16 }}
        >
          {maxTemp} - {minTemp}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Day;
