import {combineReducers} from 'redux';
import {Api} from '../Api/api';
import {ApiSlice} from '../Slices/authSlice';

export const rootReducer = combineReducers({
  auth: ApiSlice.reducer,
  Querys: Api.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
