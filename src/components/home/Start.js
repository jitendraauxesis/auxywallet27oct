import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native';
import { Constants } from 'expo';


import { DrawerNavigator } from 'react-navigation';

export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    };

    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
  }

export default  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications'
    };

    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

  const Start = DrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  },{
    drawerWidth: 200,
    drawerPosition: 'right',
    // contentComponent: props => <Home {...props} />,
    // drawerBackgroundColor: 'transparent'
  });

export default Start;
