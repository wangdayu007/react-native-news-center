import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserScreen from '../screens/User'
import AboutScreen from '../screens/User/About'
import LoginScreen from '../screens/NoAuth/Login'
import CounterScreen from '../screens/User/Counter'

const Stack = createNativeStackNavigator()

export default class UserStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="User" component={UserScreen} 
            options={{
                title:'个人中心',
                headerStyle:{
                    backgroundColor:'#fff'
                }
            }}
        />

        <Stack.Screen name="About" component={AboutScreen} 
            options={{
                title:'关于',
                headerStyle:{
                    backgroundColor:'#fff'
                }
            }}
        />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
