/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import env from '../Config/env';

const baseUrl = env.API_URL_LOCAL;

interface ApiProps {
  endpoint: string;
  method?: string;
  _data?: any;
  tokenUse?: boolean;
  params?: any;
  urlParams?: number | string;
  baseUrlNew?: string;
}

export const Api = ({
  endpoint,
  method = 'GET',
  _data = {},
  tokenUse = false,
  params = {},
  urlParams = '',
  baseUrlNew = '',
}: ApiProps) => {
  const instance = axios.create({
    baseURL: baseUrlNew !== '' ? baseUrlNew : baseUrl,
    method: method,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add a request interceptor
  instance.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('@token');
      if (tokenUse && token) {
        config.headers = {
          ...config.headers,
          authorization: token,
        };
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );

  return instance.request({
    data: Object.keys(_data).length !== 0 ? _data : undefined,
    params: Object.keys(params).length !== 0 ? params : undefined,
    url: urlParams ? `${endpoint}/${urlParams}` : endpoint,
  });
};
