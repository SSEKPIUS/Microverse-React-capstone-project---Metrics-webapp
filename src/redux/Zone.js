import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchZone } from './Fetch';

const GET_ZONE = 'Dragons/Dragons/GET_ZONE';

const initialState = {
  zone: [],
};

const zoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ZONE}/fulfilled`:
      return {
        ...state,
        zone: action.payload,
      };
    default:
      return state;
  }
};

export const getZone = createAsyncThunk(GET_ZONE, async ({ lat, lon }) => {
  const data = await fetchZone({ lat, lon });
  return data;
});

export default zoneReducer;
