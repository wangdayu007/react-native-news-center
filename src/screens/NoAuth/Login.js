import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Platform, ScrollView, TextInput, TouchableOpacity, TouchableHighlightBase, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { loginSuccess } from '../../redux/actions/User'

class Login extends Component {

  constructor(){
    super()

    this.state = {
        username: '',
        password: '',
        validateUserName: false,
        isValidUser: true,
        secureTextEntry: true,
        isValidPassword: true,
    }
  }  

  validateUserName = (val)=>{
    if (val.trim().length >= 2){
        this.setState({
            username: val,
            validateUserName: true,
            isValidUser: true
        })
    } else {
        this.setState({
            username: val,
            validateUserName: false,
            isValidUser: false
        })
    }
  }

  handleValideUser = (val)=>{
    if (val.trim().length >= 2){
        this.setState({
            isValidUser: true
        })
    } else {
        this.setState({
            isValidUser: false
        })
    }
  }

  validatePassword = (val)=>{
    if (val.trim().length >= 8){
        this.setState({
            password: val,
            isValidPassword: true
        })
    } else {
        this.setState({
            password: val,
            isValidPassword: true
        })
    }
  }

  updateSecureTextEntry = () =>{
    this.setState({
        secureTextEntry : !this.state.secureTextEntry
    })
  }

  handleLogin = ()=>{
    if (this.state.username.length == 0 || this.state.password.length == 0){
        Alert.alert('输入错误','用户名和密码不能为空')
    }

    if (this.state.username.length < 2){
        Alert.alert('用户名太短','用户名最短为两位')
        return 
    }

    if (this.state.password.length < 8){
        Alert.alert('密码太短','密码最短为八位')
        return 
    }

    let userInfo  = {
        username: this.state.username,
        password: this.state.password
    }

    // 调用接口，执行登录
    this.props.loginSuccess(userInfo)
    Alert.alert('成功','登录成功')
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
            source={{uri: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0419%2F20a4bfd8j00rakl0x001sc000hs012ic.jpg&thumbnail=660x2147483647&quality=80&type=jpg'}}
            resizeMode='cover'
            style={styles.image}
        >
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Welcome!
                </Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                    {/* 用户名输入校验 */}
                    <View
                     style={styles.action}
                    >
                        <Ionicons name={'person-outline'} size={20}/>
                        <TextInput
                            style={styles.input}
                            placeholder='请输入用户名'
                            value={this.state.username}
                            onChangeText={(val)=> this.validateUserName(val)}
                            onEndEditing={(e) => this.handleValideUser(e.nativeEvent.text)}
                        />
                        {
                            this.state.validateUserName ?
                            <Animatable.View animation='bounceIn'>
                                <Ionicons name={'checkmark-circle-outline'} size={20} />
                            </Animatable.View>
                            :
                            null
                        }
                    </View>
                    {
                        this.state.isValidUser ? 
                        null
                        :
                        <Animatable.View animation='fadeInLeft' duration={500}>
                            <Text style={styles.errorMsg}>用户名最短为 2 位</Text>
                        </Animatable.View>
                    }

                    {/* 密码输入校验 */}
                    <View
                     style={styles.action}
                    >
                        <Ionicons name={'lock-closed-outline'} size={20}/>
                        <TextInput
                            style={styles.input}
                            placeholder='密码'
                            secureTextEntry = {this.state.secureTextEntry ? true : false}
                            onChangeText={(val)=> this.validatePassword(val)}
                        />
                        <TouchableOpacity onPress={this.updateSecureTextEntry}>
                        {
                            this.state.secureTextEntry ?
                            <Ionicons name={'eye-off-outline'} size={20} />
                            :
                            <Ionicons name={'eye-outline'} size={20} />
                        }
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.isValidPassword ? 
                        null
                        :
                        <Animatable.View animation='fadeInLeft' duration={500}>
                            <Text style={styles.errorMsg}>密码最短为 8 位</Text>
                        </Animatable.View>
                    } 

                    {/* 按钮 */}
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => this.handleLogin()}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {color: '#fff'}]}>登录</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.signIn,{
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                            onPress={() => this.props.navigation.navigate('Resigter')}
                        >
                            <Text style={[styles.textSign, {color: '#009387'}]}>注册</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </ImageBackground>
      </View>
    )
  }
}

const mapStateToProps = state =>{
    return {
        isLogin: state.User.isLogin
    }
}

export default connect(mapStateToProps, {loginSuccess})(Login)
const styles = StyleSheet.create({
    container:{
        flex: 1
    },  
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    header:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: Platform.OS === 'ios' ? 150: 100
    },
    headerText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    footer:{
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    input:{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    errorMsg:{
        color: 'red',
        fontSize: 14
    },
    button:{
        marginVertical: 10,
        flex:1,
        justifyContent:'center',
        flexWrap:'wrap'
    },
    signIn:{
        width: 370,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    textSign:{
        fontSize: 18
    }
})
