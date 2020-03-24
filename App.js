import React, { Component } from "react";
import { View } from "react-native";

import myStyles from "./cstyles/android/androidStyles.js";
import SplashScreen from "./components/SplashScreen";
import UserSetupSwiper from "./components/UserSetupSwiper";

export default class App extends Component {
  render() {
    return (
      <View style={myStyles.container}>
        <SplashScreen />
        <UserSetupSwiper />
      </View>
    );
  }
}
