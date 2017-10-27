import React from 'react';
import { BackHandler,Icon, AsyncStorage,TextInput, Modal, WebView, StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity,TouchableHighlight } from 'react-native';

import { Animated } from 'react-native';

//import { Icon } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';

var ToastAndroid = require('NativeModules').ToastAndroid;


export default class Funds extends React.Component{
   state = {
      myState: "fgfdgfd deserunt mollit anim id est laborum.",
      modalVisible: false,
      passphrase:'',
      fadeAnim:new Animated.Value(0),
      successResult:"Done."
   }
   updateState = () => this.setState({ myState: 'The state is updated' })

   constructor(props)
   {
       super(props);
   }

   componentDidMount(){
     BackHandler.addEventListener('hardwareBackPress', function() {
       // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
       // Typically you would use the navigator here to go to the last state.

       console.log("inside BackHandler in signup");
     });

     //Animated.spring(1000, [
       Animated.timing(
         this.state.fadeAnim,
         {
           toValue:2,
           duration:2000
         }
       ).start();
     //]);

   }

   componentWillUnmount(){
     BackHandler.removeEventListener('hardwareBackPress', function() {
       // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
       // Typically you would use the navigator here to go to the last state.

       console.log("inside BackHandler removed in signup");
     });
   }

   callMe(){
     let passphrase = this.state.passphrase;
     if(passphrase=="" || passphrase ==null){
       ToastAndroid.show("Provide your passphrase",ToastAndroid.SHORT);
     }else{
       console.log(this.state.passphrase);
       this.setState({passphrase:''});
       console.log(this.state.successResult);
       alert(this.state.passphrase);
     }
   }

   cancel(){
     console.log(this.props.navigation);
     //this.props.navigation.navigate('signup');
     this.props.navigation.dispatch(NavigationActions.reset({
       index:0,
       actions:[
         NavigationActions.navigate({routeName:'signup'})
       ]
     }));
   }

   render() {
      const resizeMode = 'cover';
      const text = 'Powered by Auxesis';

      let { fadeAnim } = this.state;

      return (
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: '#fff',
              justifyContent: 'center',
              top:0,
              left:0,
              height:'8%',
              width:'100%'
            }}
          >
            <Image source={require('../../img/auxy.png')} style={styles.auxylogo}/>
          </View>


          <View style={styles.fundsdiv}>
              <Animated.View
                style={{...this.props.style,
                opacity:fadeAnim}}>
              <Text style={styles.emailtext}>Recover Funds</Text>
              <Text style={styles.recovertext}>Recover bitcoins from your lost wallet.</Text>
              <Text style={styles.recoverfunds}>
                 Step 1 of 2: Enter 16 word passphrase
              </Text>
              <View style={styles.recoverredview}>
                <Text style={styles.recoverredtext}>You should always pair login if you have access to your Wallet ID and password. Recovering your funds will create a new Wallet ID.</Text>
              </View>
              <Text style={styles.recoverfundspass}>
                 Your recovery passphrase
              </Text>
              <Text style={styles.recoverfundspasstext}>
                 Enter your 16 recovery words with spaces to recover your funds & transactions
              </Text>
              <TextInput style = {styles.textInput}  placeholder="Passphrase type here..."
                onChangeText={(passphrase)=>this.setState({passphrase})} value={this.state.passphrase}/>
              <View style={styles.buttonview}>
                <Button
                onPress={()=>{this.callMe();}}
                title="Continue"
                color="#10ADE4"
                style={styles.buttonview2}
                />
                <Button
                onPress={()=>{this.cancel();}}
                title="Cancel"
                color="#d1d0cc"
                style={styles.buttonview1}
                />
              </View>
              </Animated.View>
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
    backgroundColor:  '#004A7C',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  },
  getstartbutton:{
    margin:2,
    width:'100%',
    color:'#337ab7',
    borderRadius:160,
    borderColor:'rgba(0,0,0,0.2)',
  },
  submit:{
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#337ab7',
    borderRadius:100,
    borderWidth: 1,
    width:250,
    borderColor:'rgba(0,0,0,0.2)',
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize:16
  },
  fundsdiv:{
    backgroundColor:'#fff',
    width:'95%',
    padding:15,
    borderRadius:10,
    height:'75%',
    marginTop:'10%',
    marginRight:'10%',
    marginLeft:'10%'
  },
  emailtext:{
    fontSize:24,
    // fontWeight:'bold',
    marginTop:'5%',
    fontFamily:'inherit'
  },
  textInput:{
    height:50,
    textAlign:'center',
    marginTop:'5%'
  },
  recoverfunds:{
    fontWeight:'bold',
    textAlign:'left',
    color:'#5e6e88',
    marginTop:'5%'
  },
  auxybutton:{
    alignItems:'center',
    bottom:0,
    left:0,
    right:0,
    justifyContent:'center',
    marginBottom:'8%',
    marginTop:'10%',
    width:'100%'
  },
  icon:{
    position:'absolute',
    left:0,
    marginLeft:'16%'
  },
  recoverredview:{
      position:'relative',
      alignItems:'center',
      justifyContent:'center',
      marginTop:5,
      borderColor:'red',
      borderWidth:1,
      borderRadius:10,
      paddingTop:4,
      paddingBottom:4
  },
  recoverredicon:{
    left:0,
    position:'absolute',
    color:'#F26C57'
  },
  recoverredtext:{
    color:'#F26C57',
    textAlign:'justify',
    marginLeft:40
  },
  recoverfundspass:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'left',
    color:'#858585',
    marginTop:'5%'
  },
  recoverfundspasstext:{
    color:'#777',
    fontSize:12
  },
  buttonview:{
    width:'100%',
  },
  buttonview1:{
    width:'50%',
    left:0
  },
  buttonview2:{
    width:'50%',
    right:0
  },
  auxylogo:{
    width:130,
    height:50,
    marginLeft:'8%'
  }
});
