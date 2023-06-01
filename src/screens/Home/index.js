import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView,SafeAreaView, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import Swiper from 'react-native-swiper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {getCity, getQueue, getSevenDays} from '../../utils/api'
import LinearGradient from 'react-native-linear-gradient'
import weatherIcons from '../../utils/weatherIcons'

export default class Index extends Component {

  constructor(){
    super()

    this.state={
      cityInfo:{},
      queueInfo:[],
      sevenDays:[]
    }
  }

  componentDidMount(){

    // 获取当前城市的七天天气情报
    getCity().then(res=>{
      console.log('cityInfo:',res)
      this.setState({
        cityInfo: res
      })
    })

    // 生活指数
    getQueue().then(res=>{
      console.log('ppp:',res)
      this.setState({
        queueInfo:res.list.slice(0,9)
      })
    })

    // 获取七天的天气预报
    getSevenDays().then(res=>{
      console.log('seven:',res)
      this.setState({
        sevenDays: res.data
      })
    })
  }

  queueItem = ({index, item})=>{
    return (
      <TouchableOpacity
        key={'index' + item.city}
        // onPress={()=>{
        //   alert(item.city)
        // }}
      >
        <View style={[styles.indexItem]}>
          <Text style={[styles.indexName]}>{item.city}</Text>
          <Text style={[styles.indexBase]}>{item.aqi_level}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={[styles.container]}>
            <TouchableOpacity onPress={() => alert('扫你吗')}>
              <View style={[styles.itemBase]}>
                <Ionicons name='scan-outline' size={40} color={'#fff'}></Ionicons>
                <Text style={[styles.fontBase]}>扫一扫</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('开始付款')}>
              <View style={[styles.itemBase]}>
                <Ionicons name='qr-code-outline' size={40} color={'#fff'}></Ionicons>
                <Text style={[styles.fontBase]}>付款码</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('出行')}>
              <View style={[styles.itemBase]}>
                <Ionicons name='trail-sign-outline' size={40} color={'#fff'}></Ionicons>
                <Text style={[styles.fontBase]}>出行</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('卡包')}>
              <View style={[styles.itemBase]}>
                <Ionicons name='card-outline' size={40} color={'#fff'}></Ionicons>
                <Text style={[styles.fontBase]}>卡包</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* 轮播图代码 */}
          <Swiper
            style={[styles.wrapper]}
            showsButtons={true}
            autoplay={true}
          >
            <Image 
              style={[styles.slideImage]}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />
            <Image 
              style={[styles.slideImage]}
              src={'https://img.fatiao.pro/new/temp/2018/09/26/153794484118863655.jpg'}
            />
            <Image
              style={[styles.slideImage]}
              src={'https://www.fjzht.com/d/soft/2103/05/img_20210305155653cqx7j2.jpg'}
            />
          </Swiper>

          {/* 城市天气信息 */}
          <View style={[styles.city]}>
            <Text style={[styles.cityText]}>
              { this.state.cityInfo.country} { this.state.cityInfo.city}
            </Text>
          </View>

          {/* 城市生活指数 */}
          <View style={[styles.indexContainer]}>
            <FlatList 
              data = {this.state.queueInfo}
              renderItem={this.queueItem}
              keyExtractor={item => item.name}
              horizontal={true}
            />
          </View>

          {/* 未来三天城市的天气状况 */}
          <View style={[styles.dailyContainer]}>
            {
              this.state.sevenDays.map((item, index)=>{
                return <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ddd','#333']}
                  key={'weather'+ index}
                  style={[styles.dailyItem]}
                >
                  <Text style={[styles.dailyItemTitle]}>{item.date}</Text>
                  <View style={[styles.dailyItemContent]}>
                    <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                      <Image
                        style={[styles.weatherIcon]}
                        source={weatherIcons['100']}
                      />
                      <Text>{item.wea} {item.tem_day}°</Text>
                    </View>
                    <View>
                      <Image
                        style={[styles.weatherIcon]}
                        source={weatherIcons['100']}
                      />
                      <Text>{item.win} {item.tem_night}°</Text>
                    </View>
                  </View>
                </LinearGradient>
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row'
  },
  itemBase:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03B38D',
    height: 90,
    width: Dimensions.get('window').width / 4
  },
  fontBase:{
    color: '#fff',
    fontSize: 14
  },
  wrapper:{
    height: 250
  },  
  slideImage:{
    width: Dimensions.get('window').width,
    height: 250
  },
  city:{
    flex:1,
    justifyContent: 'center'
  },
  cityText:{
    fontSize: 24,
    marginHorizontal: 10
  },
  indexContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 10
  },
  indexItem:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#deb',
    width: Dimensions.get('window').width / 3 - 10,
    height : 80,
    marginTop: 10,
    marginRight: 10
  },
  indexName: {
    color: '#222',
    fontSize: 14
  },
  indexBase: {
    color: '#00b38a',
    fontSize: 15
  },
  dailyContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10
  },
  dailyItem:{
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    width: Dimensions.get('window').width - 20,
    marginTop: 10
  },
  dailyItemTitle:{
    fontSize: 20,
    color: '#eee',
    marginTop: 10
  },
  dailyItemContent:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 40,
    alignItems: 'center',
    marginBottom: 10
  },
  weatherIcon:{
    width: 30,
    height: 30,
    marginHorizontal: 10
  }
})
