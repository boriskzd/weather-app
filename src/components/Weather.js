import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Typography,
} from '@mui/material';

import Day from './Day';
import SearchCity from './SearchCity';
import CurrentWeather from './CurrentWeather';
import WeatherChart from './WeatherChart';

import { useGetWeatherByCityQuery } from '../app/weatherApi';
import { useSelector } from 'react-redux';

export default function Weather() {
  const latLong = useSelector((state) => state.weather);

  console.log(`lat long: `);
  console.log(latLong);

  const {
    data,
    //  error,
    isLoading,
  } = useGetWeatherByCityQuery(latLong);
  console.log(data);

  const loadingHtml = <div>Is Loading...</div>;

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

            <Divider>
              <Chip label='Daily' size='small' />
            </Divider>

            <WeatherChart prognoza={data.hourly} />

            <Divider>
              <Chip label='Next 7 days' size='small' />
            </Divider>

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
              {data.daily.map((day) => {
                return <Day day={day} key={day.dt} />;
              })}
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
}
