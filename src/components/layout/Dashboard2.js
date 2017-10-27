import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from '../home/Home.js';
import About from '../about/About.js';
import Menu from '../layout/Menu.js';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

const Mydrawer = DrawerNavigator({
  Home:{ screen:Home },
  About:{ screen:About }
},
{
  drawerWidth: 250,
  drawerPosition: 'left',
  contentComponent:props=><Menu {...props}/>
});

const Dashboard2 = StackNavigator({
  Home: {screen: Mydrawer }
});
export default Dashboard2;
