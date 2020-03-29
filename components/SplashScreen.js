import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../cstyles/android/androidStyles.js";

/*
This screen's main purpose is to always show a splash screen every time the app is opened or resumed.
*/

export default class SplashScreen extends React.Component {
  /****************************************************************************************************************************************************/
  //We set 'isLoading' to 'true'
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  /****************************************************************************************************************************************************/
  //First we create a function that can consume time.
  performTimeConsumingTask = async () => {
    return new Promise(
      resolve =>
        setTimeout(() => {
          resolve("Henlo, i'm a fake data."); //This is a fake data that this function will be returning.
        }, 1250) //We set it to 1250 (ie. 1.25 seconds)
    );
  };

  /****************************************************************************************************************************************************/
  //Please read this link about async functions => https://blog.expo.io/react-native-meets-async-functions-3e6f81111173
  async componentDidMount() {
    //We then run the function which will take us about 'n' second(s).
    const data = await this.performTimeConsumingTask(); //Hold CTRL and Click "performTimeConsumingTask" to see where this function is.
    //After 'n' second(s) we already received our data.

    if (data !== null) {
      // Since we already have some fake data as a return, we then set the isLoading to false.
      this.setState({ isLoading: false });
      // This would cause the screen to re-render again.
    }
  }

  /****************************************************************************************************************************************************/
  render() {
    const viewStyles = [
      styles.splashScreenContainer,
      { backgroundColor: "orange" }
    ];
    const textStyles = {
      color: "white",
      fontSize: 40,
      fontWeight: "bold"
    };

    if (this.state.isLoading) {
      //This will always be rendered FIRST
      return (
        <View style={styles.screenDimension}>
          <View style={viewStyles}>
            <Text style={textStyles}>Splash Screen</Text>
          </View>
        </View>
      );
    }

    //We then return null once finished 'splashing'
    return null;
  }
}
