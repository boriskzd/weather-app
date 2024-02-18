import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";

import Weather from "./components/Weather";

function App() {
	return (
		<>
			<CssBaseline />
			<Box
				sx={{
					height: "100vh",
					backgroundColor: "#012454",
					paddingBottom: "24px",
				}}
			>
				<Container maxWidth="sm">
					<Weather />
				</Container>
			</Box>
		</>
	);
}

export default App;
