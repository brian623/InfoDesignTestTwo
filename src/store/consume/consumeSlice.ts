import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchConsumeData } from './consumeThunks';
import { LineData } from '../../utils/models/Energy.models';

interface ConsumeState {
  data: LineData[];
  loading: boolean;
  error: string | null;
}

const initialState: ConsumeState = {
  data: [],
  loading: false,
  error: null,
};

const consumeSlice = createSlice({
  name: 'consume',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConsumeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchConsumeData.fulfilled, (state, action: PayloadAction<LineData[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchConsumeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default consumeSlice.reducer;
