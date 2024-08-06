import { RootState } from '../index';

export const selectEnergyData = (state: RootState) => state.energy.data;
export const selectEnergyLoading = (state: RootState) => state.energy.loading;
export const selectEnergyError = (state: RootState) => state.energy.error;
