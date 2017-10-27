import React from 'react';
import { StyleSheet,Modal,WebView, Text, View, Image, ScrollView, Button, TouchableOpacity,TouchableHighlight, Icon } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import  Home  from './src/Home';
const remote = './img/bitcoin.png';

var ToastAndroid = require('NativeModules').ToastAndroid;

export default class App extends React.Component {

  constructor(props)
    {
        super(props);

    }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  callMe(){
    console.log("callMe");

    //this.navigator.push({Page: Home});

    navigate('Home', { name: 'Jane' })

  };

  render() {


    const resizeMode = 'cover';
    const text = 'Powered by Auxesis';

    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={require('./img/bitcoin2.png')}
          />
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            position:'absolute',
            top:0,
            left:0,
            margin:16
          }}
        >
          <Image source={require('./img/auxy.png')} style={styles.auxylogo}/>
        </View>

        <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false);ToastAndroid.show('Thanks to visit!', ToastAndroid.LONG);}}
          >
          <WebView
            source={{uri: 'http://wallet.auxledger.com/'}}
            style={{marginTop: 20}}
          />
        </Modal>


      </View>

        <View
          style={{
            flex: 3,
            backgroundColor: 'transparent',
            position:'absolute',
            marginBottom:100,
            bottom:0
          }}
        >
          <TouchableHighlight
            style={styles.submit}
            onPress={() => {this.callMe();}}
            underlayColor='#841584'>
              <Text style={styles.submitText}>Get Started</Text>
          </TouchableHighlight>
        </View>

        <View
          style={{
            flex: 4,
            backgroundColor: 'transparent',
            position:'absolute',
            bottom:0,
            marginBottom:5
          }}
        >

          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color:'grey'
            }}
            onPress={()=>{this.setModalVisible(true);}}
          >
            {text}
          </Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#eee',
    alignItems: 'center',
  },
  getstartbutton:{
    margin:2,
    width:'100%',
    color:'#841584',
    borderRadius:160,
    borderColor:'rgba(0,0,0,0.2)',
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#841584',
    borderRadius:100,
    borderWidth: 1,
    width:150,
    borderColor:'rgba(0,0,0,0.2)',
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize:16
  }
});
