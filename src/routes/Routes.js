import React from 'react';
import { Route, Router, Scene } from 'react-native-router-flux';

import Welcome from '../Welcome.js';
import Home from '../components/home/Home.js';
import About from '../components/about/About.js';
import Signup from '../components/signup/Signup.js';
import Newtoken from '../components/signup/Newtoken.js';
import Password from '../components/signup/Password.js';
import Recoverfund from '../components/recover/Funds.js';

// import Start from '../components/home/Start.js';
// import MyHomeScreen from '../components/home/Start.js';
// import MyNotificationsScreen from '../components/home/Start.js';

import Drawers from '../components/layout/Drawers.js';


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "welcome" component = {Welcome} title = "Welcome"  initial = {true} hideNavBar={true} />

         <Scene key = "home" component = {Home} title = "Home Page"   hideNavBar={true} />

         <Scene key = "signup" component = {Signup} title = "Signup"    hideNavBar={true} />
         <Scene key = "newtoken" component = {Newtoken} title = "Newtoken" hideNavBar={true} />
         <Scene key = "password" component = {Password} title = "Password" hideNavBar={true} />

         <Scene key = "about" component = {About} title = "About" />
         <Scene key = "recoverfund" component = {Recoverfund}  title="recoverfund" hideNavBar={true} />


         <Scene key="drawers" component={Drawers}  hideNavBar={true}  />



      </Scene>
   </Router>
)

function requireAuth(){
  console.log("Entering to welcome");
  // replace({
  //   pathname:'signup'
  // });
}

// const Routes = () => (
//    <Router>
//
//     <Route name="auth">
//       <Router key = "root">
//          <Route key = "welcome" component = {Welcome} title = "Welcome"  onEnter={requireAuth} hideNavBar={true} />
//          <Route key = "home" component = {Home} title = "Home" initial = {true} />
//          <Route key = "signup" component = {Signup} title = "Signup" hideNavBar={true} />
//          <Route key = "about" component = {About} title = "About" />
//          <Route key = "recoverfund" component = {Recoverfund}  title="recoverfund" hideNavBar={true} />
//       </Router>
//     </Route>
//
//    </Router>
// )

export default Routes;
/**
keystore
my-reactauxy2.keystore
MYAPP_RELEASE_STORE_FILE=my-reactauxy2.keystore
MYAPP_RELEASE_KEY_ALIAS=my-alias-auxy
MYAPP_RELEASE_STORE_PASSWORD=pass@1234
MYAPP_RELEASE_KEY_PASSWORD=pass@1234
*/
