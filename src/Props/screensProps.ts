import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  MyStreams: undefined;
  JoinStream: {
    state: {
      id: string;
    };
  };
  Menu: {
    setOpen: () => void;
    open: boolean;
  };
  CreateStreams: {
    state: {
      name: string;
      desc: string;
      img: string;
    };
  };
};
export type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type MyStreamsProps = NativeStackScreenProps<
  RootStackParamList,
  'MyStreams'
>;

export type JoinStreamProps = NativeStackScreenProps<
  RootStackParamList,
  'JoinStream'
>;

export type CreateStreamsProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateStreams'
>;

export type CreateStreamsRouteProp = RouteProp<
  RootStackParamList,
  'CreateStreams'
>;

export type RouteProps = {
  route: CreateStreamsRouteProp;
  navigation: CreateStreamsProps;
};

export type MenuProps = NativeStackScreenProps<RootStackParamList, 'Menu'>;
