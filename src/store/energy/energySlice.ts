import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnergyConsolidated } from '../../utils/models/Energy.models';
import { fetchEnergyData } from './energyThunks';

interface EnergyState {
  data: EnergyConsolidated[];
  loading: boolean;
  error: string | null;
}

const initialState: EnergyState = {
  data: [],
  loading: false,
  error: null,
};

const energySlice = createSlice({
  name: 'energy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEnergyData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchEnergyData.fulfilled, (state, action: PayloadAction<EnergyConsolidated[]>) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchEnergyData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch energy data';
    });
  },
});

export default energySlice.reducer;
