import {createSlice} from '@reduxjs/toolkit';
import {
  IPersonState,
  RequestStatus
} from './personTypes';
import {fetchPersonById} from './personThunks';
import { RootState } from '../../app/store';


export const initialState: IPersonState = {
  masterData: undefined,
  data: undefined,
  loadStatus: RequestStatus.UNLOADED,
  loadError: undefined
};

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    setFirstName: (state, {payload}) => {
      if (state.data) state.data.firstName = payload;
    },
    setLastName: (state, {payload}) => {
      if (state.data) state.data.lastName = payload;
    },
    persistData: (state) => {
      state.masterData = state.data;
    },
  },
  extraReducers: (builder => {
    builder
      .addCase(fetchPersonById.fulfilled, (state, {payload}) => {
        state.loadStatus = RequestStatus.SUCCESS;
        state.masterData = payload;
        state.data = payload;
      })
      .addCase(fetchPersonById.rejected, (state, action) => {
        state.loadStatus = RequestStatus.ERROR;
        state.loadError = action.error;
      })
      .addCase(fetchPersonById.pending, () => ({
        ...initialState,
        loadStatus: RequestStatus.LOADING,
      }));
  })
});

export const {
  setFirstName,
  setLastName,
  persistData,
} = personSlice.actions;

export const getPersonState = (state: RootState) => state.person;
export const getPersonLoadStatus = (state: RootState) => getPersonState(state).loadStatus;
export const getPersonError = (state: RootState) => getPersonState(state).loadError;
export const getPersonId = (state: RootState) => getPersonState(state)?.data?.id;
export const getPersonFirstName = (state: RootState) => getPersonState(state)?.data?.firstName;
export const getPersonLastName = (state: RootState) => getPersonState(state)?.data?.lastName;


export default personSlice.reducer;
