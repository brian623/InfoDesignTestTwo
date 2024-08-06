import { createSlice } from '@reduxjs/toolkit';
import { fetchLostsData } from './lostsThunks';
import { LineData } from '../../utils/models/Energy.models';

interface LostsState {
  data: LineData[];
  loading: boolean;
  error: string | null;
}

const initialState: LostsState = {
  data: [],
  loading: false,
  error: null,
};

const lostsSlice = createSlice({
  name: 'losts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLostsData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchLostsData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchLostsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch losts data';
    });
  },
});

export default lostsSlice.reducer;
