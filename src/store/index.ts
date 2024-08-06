import { configureStore } from '@reduxjs/toolkit';
import consumeReducer from './consume/consumeSlice';
import costsReducer from './costs/costsSlice';
import lostsReducer from './losts/lostsSlice';
import energyReducer from "./energy/energySlice";

const store = configureStore({
  reducer: {
    consume: consumeReducer,
    costs: costsReducer,
    losts: lostsReducer,
    energy: energyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
