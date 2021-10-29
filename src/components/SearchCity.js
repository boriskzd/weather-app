import { useState } from 'react';
import { Autocomplete, Box, Paper, TextField } from '@mui/material';

import { useGetCitiesQuery } from '../app/weatherApi';
import { useDispatch } from 'react-redux';

import { setCurrentLocation } from '../app/weatherSlice';

const SearchCity = () => {
  const [searchCity, setSearchCity] = useState('');

  const { data, error, isLoading } = useGetCitiesQuery(searchCity);

  const dispatch = useDispatch();

  let array = [];

  // console.log('loading: ', isLoading);
  // console.log(data);

  if (!isLoading && data !== undefined) {
    array = data;
  }

  const handleTyping = (event) => {
    setSearchCity(event.target.value);
  };

  const handleSelect = (e, value) => {
    console.log('handle select');
    console.log(value);
    console.log(value.lat);
    dispatch(setCurrentLocation(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: select first option when clicking enter
  };

  return (
    <Paper>
      <Box sx={{ marginBottom: 2 }}>
        <form onSubmit={handleSubmit}>
          <Autocomplete
            disablePortal
            id='search-city-autocomplete'
            autoHighlight
            onChange={handleSelect}
            options={array}
            getOptionLabel={(option) => `${option.name}, ${option.country}`}
            renderOption={(props, option) => (
              <Box
                component='li'
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
                key={Math.random()}
              >
                <img
                  width='24'
                  src={`https://flagcdn.com/${option.country.toLowerCase()}.svg`}
                  alt=''
                  style={{ boxShadow: '1px 1px 4px #bbb' }}
                />
                {option.name} ({option.country})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                label='Search City'
                variant='filled'
                onChange={handleTyping}
                {...params}
              />
            )}
          />
        </form>
      </Box>
    </Paper>
  );
};

export default SearchCity;
