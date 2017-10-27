import React from 'react';
import { AsyncStorage,Modal, WebView, StyleSheet,StatusBar, Text, View, Image, ScrollView, Button, TouchableOpacity,TouchableHighlight, Icon } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';

import  HeaderLayout from '../layout/HeaderLayout.js';
import { Header } from 'react-native-elements';

import  Drawers from '../layout/Drawers.js';

import NavigationBar from 'react-native-navbar';

import { Expo,Exponent } from 'expo';

import Drawer from 'react-native-drawer';

var ToastAndroid = require('NativeModules').ToastAndroid;



export default class Home2 extends React.Component{
   state = {
      myState: "fgfdgfd deserunt mollit anim id est laborum.",
      modalVisible: false,
      setIfAuth:""
   }


   openDrawer(){
     console.log("open");
     this.props.navigation.navigate('Drawer'); // open drawer
   }
   closeDrawer(){
     this.props.navigation.navigate('DrawerClose'); // close drawer
   }

   componentDidMount = () => AsyncStorage.getItem('setIfAuth').then(
     (value)=>{
        //  if(value == "N"){
        //    this.props.navigation.dispatch(NavigationActions.reset({
        //      index:0,
        //      actions:[
        //        NavigationActions.navigate({routeName:'signup'})
        //      ]
        //    }));
        //  }else{
        //     console.log(this.state+"\n"+value);
        //  }
         console.log(this.state+"\n"+value);
     }
    );


   updateState = () => this.setState({ myState: 'The state is updated' })

   constructor(props)
   {
       super(props);
       console.log(this.props);
   }


   setModalVisible(visible) {
     this.setState({modalVisible: visible});
   }


   callMe(){
     console.log("callMe");
     Actions.about();
   };

   render() {
     const rightButtonConfig = {
      title: 'Next',
      handler: () => {
        alert('hello!');
        console.log("clicked");
      },
      tintColor:'#fff'
    };

  //  var icon1 = (<View><Icon name='touch-app' color="#fff"/></View>);

    const leftButtonConfig = {
     title: 'MenuBtn',
     handler: () => {
       console.log("clicked2");
       this.openDrawer();
     },
     tintColor:'#fff'
   };

    const titleConfig = {
      title: 'Home',
      style:{
        color:'#fff'
      }
    };

    const stats = {
      tintColor:"red",
      style:"dark-content"
    }

     var contents = (
       <View style={styles.container}>
            <StatusBar
              backgroundColor="#337ab7"
            />
            <NavigationBar
              containerStyle={styles.navbar}
              tintColor="#337ab7"
              statusBar={stats}
              leftButton={leftButtonConfig}
              title={titleConfig}
              rightButton={rightButtonConfig}
            />
           <View style={styles.homeView}>
               <Text>Home page test inside app </Text>
               <Image source={require('../../img/auxy.png')} style={styles.auxylogo}/>
           </View>

          <Button
             onPress={() => this.openDrawer()}
             title="openDrawer"
           />
           <Button
              onPress={() => this.closeDrawer()}
              title="closeDrawer"
            />
       </View>
     );

     var content = (
       <View>
        <Text>HomeController</Text>
       </View>
     );

      return (
        <Drawers data={contents} screentitle='Home Page'/>
      );
   }

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  containerBar:{
    flex:1,
    backgroundColor:"#337ab7"
  },
  headerLayout:{
    flex:1,
    backgroundColor:'#004A7C',
    borderColor:'#004A7C',
  },
  homeView:{
    flex:3,
    height:'100%'
  },
  statusbar:{
    height:24
  },
  navbar:{
    marginTop:24,
    height:'8%',
    backgroundColor:'cyan'

  }
});
//<Drawers data={contents} screentitle={'Home Page'}/>
