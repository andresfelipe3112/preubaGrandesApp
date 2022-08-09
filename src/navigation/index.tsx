import React, {Fragment, useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store';
import {useCheckAuthQuery, useLoginMutation} from '../Redux/Api/api';
import AuthApp from './authApp';
import Welcome from './welcome';
import Loading from '../screens/loading/loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StackProps {
  RootNavigation: any;
}
export const StackNavigator: React.FC<StackProps> = ({RootNavigation}) => {
  const user = useSelector((state: RootState) => state.auth);

  const [login, {isLoading: loadingLogin}] = useLoginMutation();

  const LoginGuest = useCallback(async () => {
    await login({email: 'guest@gmail.com', password: '12345678'});
  }, [login]);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('@token');
      return token;
    };

    const token = getToken();

    if (!user && !token) {
      console.log('user null');
      LoginGuest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {isLoading, isError} = useCheckAuthQuery();

  console.log(isError);

  return (
    <Fragment>
      {isLoading || loadingLogin ? (
        <Loading />
      ) : (
        <Fragment>
          <AuthApp data={user.user} RootNavigation={RootNavigation} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default StackNavigator;
