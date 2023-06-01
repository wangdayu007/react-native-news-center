import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import {getNews} from '../../utils/api'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Index extends Component {

  constructor(){
    super()

    this.state = {
      type: 'top',
      newsList: [],
      types: [
        {key: 'top', title: '头条'},
        {key: 'shehui', title: '社会'},
        {key: 'guonei', title: '国内'},
        {key: 'guoji', title: '国际'},
        {key: 'yule', title: '娱乐'},
        {key: 'tiyu', title: '体育'},
        {key: 'junshi', title: '军事'},
        {key: 'keji', title: '头条'},
        {key: 'caijing', title: '财经'},
        {key: 'shishang', title: '时尚'}
      ],
      initialTypeIndex:0
    }
  }
  componentDidMount = () => {
    this.getList()
  }

  getList = ()=> {
    const type = this.state.type
    console.log('事实获取数据了')
    let res = getNews()
    this.setState({
      newsList: res.result.data
    })
  }

  newsItem = ({index, item})=> {
    if (item.thumbnail_pic_s02 && item.thumbnail_pic_s03){
      return this.newsItemThreeImages({index, item})
    } else {
      return this.newsItemSingleImage({index, item})
    }
  }

  newsItemSingleImage = ({index, item})=> {
    return (
      <TouchableOpacity
        onPress={()=> this.props.navigation.navigate('NewsDetail',{
          url: item.url,
          title: item.title,
          uniquekey: item.uniquekey
        })}
        style={{marginVertical: 5}}
      >
        <View style={[styles.newsItemContainer]}>
          <View style={[styles.newsItem1Text]}>
            <Text 
              style={[styles.newsItem1Title]}
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <View style={styles.newsItem1Footer}>
              <Text 
                style={styles.newsItem1Meta}
                numberOfLines={1}
              >
                {item.date} {item.author_name}
              </Text>
              <Ionicons name={'heart-outline'} size={18} />
            </View>
          </View>
          <Image
            source={{uri: item.thumbnail_pic_s}}
            style={[styles.newsItem1Image]}
          />
        </View>
      </TouchableOpacity>
    )
  }

  newsItemThreeImages = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={()=> this.props.navigation.navigate('NewsDetail',{
          url: item.url,
          title: item.title,
          uniquekey: item.uniquekey
        })}
        style={{marginVertical: 5}}
      >
        <View style={[styles.threePicsItemContainer]}>
          <Text 
            style={[styles.newsItemHeader]}
            numberOfLines={2}
            ellipsizeMode='tail'
          >
            {item.title}
          </Text>
        </View>

        <View style={[styles.newsItemImageContainer]}>
          <Image
            source={{uri: item.thumbnail_pic_s}}
            style={[styles.newsItemImage]}
          />
          <Image
            source={{uri: item.thumbnail_pic_s02}}
            style={[styles.newsItemImage]}
          />
          <Image
            source={{uri: item.thumbnail_pic_s03}}
            style={[styles.newsItemImage]}
          />
        </View>
        
        <View style={styles.newsItem1Footer}>
          <Text 
            style={styles.newsItem1Meta}
            numberOfLines={1}
          >
            {item.date} {item.author_name}
          </Text>
          <Ionicons name={'heart-outline'} size={18} />
        </View>
      </TouchableOpacity>
    )
  }

  newsType = ({index, item})=>{
    let isActive = item.key == this.state.type
    return (
      <TouchableOpacity
        onPress={() =>{
          this.setState({
            type: item.key,
            initialTypeIndex: index > 3 ? index - 3 : 0
          },() => {
            this.getList()
          })
        }}
      >
        <View style={{width: 65, height: 46, padding: 10, backgroundColor : isActive ? "#dfb" : "#fff"}}>
          <Text
            style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: isActive ? 'red' : '#333'}}
          >{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  
  render() {
    return (
      <View>
        <FlatList
          data={this.state.newsList}
          renderItem={this.newsItem}
          keyExtractor={item => item.uniquekey}
          ListHeaderComponent={() =>{
            return <FlatList
              horizontal={true}
              data = {this.state.types}
              keyExtractor={item => item.key}
              renderItem={this.newsType}
              initialScrollIndex={this.state.initialTypeIndex}
            />
          }}
          ListFooterComponent={()=>{
            return <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 10}}>----已经到底了----</Text>
          }}
          ItemSeparatorComponent={() =>{
            return <View
              style={{
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                marginVertical: 5
              }}
            >
            </View>
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  newsItemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  newsItem1Text:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 2/3 - 20
  },
  newsItem1Title:{
    paddingHorizontal: 10,
    fontSize: 18,
    width: Dimensions.get('window').width * 2/3,
    marginBottom: 20,
    color: '#000'
  },
  newsItem1Footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  newsItem1Meta: {
    fontSize: 13
  },
  newsItem1Image: {
    width: Dimensions.get('window').width / 3,
    height: 90,
    marginVertical: 5,
    marginHorizontal: 10
  },
  newsItemHeader:{
    paddingHorizontal: 10,
    fontSize: 18,
    width: Dimensions.get('window').width,
    color: '#000'
  },
  threePicsItemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  newsItemImageContainer:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: Dimensions.get('window').width,
    marginVertical: 5,
    marginHorizontal: 10
  },
  newsItemImage:{
    width: Dimensions.get('window').width / 3.75,
    height: 90,
    marginVertical: 5,
    marginHorizontal: 10
  }
})
