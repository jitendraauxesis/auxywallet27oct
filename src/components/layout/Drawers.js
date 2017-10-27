import React, { Component } from 'react';
import {  Text,ToolbarAndroid,View,ScrollView,StatusBar, StyleSheet, Image,TouchableOpacity,AsyncStorage, } from 'react-native' ;

import Drawer from 'react-native-drawer';

import Toolbar from './Toolbar.js';

import { Actions } from 'react-native-router-flux';
var userArray = [];

export default class Drawers extends Component {

	constructor(props){
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeControlPanel = this.closeControlPanel.bind(this);

  }
  closeControlPanel = () => {
    this._drawer.close()

  };
  openDrawer = () => {
    console.log('Clicked');
    this._drawer.open()
  };
   render(){
		return (
  		<Drawer
  			type="overlay"
  			ref = {(ref)=> this._drawer = ref }
  			content={
  			  <View style={{backgroundColor:'cyan',flex:1}}>
  				 <Text>Menu 1</Text>
  				 <Text>Menu 2</Text>
           <Text>Menu 3</Text>
           <Text>Menu 4</Text>
  			  </View>
  			}
  			openDrawerOffset={0.2}
  			tapToClose={true}
  			panCloseMask={0.2}
  			closedDrawerOffset={-3}
  			styles={drawerStyles}
  			tweenHandler={(ratio)=>({
  			  main:{opacity:(2-ratio)/2}
  			})}

  			>
         {this.props.data}
  		</Drawer>
		);
    }
}
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {},
};
//<Toolbar reference={this.openDrawer} title = {this.props.screentitle}/>
