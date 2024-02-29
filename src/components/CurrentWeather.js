import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
	daysOfWeek,
	months,
	calculateWindDirection,
	visibilityMetersOrKm,
	getCurrentDate, // in format "DayOfWeek, Month Day" --> "Monday, February 25"
} from "../utils/timeAndWeatherUtils";
import { findIcon } from "../utils/icons";
import { capitalizeFirstLetter } from "../utils/utils";

const redBorder = { border: "1px solid red" };

// skeleton that is based on original code from render()
const displaySkeleton = () => {
	// text skeleton, it displays 6 times, for wind, humidity, visibility, pressure, dew point and UV
	const skeletonTextCss = (
		<Skeleton variant="text" sx={{ marginRight: { xs: 0, xs: 1 } }} />
	);

	return (
		<>
			<Grid container justifyContent="space-between">
				<Grid item>
					<Typography variant="h5">
						<Skeleton variant="text" width={130} />
					</Typography>
				</Grid>
				<Grid item>
					<Typography
						variant="subtitle2"
						sx={{ color: "text.secondary" }}
					>
						<Skeleton variant="text" width={100} />
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
							<Skeleton
								variant="rounded"
								height={100}
								width={100}
							/>
							<Typography variant="h5">
								<Skeleton
									variant="text"
									width={50}
									sx={{ marginLeft: 0.5 }}
								/>
							</Typography>
						</Box>
						<Typography variant="subtitle1" align="center">
							<Skeleton variant="text" width={120} />
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={12} sm={8}>
					<Grid container sx={{ paddingLeft: 2 }}>
						<Grid item xs={6} sm={6}>
							<Box>{skeletonTextCss}</Box>
							<Box>{skeletonTextCss}</Box>
							<Box>{skeletonTextCss}</Box>
						</Grid>
						<Grid item xs={6} sm={6}>
							<Box>
								<Box>{skeletonTextCss}</Box>
							</Box>
							<Box>
								<Box>{skeletonTextCss}</Box>
							</Box>
							<Box>
								<Box>{skeletonTextCss}</Box>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

const CurrentWeather = ({ data, isLoading }) => {
	const currentLocation = useSelector((state) => state.weather);

	if (isLoading) return displaySkeleton();

	// original icons from https://openweathermap.org/weather-conditions
	const svgIcon = findIcon(data.weather[0]);
	const desc = data.weather[0].description;
	const cityName = `${currentLocation.name}, ${currentLocation.country}`;
	const descSentence = capitalizeFirstLetter(desc);
	const dateText = getCurrentDate(data);

	const {
		temp,
		pressure,
		dew_point,
		uvi,
		humidity,
		wind_speed,
		wind_deg,
		visibility,
	} = data;

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
