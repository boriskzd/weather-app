import Rainy3 from "../assets/weather-icons-svg/rainy-3.svg";
import Rainy6 from "../assets/weather-icons-svg/rainy-6.svg";
import Sunny from "../assets/weather-icons-svg/day.svg";
import Cloudy1 from "../assets/weather-icons-svg/cloudy-day-1.svg";
import Cloudy2 from "../assets/weather-icons-svg/cloudy-day-2.svg";
import Cloudy3 from "../assets/weather-icons-svg/cloudy-day-3.svg";
import Snow from "../assets/weather-icons-svg/snowy-3.svg";
import Thunder from "../assets/weather-icons-svg/thunder.svg";
import CloudyAtmosphere from "../assets/weather-icons-svg/cloudy.svg";
import Weather from "../assets/weather-icons-svg/weather.svg";
// icons are from: https://www.amcharts.com/free-animated-svg-weather-icons/
// weather conditions: https://openweathermap.org/weather-conditions

export const findIcon = (typeOfWeather) => {
	let icon = null;

	switch (typeOfWeather.main) {
		case "Clear":
			icon = Sunny;
			break;
		case "Thunderstorm":
			icon = Thunder;
			break;
		case "Drizzle":
			icon = Rainy3;
			break;
		case "Rain":
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
					icon = Weather;
			}
			break;
		case "Clouds":
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
					icon = Weather;
			}
			break;
		case "Snow":
			icon = Snow;
			break;
		case "Mist":
		case "Smoke":
		case "Haze":
		case "Dust":
		case "Fog":
		case "Sand":
		case "Ash":
		case "Squall":
		case "Tornado":
			icon = CloudyAtmosphere;
			break;
		default:
			icon = Weather;
	}

	return icon;
};
