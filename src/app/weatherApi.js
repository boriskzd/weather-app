import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/',
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      // query: (name) => `pokemon/${getPokemonByName}`,
      query: (latLong) =>
        `data/2.5/onecall?lat=${latLong.lat}&lon=${latLong.lon}&units=metric&exclude=minutely&appid=bfd623391de7c5ae0f4979b6a11b1f77`,
    }),
    getCities: builder.query({
      query: (city) =>
        `geo/1.0/direct?q=${city}&limit=5&appid=bfd623391de7c5ae0f4979b6a11b1f77`,
    }),
  }),
});

export const { useGetWeatherByCityQuery, useGetCitiesQuery } = weatherApi;
