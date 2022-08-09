/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-paper';
import {useLoginMutation} from '../../Redux/Api/api';

import styled from 'styled-components/native';
import {WelcomeProps} from '../../Props/screensProps';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import GrandestLogo from '../../assets/svgs/GrandestLogo';

export const PressablePurple = styled.Pressable`
  width: 100px;
  background-color: #7844a1;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Login: React.FC<WelcomeProps> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [login, {isLoading}] = useLoginMutation();
  const [error, setError] = useState<{
    isError: boolean;
    message: string;
  }>({
    isError: false,
    message: '',
  });
  const {navigate} = navigation;

  const doLogin = useCallback(
    async (values: any) => {
      // ADD services here
      const resp = await login(values)
        .unwrap()
        .then(() => {
          // Handle the response here
          navigate('Home');
        })
        .catch(errorr => {
          // Handle the error here
          setError({
            isError: true,
            message: errorr?.data?.message,
          });
        });
      console.log(resp);
    },
    [login, navigate],
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'black'}}>
      <View
        style={{
          backgroundColor: 'black',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{marginBottom: 50}}>
          <GrandestLogo/>
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values, {resetForm}) => { resetForm(); doLogin(values);}}>
          {({handleChange, handleBlur, values, handleSubmit, resetForm}) => {
            return (
              <View>
                {error.isError && (
                  <Text style={{color: 'red'}}>{error.message}</Text>
                )}
                <Text style={{color: 'white'}}>Email</Text>
                <TextInput
                  mode="outlined"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={{
                    color: 'black',
                    borderWidth: 1,
                    borderColor: 'black',
                    marginBottom: 10,
                    backgroundColor: 'white',
                    width: 300,
                  }}
                  editable={!isLoading}
                />
                <Text style={{color: 'white'}}>Password</Text>
                <TextInput
                  mode="outlined"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={{
                    color: 'black',
                    borderWidth: 1,
                    borderColor: 'black',
                    marginBottom: 10,
                    backgroundColor: 'white',
                    width: 300,
                  }}
                  secureTextEntry={true}
                  editable={!isLoading}
                />
                {isLoading ? (
                  <ActivityIndicator size="large" color="#7844A1" />
                ) : (
                  <>
                    <PressablePurple onPress={handleSubmit}
                    style={{width: 260}}
                    >
                      <Text
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Login
                      </Text>
                    </PressablePurple>
                    {user?.potentialAction.includes('guest') ? (
                      <Text
                        style={{
                          color: '#fff',
                          textAlign: 'center',
                          marginTop: 20,
                        }}>
                        Logged as guest
                      </Text>
                    ) : (
                      <PressablePurple
                        style={{width: 260}}
                        onPress={() =>{resetForm();
                          doLogin({
                            email: 'guest@gmail.com',
                            password: '12345678',
                          });}
                        }
                       >
                        <Text
                          style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                          }}>
                          Login as Guest
                        </Text>
                      </PressablePurple>
                    )}
                    <Text
                      onPress={() => navigation.navigate('Register' as never)}
                      style={{
                        color: '#7844A1',
                        borderBottomColor: '#7844A1',
                        borderWidth: 1,
                        width: 125,
                        textAlign: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                      }}>
                      Create an account
                    </Text>
                  </>
                )}
              </View>
            );
          }}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Login;
