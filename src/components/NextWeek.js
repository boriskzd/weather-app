import { Box, Skeleton } from "@mui/material";

import Day from "./Day";

export default function NextWeek(props) {
	return (
		<Box
			sx={{
				display: "flex",
				flexFlow: "row nowrap",
				gap: "5px",
				overflowX: "auto",
				minWidth: 240,
				marginTop: "8px",
			}}
		>
			{props.isLoading
				? Array.from({ length: 8 }, (_, index) => (
						<Box
							width={80}
							sx={{
								marginBottom: "5px",
							}}
						>
							<Skeleton
								// variant="rounded"
								variant="rounded"
								height={163}
								width={80}
								key={index}
							/>
						</Box>
				  ))
				: props.data.daily.map((day) => {
						return <Day day={day} key={day.dt} />;
				  })}
		</Box>
	);
}
