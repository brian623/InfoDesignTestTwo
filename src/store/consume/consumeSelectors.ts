import { RootState } from '../index';

export const selectConsumeData = (state: RootState) => state.consume.data;
export const selectConsumeLoading = (state: RootState) => state.consume.loading;
export const selectConsumeError = (state: RootState) => state.consume.error;
