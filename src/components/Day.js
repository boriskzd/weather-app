import { Paper, Typography } from '@mui/material';

import { daysOfWeek } from '../utils/weatherUtils';

const Day = (day) => {
  const dayOfWeek = new Date(day.day.dt * 1000).getDay();

  const day2 = daysOfWeek[dayOfWeek].slice(0, 3);

  const minTemp = Math.round(day.day.temp.min);
  const maxTemp = Math.round(day.day.temp.max);
  const weather = day.day.weather[0].description;
  const icon = `https://openweathermap.org/img/wn/${day.day.weather[0].icon}@2x.png`;

  return (
    <Paper variant='outlined' sx={{ width: 80, marginBottom: '5px' }}>
      <Typography
        sx={{ color: 'text.secondary', textAlign: 'center', fontSize: 14 }}
      >
        {day2}
      </Typography>

      <div style={{ width: '100%' }}>
        <img src={icon} alt={weather} width='80px' height='80px' />
      </div>

      <Typography
        sx={{ color: 'text.primary', textAlign: 'center', fontSize: 14 }}
      >
        {maxTemp}°- {minTemp}°
      </Typography>

      <Typography
        sx={{ color: 'text.secondary', textAlign: 'center', fontSize: 10 }}
      >
        {weather}
      </Typography>
    </Paper>
  );
};

export default Day;
