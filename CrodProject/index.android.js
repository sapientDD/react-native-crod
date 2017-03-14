import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import LauncherScreen from './app/screens/LauncherScreen'
import {Router, Scene} from 'react-native-router-flux';

class CrodProject extends Component {

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='home' component={LauncherScreen} hideNavBar hideTabBar/>
        </Scene>
      </Router>
    )
  }

}

AppRegistry.registerComponent('CrodProject', () => CrodProject);
