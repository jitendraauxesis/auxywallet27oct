import React, { Component } from 'react';
import { AppRegistry } from 'react-native';



import Routes from './src/routes/Routes';

class App extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default App

AppRegistry.registerComponent('App', () => App);
//import renderer from 'react-test-renderer';
// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });


// import React from 'react';
// import { StyleSheet,Modal,WebView, Text, View, Image, ScrollView, Button, TouchableOpacity,TouchableHighlight, Icon } from 'react-native';
//
//
// import  Home  from './src/Home';
//
// export default class App extends React.Component {
//
//   constructor(props)
//     {
//         super(props);
//
//     }
//
//   render() {
//     return (
//          <View>
//             <Home />
//          </View>
//     );
//
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:  '#eee',
//     alignItems: 'center',
//   },
//   getstartbutton:{
//     margin:2,
//     width:'100%',
//     color:'#841584',
//     borderRadius:160,
//     borderColor:'rgba(0,0,0,0.2)',
//   },
//   submit:{
//     marginRight:40,
//     marginLeft:40,
//     marginTop:10,
//     paddingTop:20,
//     paddingBottom:20,
//     backgroundColor:'#841584',
//     borderRadius:100,
//     borderWidth: 1,
//     width:150,
//     borderColor:'rgba(0,0,0,0.2)',
//   },
//   submitText:{
//       color:'#fff',
//       textAlign:'center',
//       fontSize:16
//   }
// });
