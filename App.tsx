import React from 'react';
import * as RootNavigation from './RootNavigation.js';
import {navigationRef} from './RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import StackNavigator from './src/navigation';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer ref={navigationRef}>
            <StackNavigator RootNavigation={RootNavigation} />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
