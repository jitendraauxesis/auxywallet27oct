import React from 'react';
import { BackHandler,StatusBar, AsyncStorage, Modal, WebView, StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity,TouchableHighlight, Icon } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';

var ToastAndroid = require('NativeModules').ToastAndroid;


export default class Home extends React.Component{
   state = {
      myState: "fgfdgfd deserunt mollit anim id est laborum.",
      modalVisible: false,
   }
   updateState = () => this.setState({ myState: 'The state is updated' })

   constructor(props)
   {
       super(props);


   }

   componentDidMount(){
     //AsyncStorage.setItem('setIfAuth','N');

     AsyncStorage.getItem('setIfAuth').then((v)=>{
       console.log(v);
       ifauth = v;
       if(!ifauth || ifauth==undefined  || ifauth == "N"){
         console.log(this.state+"\n"+ifauth);
       }else{
          this.props.navigation.dispatch(NavigationActions.reset({
            index:0,
            actions:[
              NavigationActions.navigate({routeName:'home'})
            ]
          }));
       }
     });

     BackHandler.addEventListener('hardwareBackPress', function() {
       Alert.alert(
         'Closing app...',
         'Sure want to close?',
         [
           {
             text:'Nope',style:'cancel',onPress:()=>{console.log("cancel click");}
           },
           {
             text:'Yes',onPress:()=>{
               console.log("yes click");
               BackHandler.exitApp();
             }
           }
         ]
       )
     });
   }

   txtdum(){
     let ifauth = "";
     AsyncStorage.setItem('setIfAuth','N');
     console.log("Local Storage Values To Be Stored");
     AsyncStorage.getItem('setIfAuth').then((v)=>{
       console.log(v);
       ifauth = v;
     });

     if(ifauth == "N"){
       console.log("in if");
     }else{
       console.log("in else");
     }
   }

   setModalVisible(visible) {
     this.setState({modalVisible: visible});
   }


   callMe(){
     console.log("callMe");
     //Actions.signup();
     this.props.navigation.dispatch(NavigationActions.reset({
      index:0,
      actions:[
        NavigationActions.navigate({routeName:'signup'})
      ]
     }));
   };

   render() {
      const resizeMode = 'cover';
      const text = 'Powered by Auxesis';
      const StatusBarhidden = true;
      return (
        <View style={{flex:1,alignItems:'center'}}>
           <StatusBar
             backgroundColor="transparent"
             barStyle="light-content"
             hidden={StatusBarhidden}
           />
          <View
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              style={{
                resizeMode,
                width:'100%'
              }}
              source={require('./img/auxywall.png')}
            />
          </View>

          <View
            style={{
              backgroundColor: 'transparent',
              justifyContent: 'center',
              position:'absolute',
              marginTop:'2%',
              top:0,
              left:0,
              flex:1
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
              backgroundColor: 'transparent',
              position:'absolute',
              marginBottom:100,
              bottom:0,
              flex:2
            }}
          >
            <TouchableHighlight
              style={styles.submit}
              onPress={() => {this.callMe();}}
              underlayColor='#337ab7'>
                <Text style={styles.submitText}>Get Started</Text>
            </TouchableHighlight>
          </View>


          <View
            style={{
              backgroundColor: 'transparent',
              position:'absolute',
              bottom:0,
              marginBottom:5
            }}
          >

            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color:'#333',
                fontStyle:'italic'
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
    backgroundColor:  '#eee',
    alignItems: 'center',
  },
  getstartbutton:{
    margin:2,
    width:'100%',
    color:'#841584',
    borderColor:'rgba(0,0,0,0.2)',
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:12,
    paddingBottom:12,
    backgroundColor:'#337ab7',
    borderRadius:5,
    borderWidth: 1,
    width:180,
    height:50,
    borderColor:'rgba(0,0,0,0.2)',
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize:16,
  }
});
