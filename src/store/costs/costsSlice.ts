import { createSlice } from '@reduxjs/toolkit';
import { fetchCostsData } from './costsThunks';
import { LineData } from '../../utils/models/Energy.models';

interface CostsState {
  data: LineData[];
  loading: boolean;
  error: string | null;
}

const initialState: CostsState = {
  data: [],
  loading: false,
  error: null,
};

const costsSlice = createSlice({
  name: 'costs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCostsData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCostsData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCostsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch costs data';
    });
  },
});

export default costsSlice.reducer;
