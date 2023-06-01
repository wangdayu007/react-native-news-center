import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'

const Stack = createNativeStackNavigator()

export default class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            title:'首页',
            headerStyle:{
                backgroundColor:'#03B38D',
            },
            headerShadowVisible: false,
            headerTintColor:'#fff',
            headerRight:() => (
              <TouchableOpacity onPress={() => alert('suck my dick')}>
                <Text style={{fontSize: 18, color: '#fff', marginRight: 10}}>拍照</Text>
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
