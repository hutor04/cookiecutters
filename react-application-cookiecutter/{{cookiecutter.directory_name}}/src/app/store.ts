import {
  configureStore,
  ThunkAction,
  Action
} from '@reduxjs/toolkit';
import personReducer from '../features/person/personSlice';

export const store = configureStore({
  reducer: {
    person: personReducer,
  }
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  unknown,
  unknown,
  Action<string>>;