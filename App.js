import React, { Component } from "react";
import { View } from "react-native";

import styles from "./cstyles/android/androidStyles.js";
import SplashScreen from "./components/SplashScreen";
import UserSetupSwiper from "./components/UserSetupSwiper";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SplashScreen />
        <UserSetupSwiper />
      </View>
    );
  }
}

/*
Git Hub Command Line
  Modified Files
  - 'git status' to see whats up
  - 'git commit -am "your message"' to bundle your modified changes ready to be pushed into your github repository.

  New Files and Folders
  - 'git status' to see the list of folders and files
  - 'git add <file OR folder>' to add it in to your local repository officially
  - 'git commit -am "your message" to bundle your new file/folder and be ready to be pushed into your githb  repository.
*/
