import Config from 'react-native-config';

export type IEnvironment = 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION';

interface Env {
  API_URL: string;
  API_URL_LOCAL: string;
  ENVIRONMENT: IEnvironment;
}

export default {
  API_URL: Config.REACT_APP_API_URL,
  API_URL_LOCAL: Config.REACT_APP_API_URL_LOCAL,
  ENVIRONMENT: Config.ENVIRONMENT,
} as Env;
