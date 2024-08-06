import { RootState } from '../index';

export const selectCostsData = (state: RootState) => state.costs.data;
export const selectCostsLoading = (state: RootState) => state.costs.loading;
export const selectCostsError = (state: RootState) => state.costs.error;
