import {
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Typography,
} from '@mui/material';

import SearchCity from './SearchCity';
import CurrentWeather from './CurrentWeather';
import WeatherChart from './WeatherChart';

import { useGetWeatherByCityQuery } from '../app/weatherApi';
import { useSelector } from 'react-redux';
import NextWeek from './NextWeek';

export default function Weather() {
  const latLong = useSelector((state) => state.weather);

  const {
    data,
    // error,
    isLoading,
  } = useGetWeatherByCityQuery(latLong);

  // console.log(data);

  const loadingHtml = (
    <div style={{ color: 'white', textAlign: 'center' }}>
      <div>Loading...</div>
    </div>
  );

  if (isLoading) return loadingHtml;

  return (
    <>
      <Typography
        variant='h4'
        align='center'
        sx={{ color: 'white', paddingTop: 2, paddingBottom: 2 }}
      >
        Weather App
      </Typography>

      <SearchCity />

      <Paper elevation={0}>
        <Card>
          <CardContent>
            <CurrentWeather data={data.current} />

            <WeatherChart data={data.hourly} />

            <Divider>
              <Chip label='Next 7 days' size='small' />
            </Divider>

            <NextWeek data={data} />
          </CardContent>
        </Card>
      </Paper>
    </>
  );
}
