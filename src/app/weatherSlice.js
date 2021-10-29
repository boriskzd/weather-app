import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Zagreb',
  country: 'HR',
  lat: 45.8144,
  lon: 15.978,
  state: undefined,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.country = action.payload.country;
      state.name = action.payload.name;
    },
  },
});

export const { setCurrentLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
