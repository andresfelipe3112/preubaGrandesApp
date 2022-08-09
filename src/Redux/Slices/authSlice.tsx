import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAction, createSlice} from '@reduxjs/toolkit';
import {Api, User} from '../Api/api';

export const LogOut = createAction('auth/logOut');

interface AuthProps {
  user: User | null;
  checking: boolean;
  loggedIn: boolean;
}

const initialState = {
  user: null,
  loggedIn: false,
  checking: true,
} as AuthProps;

export const ApiSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(LogOut, state => {
      console.log('logout');
      AsyncStorage.removeItem('@user');
      AsyncStorage.removeItem('@token');
      state.user = null;
      state.checking = false;
      state.loggedIn = false;
    });
    builder.addMatcher(
      Api.endpoints.login.matchFulfilled,
      (state, {payload}) => {
        state.checking = false;
        state.user = payload.data.user;
        state.loggedIn = true;
      },
    );
    builder.addMatcher(Api.endpoints.login.matchPending, state => {
      state.checking = true;
    });
    builder.addMatcher(Api.endpoints.login.matchRejected, state => {
      state.user = null;
      state.checking = false;
      state.loggedIn = false;
    });
    builder.addMatcher(Api.endpoints.register.matchFulfilled, state => {
      state.checking = false;
    });
    builder.addMatcher(Api.endpoints.register.matchPending, state => {
      state.checking = true;
    });
    builder.addMatcher(Api.endpoints.register.matchRejected, state => {
      state.checking = false;
    });
    builder.addMatcher(Api.endpoints.checkAuth.matchPending, state => {
      state.checking = true;
    });
    builder.addMatcher(Api.endpoints.checkAuth.matchRejected, state => {
      // console.log('rejected auth');
      state.user = null;
      state.checking = false;
      state.loggedIn = false;
    });
    builder.addMatcher(
      Api.endpoints.checkAuth.matchFulfilled,
      (state, {payload}) => {
        // console.log('entroo');
        state.user = payload.data.user;
        state.checking = false;
        state.loggedIn = true;
      },
    );
  },
});
