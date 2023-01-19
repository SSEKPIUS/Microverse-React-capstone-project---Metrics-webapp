import { configureStore } from '@reduxjs/toolkit';
import zonesReducer from './Zones';

const store = configureStore({
  reducer: {
    zones: zonesReducer,
  },
});
export default store;
