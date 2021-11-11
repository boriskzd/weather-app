import { useState } from 'react';
import { Autocomplete, Box, Paper, TextField } from '@mui/material';

import { useGetCitiesQuery } from '../store/weatherApi';
import { useDispatch } from 'react-redux';

import { setCurrentLocation } from '../store/weatherSlice';

const SearchCity = () => {
  const [searchCity, setSearchCity] = useState('');
  const [skip, setSkip] = useState(true);

  const { data, isLoading } = useGetCitiesQuery(searchCity, { skip });

  const dispatch = useDispatch();

  let array = [];

  if (!isLoading && data !== undefined) {
    array = data;
  }

  const handleTyping = (event) => {
    setSkip(false);
    setSearchCity(event.target.value);
  };

  const handleSelect = (e, value) => {
    dispatch(setCurrentLocation(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
