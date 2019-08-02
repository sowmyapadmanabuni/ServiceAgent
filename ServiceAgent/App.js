/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
// import Login from './src/screens/Login';
  // import  EnrolAssociation from './src/screens/Association/EnrolAssociation';
// import AddDevice from './src/screens/DeviceManagement/AddDevice';
// import PanDetails  from './src/screens/Association/PanDetails';
import store from './src/store';
import Navigation from "./src/Navigation";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import OtpScreen from './src/screens/Auth/OtpScreen';
// import TableScreen from './src/screens/TableScreen';
//import AdministratorDetails from "./src/screens/Association/AdministratorDetails";

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          {/* <Login/> */}
          {/* <EnrolAssociation/> */}
          {/* <AddDevice/> */}
          {/* <OtpScreen/> */}
          {/* <PanDetails/> */}
          <Navigation />
          {/* <TableScreen/> */}
          {/* <AdministratorDetails/> */}
        </Provider>
      </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
