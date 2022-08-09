import AsyncStorage from '@react-native-async-storage/async-storage';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import env from '../../Config/env';
import {MessagesResponse} from '../../Interfaces';

export interface User {
  id: string;
  name: string;
  identifier: string;
  telephone: number;
  email: string;
  potentialAction: Array<string>;
}

interface LoginResp {
  data: {
    user: User;
    token: string;
  };
}

interface LoginProps {
  email: string;
  password: string;
}

export interface CreateUserBody {
  name: string;
  surname: string;
  identifier: string;
  telephone: string;
  email: string;
  birthDate: string;
  gender: 'M' | 'L';
  password: string;
  repeatPassword: string;
}

interface CreateUserResp {
  name: string;
  surname: string;
  identifier: string;
  telephone: string;
  email: string;
  dateCreate: string;
  userUpdate: string;
  birthDate: string;
  gender: string;
  nationality: string;
  potentialAction: Array<String>;
  image: string;
  url: string;
  config: string;
  active: string;
  _id: string;
  __v: string;
}

export interface Error {
  additionalInfo: String;
  message: string;
  status: number;
}

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: env.API_URL_LOCAL || env.API_URL,
    prepareHeaders: async headers => {
      const suscription_key = await AsyncStorage.getItem('@token');
      console.log(suscription_key);
      const key = suscription_key ? suscription_key : undefined;
      const token = key;
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth', 'Phenix'],
  reducerPath: 'Querys',
  endpoints: build => ({
    login: build.mutation<LoginResp, LoginProps>({
      query: (body: LoginProps) => ({
        url: '/auth/signin',
        method: 'POST',
        body,
      }),
      transformResponse: async (response: LoginResp) => {
        console.log(`login: ${response}`);
        await AsyncStorage.setItem('@user', JSON.stringify(response.data.user));
        await AsyncStorage.setItem('@token', response.data.token);
        return response;
      },
    }),
    register: build.mutation<CreateUserResp, CreateUserBody>({
      query: (body: CreateUserBody) => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),
    checkAuth: build.query<CheckAuthProps, void>({
      query: () => '/auth/checkAuth',
    }),
    getMessages: build.query<MessagesResponse, {idStream: string}>({
      query: body => ({
        url: '/phenix/' + body.idStream + '/messages',
      }),
      providesTags: ['Phenix'],
    }),
    sendMessagePhenix: build.mutation<
      {status: string},
      {message: string; type?: string; idStream: string}
    >({
      query: body => ({
        url: '/phenix/' + body.idStream + '/messages',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Phenix'],
    }),
    deleteMessage: build.mutation<
      {status: string},
      {type?: string; idStream: string}
    >({
      query: body => ({
        url: '/phenix/' + body.idStream + '/messages',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Phenix'],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useSendMessagePhenixMutation,
  useDeleteMessageMutation,
  useLoginMutation,
  useRegisterMutation,
  useCheckAuthQuery,
} = Api;

export interface CheckAuthProps {
  data: {
    user: User;
    iat: number;
    exp: number;
  };
}
