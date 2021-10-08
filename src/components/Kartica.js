import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import Day from './Day';
import CurrentWeather from './CurrentWeather';

// import CloudIcon from '@mui/icons-material/Cloud';

import exampleData from '../utils/exampleData';

console.log(exampleData.daily);
console.log(exampleData.daily[0]);

export default function MediaCard() {
  const current = exampleData.current;

  return (
    <Card
    // sx={{ maxWidth: 500 }}
    >
      <CardMedia
        component='img'
        height='140'
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Rijeka_Riva_promenade_aerial.jpg/800px-Rijeka_Riva_promenade_aerial.jpg'
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Rijeka
        </Typography>
        <CurrentWeather data={current} />
        <Grid
          container
          spacing={1}
          sx={{ flexGrow: 1 }}
          direction='row'
          // justify='center'
          justifyContent='space-evenly'
          alignItems='stretch'
        >
          {exampleData.daily.map((day) => {
            return <Day day={day} key={day.dt} />;
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}
