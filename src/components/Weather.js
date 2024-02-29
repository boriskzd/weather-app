import {
	Card,
	CardContent,
	Chip,
	Divider,
	Paper,
	Skeleton,
	Typography,
} from "@mui/material";

import SearchCity from "./SearchCity";
import CurrentWeather from "./CurrentWeather";
import WeatherChart from "./WeatherChart";
import NextWeek from "./NextWeek";

import { useGetWeatherByCityQuery } from "../store/weatherApi";
import { useSelector } from "react-redux";

export default function Weather() {
	const position = useSelector((state) => state.weather); // coordinates of city

	const { data, isLoading } = useGetWeatherByCityQuery(position);

	return (
		<>
			<Typography
				variant="h4"
				align="center"
				sx={{ color: "white", paddingTop: 2, paddingBottom: 2 }}
			>
				Weather App
			</Typography>

			<SearchCity />
			<Paper elevation={0}>
				<Card>
					<CardContent>
						<CurrentWeather
							data={data?.current}
							isLoading={isLoading}
						/>

						<Divider sx={{ m: 0.5 }}>
							<Chip label={`Next 24 hours`} size="small" />
						</Divider>

						<WeatherChart
							data={data?.hourly}
							isLoading={isLoading}
						/>

						<Divider sx={{ m: 0.5 }}>
							<Chip label="Next 7 days" size="small" />
						</Divider>

						<NextWeek data={data} isLoading={isLoading} />
					</CardContent>
				</Card>
			</Paper>
		</>
	);
}
