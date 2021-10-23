export const calculateWindDirection = (degrees) => {
  const windDirectionsList = [
    'N',
    'N/NE',
    'NE',
    'E/NE',
    'E',
    'E/SE',
    'SE',
    'S/SE',
    'S',
    'S/SW',
    'SW',
    'W/SW',
    'W',
    'W/NW',
    'NW',
    'N/NW',
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
