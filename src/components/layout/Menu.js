import React from "react";
import { View , Text } from "react-native";

export default class Menu extends React.Component{
  render(){
    return (
      <View>
       <Text>Its Menu</Text>
       <Text>Home</Text>
       <Text>About</Text>
       <Text>Close</Text>
      </View>
    );
  }
}
