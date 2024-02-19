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
import { useEffect, useState } from "react";

export default function Weather() {
	const position = useSelector((state) => state.weather); // coordinates of city

	const { data, isLoading } = useGetWeatherByCityQuery(position);

	// TESTING, ARTIFICIAL 2 SECOND WAIT
	// TESTING, ARTIFICIAL 2 SECOND WAIT

	// const [isLoading, setIsLoading] = useState(true);
	// useEffect(() => {
	// 	// Stiumulate API Call
	// 	setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 6000);
	// }, []);

	// TESTING, ARTIFICIAL 2 SECOND WAIT
	// TESTING, ARTIFICIAL 2 SECOND WAIT

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
						{isLoading ? (
							<Skeleton height={160} />
						) : (
							<CurrentWeather data={data.current} />
						)}

						<Divider>
							<Chip label={`Next 24 hours`} size="small" />
						</Divider>

						{isLoading ? (
							<Skeleton height={250} />
						) : (
							<WeatherChart data={data.hourly} />
						)}

						<Divider>
							<Chip label="Next 7 days" size="small" />
						</Divider>
						{isLoading ? (
							<Skeleton height={195} />
						) : (
							<NextWeek data={data} />
						)}
					</CardContent>
				</Card>
			</Paper>
		</>
	);
}
