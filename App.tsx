/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Index from './src/index';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
          <NavigationContainer>
            <Index />
          </NavigationContainer>
    </Provider>
  );
}



export default App;
