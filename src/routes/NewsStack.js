import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewsScreen from '../screens/News'
import DetailScreen from '../screens/News/Detail'

const Stack = createNativeStackNavigator()

export default class NewsStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName='News'>
        <Stack.Screen name="News" component={NewsScreen} 
            options={{
                title:'新闻列表',
                headerStyle:{
                    backgroundColor:'#fff'
                }
            }}
        />
        <Stack.Screen name="NewsDetail" component={DetailScreen} 
            options={{
                title:'新闻详情',
                headerStyle:{
                    backgroundColor:'#fff'
                }
            }}
        />
      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
