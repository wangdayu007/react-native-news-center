import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
// import { WebView } from 'react-native-webview'

export default class Detail extends Component {
  componentDidMount = () => {
    console.log('ffffffff:',this.props)
  }
  
  render() {
    return (
      // <WebView
      //   source={{uri: 'https://m.baidu.com'}}
      //   style={{marginTop: 20}}
      // >  
      // </WebView>
      <View>
        <Text>
          {this.props.route.params.url}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
