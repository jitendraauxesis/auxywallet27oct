import React from 'react';
import {
  View,Text, Header
} from 'react-native';
//import { Header } from 'react-native-elements';

export default class HeaderLayout extends React.Component {
  render(){
    return (
      <Header
        leftComponent={{ icon: 'menu', color: '#ff0' }}
        centerComponent={{ text: 'Home', style: { color: '#ff0' } }}
        rightComponent={{ icon: 'home', color: '#ff0' }}
      />
    )
  }
}
/*<Header
leftComponent={{ icon: 'menu', color: '#fff',onPress={()=>{console.log("menu item");}} }}
centerComponent={{ text: 'Home', style: { color: '#fff' } }}
rightComponent={{ icon: 'home', color: '#fff',onPress={()=>{console.log("home item");}} }}
/>*/
