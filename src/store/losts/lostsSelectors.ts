import { RootState } from '../index';

export const selectLostsData = (state: RootState) => state.losts.data;
export const selectLostsLoading = (state: RootState) => state.losts.loading;
export const selectLostsError = (state: RootState) => state.losts.error;
