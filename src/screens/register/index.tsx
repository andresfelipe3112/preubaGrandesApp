/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
import {

  View,
  Text,
  ActivityIndicator,
  Image,

} from 'react-native';
import { TextInput } from 'react-native-paper';
import {Formik} from 'formik';
import {useRegisterMutation} from '../../Redux/Api/api';
import Logo from '../../assets/Logo.png';
import styled from 'styled-components/native';
import {WelcomeProps} from '../../Props/screensProps';
import { SafeAreaView } from 'react-native-safe-area-context';

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

export const Register: React.FC<WelcomeProps> = ({navigation}) => {
  const [register, {isLoading}] = useRegisterMutation();
  const [error, setError] = useState<{
    isError: boolean;
    message: string;
  }>({
    isError: false,
    message: '',
  });
  const {navigate} = navigation;

  const doRegister = useCallback(
    async (values: any) => {
      // ADD services here
      console.log(values, '<===== values');
      const resp = await register(values)
        .unwrap()
        .then(() => {
          // Handle the response here
          return navigate('Login');
        })
        .catch(errorr => {
          // Handle the error here
          console.log(errorr?.data?.message);
          setError({
            isError: true,
            message: errorr?.data?.message,
          });
        });
      console.log(resp);
    },
    [register, navigate],
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'black'}}>
      <View
        style={{
          backgroundColor: 'black',
                    display: 'flex',
          flex: 1,
          borderColor: 'red',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={Logo} style={{marginTop: 80}} />
        <Formik
          initialValues={{
            name: '',
            surname: '',
            identifier: '',
            telephone: '',
            email: '',
            birthDate: '',
            gender: '',
            password: '',
            repeatPassword: '',
          }}
          onSubmit={values => doRegister(values)}>
          {({handleChange, handleBlur, values, handleSubmit}) => {
            return (
              <View style={{marginTop: 20}}>
                {error.isError && (
                  <Text style={{color: 'red'}}>{error.message}</Text>
                )}
                <Text style={{color: 'white'}}>Name</Text>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                   mode="outlined"
                   style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    marginBottom: 10,
                    backgroundColor: 'white',
                    width: 300,
                    height: 60,
                  }}
                  editable={!isLoading}
                />
                <Text style={{color: 'white'}}>Email</Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  mode="outlined"
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    marginBottom: 10,
                    backgroundColor: 'white',
                    width: 300,
                    height: 60,
                  }}
                  editable={!isLoading}
                />
                <Text style={{color: 'white'}}>Password</Text>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    marginBottom: 10,
                    backgroundColor: 'white',
                    width: 300,
                    height: 60,
                  }}
                  secureTextEntry={true}
                  editable={!isLoading}
                />
                <Text style={{color: 'white'}}>Repeat Password</Text>
                <TextInput
                  onChangeText={handleChange('repeatPassword')}
                  onBlur={handleBlur('repeatPassword')}
                  value={values.repeatPassword}
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    marginBottom: 10,
                    backgroundColor: 'white',
                    width: 300,
                    height: 60,
                  }}
                  secureTextEntry={true}
                  editable={!isLoading}
                />
                {isLoading ? (
                  <ActivityIndicator size="large" color="#7844A1" />
                ) : (
                  <>
                    <PressablePurple
                    onPress={handleSubmit}

                      style={{width: 260}}
                    >
                      <Text
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Register
                      </Text>
                    </PressablePurple>
                    <Text
                      onPress={() => navigation.navigate('Login')}
                      style={{
                        color: '#7844A1',
                        borderBottomColor: '#7844A1',
                        borderWidth: 1,
                        width: 145,
                        textAlign: 'center',
                        alignSelf: 'center',
                        marginBottom: 7,
                        marginTop: 20,
                      }}>
                      You have an account?
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

export default Register;
