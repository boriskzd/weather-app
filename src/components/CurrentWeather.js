import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  calculateWindDirection,
  visibilityMetersOrKm,
} from '../utils/weatherUtils';

const CurrentWeather = (data) => {
  const latLong = useSelector((state) => state.weather);

  const cityName = `${latLong.name}, ${latLong.country}`;

  const icon = `https://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`;
  const desc = data.data.weather[0].description;
  const descSentence = desc[0].toUpperCase() + desc.slice(1) + '.';

  const {
    temp,
    pressure,
    dew_point,
    // feels_like,
    uvi,
    humidity,
    wind_speed,
    wind_deg,
    visibility,
  } = data.data;

  // console.log(data);
  const windDir = calculateWindDirection(wind_deg);
  const visibilityText = visibilityMetersOrKm(visibility);

  return (
    <>
      <Typography variant='h5'>
        <img
          width='32'
          src={`https://flagcdn.com/${latLong.country.toLowerCase()}.svg`}
          alt=''
          style={{ marginRight: 4, boxShadow: '1px 1px 4px #bbb' }}
        />{' '}
        {cityName}
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <img src={icon} alt={desc} width='100px' height='100px' />
            <Typography variant='h5' sx={{}}>
              {Math.round(temp)} °C
            </Typography>
          </Box>
          <Typography variant='subtitle2'>
            {descSentence}
            {/* Feels like {Math.round(feels_like)} °C. */}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Grid container sx={{ paddingLeft: 2 }}>
            <Grid item xs={6} sm={6}>
              <Box>
                <Typography variant='caption'>
                  Wind: {wind_speed.toFixed(1)} m/s {windDir}
                </Typography>
              </Box>
              <Box>
                <Typography variant='caption'>
                  <Typography variant='caption'>
                    Humidity: {humidity}%{' '}
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Typography variant='caption'>
                  Visibility: {visibilityText}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box>
                <Typography variant='caption'>
                  <Typography variant='caption'>
                    Pressure: {pressure} hPa
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Typography variant='caption'>
                  <Typography variant='caption'>
                    Dew point: {Math.round(dew_point)} °C
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Typography variant='caption'>
                  <Typography variant='caption'>UV: {uvi}</Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CurrentWeather;
