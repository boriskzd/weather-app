export const calculateWindDirection = (degrees) => {
	const windDirectionsList = [
		"N",
		"N/NE",
		"NE",
		"E/NE",
		"E",
		"E/SE",
		"SE",
		"S/SE",
		"S",
		"S/SW",
		"SW",
		"W/SW",
		"W",
		"W/NW",
		"NW",
		"N/NW",
	];

	const degreesPerWind = 360 / windDirectionsList.length;

	const wind = Math.round(degrees / degreesPerWind);

	const windDirection = windDirectionsList[wind];

	return windDirection;
};

export const visibilityMetersOrKm = (visibility) => {
	const visibilityText =
		visibility > 1000
			? `${Math.round(visibility / 1000)} km`
			: `${visibility} m`;

	return visibilityText;
};

export const daysOfWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export const getCurrentDate = (data) => {
	const today = new Date(data.dt * 1000);
	const currentDayOfWeek = daysOfWeek[today.getDay()];
	const dayOfMonth = today.getDate();
	const month = today.getMonth();
	const dateText = `${currentDayOfWeek}, ${months[month]} ${dayOfMonth}`;
	return dateText;
};
