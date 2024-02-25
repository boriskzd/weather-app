import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
	daysOfWeek,
	months,
	calculateWindDirection,
	visibilityMetersOrKm,
	getCurrentDate, // in format "DayOfWeek, Month Day" --> "Monday, February 25"
} from "../utils/timeAndWeatherUtils";
import { findIcon } from "../utils/icons";

const CurrentWeather = (props) => {
	const currentLocation = useSelector((state) => state.weather);

	const cityName = `${currentLocation.name}, ${currentLocation.country}`;
	// const icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`; // original icons from https://openweathermap.org/weather-conditions
	const svgIcon = findIcon(props.data.weather[0]);
	const desc = props.data.weather[0].description;
	const descSentence = desc[0].toUpperCase() + desc.slice(1);
	const today = new Date(props.data.dt * 1000);
	const currentDayOfWeek = daysOfWeek[today.getDay()];
	const dayOfMonth = today.getDate();
	const month = today.getMonth();
	const dateText = `${currentDayOfWeek}, ${months[month]} ${dayOfMonth}`;

	const {
		temp,
		pressure,
		dew_point,
		uvi,
		humidity,
		wind_speed,
		wind_deg,
		visibility,
	} = props.data;

	const windDir = calculateWindDirection(wind_deg);
	const visibilityText = visibilityMetersOrKm(visibility);

	const textTitle = { color: "text.secondary", paddingRight: 0.5 };

	return (
		<>
			<Grid container justifyContent="space-between">
				<Grid item>
					<Typography variant="h5">
						<img
							width="32"
							src={`https://flagcdn.com/${currentLocation.country.toLowerCase()}.svg`}
							alt=""
							style={{
								marginRight: 4,
								boxShadow: "1px 1px 4px #bbb",
							}}
						/>{" "}
						{cityName}
					</Typography>
				</Grid>
				<Grid item>
					<Typography
						variant="subtitle2"
						sx={{ color: "text.secondary" }}
					>
						{dateText}
					</Typography>
				</Grid>
			</Grid>
			<Grid container alignItems="center">
				<Grid item xs={12} sm={4}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<img
								src={svgIcon}
								alt={desc}
								width="100px"
								height="100px"
							/>
							<Typography variant="h5">
								{Math.round(temp)} °C
							</Typography>
						</Box>
						<Typography variant="subtitle1" align="center">
							{descSentence}
							{/* Feels like {Math.round(feels_like)} °C. */}
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={12} sm={8}>
					<Grid container sx={{ paddingLeft: 2 }}>
						<Grid item xs={6} sm={6}>
							<Box>
								<Typography variant="caption" sx={textTitle}>
									Wind:
								</Typography>
								<Typography variant="caption">
									{wind_speed.toFixed(1)} m/s {windDir}
								</Typography>
							</Box>
							<Box>
								<Typography variant="caption" sx={textTitle}>
									Humidity:
								</Typography>
								<Typography variant="caption">
									{humidity}%{" "}
								</Typography>
							</Box>
							<Box>
								<Typography variant="caption" sx={textTitle}>
									Visibility:
								</Typography>
								<Typography variant="caption">
									{visibilityText}
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={6} sm={6}>
							<Box>
								<Typography variant="caption" sx={textTitle}>
									Pressure:
								</Typography>
								<Typography variant="caption">
									{pressure} hPa
								</Typography>
							</Box>
							<Box>
								<Typography variant="caption" sx={textTitle}>
									Dew point:
								</Typography>
								<Typography variant="caption">
									{Math.round(dew_point)} °C
								</Typography>
							</Box>
							<Box>
								<Typography variant="caption" sx={textTitle}>
									UV:
								</Typography>
								<Typography variant="caption">{uvi}</Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default CurrentWeather;
