import { Box, Typography } from '@mui/material';
import { calculateWindDirection } from '../utils/weatherUtils';

const CurrentWeather = (data) => {
  // const icon = data.data.weather[0].icon;

  const boxCss = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  const icon = `http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`;
  const desc = data.data.weather[0].description;
  const visibility = Math.round(data.data.visibility / 1000);

  const {
    temp,
    pressure,
    dew_point,
    feels_like,
    uvi,
    humidity,
    wind_speed,
    windDeg,
  } = data.data;

  console.log(data);
  const windy = calculateWindDirection(windDeg);
  console.warn(windy);

  return (
    <Box sx={{ maxWidth: '300px' }}>
      <hr />
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img src={icon} alt={desc} width='60px' height='60px' />
        <Typography variant='h5' sx={{}}>
          {temp} °C
        </Typography>
      </Box>
      <Typography variant='subtitle2'>
        Feels like {feels_like} °C. {desc}.
      </Typography>

      <Box sx={boxCss}>
        <Typography variant='caption'>
          {wind_speed} m/s - {windDeg} degrees
        </Typography>
        <Typography variant='caption'>Pressure: {pressure} hPa</Typography>
      </Box>

      <Box sx={boxCss}>
        <Typography variant='caption'>
          <div>Humidity: {humidity}%</div>
        </Typography>
        <Typography variant='caption'>
          <div>UV: {uvi}</div>
        </Typography>
      </Box>

      <Box sx={boxCss}>
        <Typography variant='caption'>Dew point: {dew_point}</Typography>
        <Typography variant='caption'>Visibility: {visibility} km</Typography>
      </Box>
      <hr />
    </Box>
  );
};

export default CurrentWeather;
