import Rainy3 from '../assets/amcharts_weather_icons_1_0_0/animated/rainy-3.svg';
import Rainy6 from '../assets/amcharts_weather_icons_1_0_0/animated/rainy-6.svg';
import Sunny from '../assets/amcharts_weather_icons_1_0_0/animated/day.svg';
import Cloudy1 from '../assets/amcharts_weather_icons_1_0_0/animated/cloudy-day-1.svg';
import Cloudy2 from '../assets/amcharts_weather_icons_1_0_0/animated/cloudy-day-2.svg';
import Cloudy3 from '../assets/amcharts_weather_icons_1_0_0/animated/cloudy-day-3.svg';
import Snow from '../assets/amcharts_weather_icons_1_0_0/animated/snowy-3.svg';
import Thunder from '../assets/amcharts_weather_icons_1_0_0/animated/thunder.svg';
import CloudyAtmosphere from '../assets/amcharts_weather_icons_1_0_0/animated/cloudy.svg';
import Weather from '../assets/amcharts_weather_icons_1_0_0/animated/weather.svg';
// icons are from: https://www.amcharts.com/free-animated-svg-weather-icons/
// weather condigitons: https://openweathermap.org/weather-conditions

export const findIcon = (typeOfWeather) => {
  console.log(
    `${typeOfWeather.icon} - ${typeOfWeather.main} - ${typeOfWeather.description}`
  );

  let icon = null;

  switch (typeOfWeather.main) {
    case 'Clear':
      icon = Sunny;
      break;
    case 'Thunderstorm':
      icon = Thunder;
      break;
    case 'Drizzle':
      icon = Rainy3;
      break;
    case 'Rain':
      switch (typeOfWeather.id) {
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
          icon = Rainy3;
          break;
        case 511:
          icon = Snow;
          break;
        case 520:
        case 521:
        case 522:
        case 523:
          icon = Rainy6;
          break;
        default:
          console.log('D E F A U L T - Rain');
      }
      break;
    case 'Clouds':
      switch (typeOfWeather.id) {
        case 801:
          icon = Cloudy1;
          break;
        case 802:
          icon = Cloudy2;
          break;
        case 803:
        case 804:
          icon = Cloudy3;
          break;
        default:
          console.log('D E F A U L T - Clouds');
      }
      break;
    case 'Snow':
      icon = Snow;
      break;
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Dust':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      icon = CloudyAtmosphere;
      break;
    default:
      console.log('D E F A U L T');
      icon = Weather;
  }

  return icon;
};
