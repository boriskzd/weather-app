import { Divider, Chip } from '@mui/material';

import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
  ComposedChart,
  Line,
  Tooltip,
} from 'recharts';

import { daysOfWeek } from '../utils/weatherUtils';

export default function WeatherChart(prognoza) {
  let newData = prognoza.prognoza.slice(0, 24);

  let minTemp = 100;
  let maxTemp = -100;

  // let currentDay = new Date(obj.dt * 1000).getDay();
  const currentDayOfWeek =
    daysOfWeek[new Date(prognoza.prognoza[0].dt * 1000).getDay()];

  newData = newData.map((obj) => {
    let newObj = {};
    newObj.temp = Math.round(obj.temp);
    newObj.rain = Math.round(obj.pop * 100);

    if (newObj.temp > maxTemp) maxTemp = newObj.temp;
    if (newObj.temp < minTemp) minTemp = newObj.temp;

    newObj.time = new Date(obj.dt * 1000).getHours();

    return newObj;
  });

  if (maxTemp < 2) maxTemp = 2;

  const tempDiff =
    (maxTemp - minTemp) / 5 < 1 ? 1 : Math.round((maxTemp - minTemp) * 0.2);

  minTemp -= tempDiff;
  maxTemp += tempDiff;

  const renderTemperature = ({
    payload,
    x,
    y,
    width,
    height,
    value,
    index,
  }) => {
    let text = null;

    if (index % 3 === 0 && index !== 0)
      text = (
        <text x={x} y={y} dy={-8} fill='#777' fontSize={10} textAnchor='middle'>
          {value} °C
        </text>
      );

    return text;
  };

  const renderPrecipitation = ({ payload, x, y, value, index, cx }) => {
    let text = null;

    if (index % 3 === 0 && index !== 0) {
      text = (
        <text
          x={x}
          y={y}
          dy={-8}
          fill='rgb(49, 130, 189)'
          fontSize={10}
          color='blue'
          textAnchor='middle'
        >
          {value}%
        </text>
      );
    }
    return text;
  };

  const renderTime = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x}
        y={y}
        fill='#666'
        textAnchor='middle'
        dy={15}
        fontSize={12}
      >{`${payload.value}:00`}</text>
    );
  };

  const renderTooltipFormatter = (value, name) => {
    let nameHtml = '';

    switch (name) {
      case 'Temperature °C':
        nameHtml = `Temp: ${value} °C`;
        break;
      case 'Precipitation %':
        nameHtml = `Rain: ${value} % chance`;
        break;
      default:
        nameHtml = 'Default: ' + value;
    }

    return [nameHtml];
  };

  return (
    <>
      <Divider>
        <Chip label={`Today - ${currentDayOfWeek}`} size='small' />
      </Divider>

      <ResponsiveContainer width='100%' height={250}>
        <ComposedChart
          width={660}
          height={250}
          data={newData}
          margin={{
            top: 20,
            right: -25,
            left: -30,
            bottom: 10,
          }}
        >
          {/* Temperature  */}
          <defs>
            <linearGradient
              id='temperatureGradient'
              x1='0'
              y1='0'
              x2='0'
              y2='1'
            >
              <stop offset='5%' stopColor='#fec821' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#eda31d' stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            yAxisId={1}
            dataKey='temp'
            name='Temperature °C'
            type='monotone'
            stroke='#eda31d'
            fill='url(#temperatureGradient)'
            label={renderTemperature}
            legendType='square'
          />
          <YAxis
            yAxisId={1}
            domain={[minTemp, maxTemp]}
            allowDecimals={false}
            // label={{ value: 'Temp °C', angle: -90 }}
          />

          {/* Chance of Rain  */}
          <Line
            yAxisId={2}
            dataKey='rain'
            name='Precipitation %'
            type='monotone'
            label={renderPrecipitation}
            stroke='rgb(49, 130, 189)'
            dot={{ r: 2 }}
          />
          <YAxis
            yAxisId={2}
            domain={[0, 100]}
            // label={{ value: 'Chance of Rain', angle: -90 }}
            orientation='right'
          />

          {/* Time  */}
          <CartesianGrid strokeDasharray='3 6' />
          <XAxis dataKey='time' interval={2} tick={renderTime} />

          {/* Other */}
          <Legend />
          <Tooltip
            labelFormatter={(value, name, props) => `Time: ${value}:00 h`}
            formatter={(value, name, props) =>
              renderTooltipFormatter(value, name)
            }
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
}
