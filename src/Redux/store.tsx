import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {Api} from './Api/api';
import {rootReducer} from './Reducer/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thunk, Api.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
