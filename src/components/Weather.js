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
import NextWeek from './NextWeek';

import { useGetWeatherByCityQuery } from '../store/weatherApi';
import { useSelector } from 'react-redux';

export default function Weather() {
  const position = useSelector((state) => state.weather); // coordinates of city

  const { data, isLoading } = useGetWeatherByCityQuery(position);

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
