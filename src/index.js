import React, { Component } from 'react'
import MainTab from './routes/index'
import { connect } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/NoAuth/Login'

const Stack = createNativeStackNavigator()

class index extends Component {
  render() {
    return (
      <>
      {
        this.props.isLogin 
        ? 
        (<MainTab />)
        :
        (
          <Stack.Navigator
          headerMode = 'none'
            initialRouteName='Login'
          >
            <Stack.Screen name='Login' component={LoginScreen} />
          </Stack.Navigator>
        )
      }
      </>
      
    )
  }
}

const mapStateToProps = state =>{
  return {
    isLogin: state.User.isLogin
  }
}

export default connect(mapStateToProps, null)(index)

