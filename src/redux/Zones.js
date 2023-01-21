import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchZones } from './Fetch';

const GET_ZONES = 'Dragons/Dragons/GET_ZONES';

const initialState = {
  zones: [],
};

const zonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ZONES}/fulfilled`:
      return {
        ...state,
        zones: action.payload,
      };
    default:
      return state;
  }
};

export const getZones = createAsyncThunk(GET_ZONES, async (city) => {
  const data = fetchZones(city);
  return data;
});

export default zonesReducer;
