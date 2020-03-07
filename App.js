import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Dimensions,
  PixelRatio,
  TextInput
} from "react-native";

import Welcome from "./components/Welcome.js";
import CustomerSlider from "./components/CustomerSlider";
import * as Constants from "./components/Constants.js";
import { LinearGradient } from "expo-linear-gradient";

// import * as SQLite from "expo-sqlite";

// const db = SQLite.openDatabase("TestDb.db");

// _storeData = async () => {
//   try {
//     await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
//   } catch (error) {
//     // Error saving data
//   }
// };

const getScreen1Styles = (animation, width) => {
  const image1TranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -100],
    extrapolate: "clamp"
  });
  const image2TranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [-25, -25],
    extrapolate: "clamp"
  });

  return {
    image1: {
      opacity: 1,
      transform: [
        { translateX: image1TranslateX },
        { translateY: image2TranslateY }
      ]
    }
  };
};

const getScreen2Styles = (animation, width) => {
  const inputRange = [0, width, width * 2];

  const image1TranslateX = animation.interpolate({
    inputRange: [0, width, width * 2],
    outputRange: [-100, -100, 0],
    extrapolate: "clamp"
  });

  const image2TranslateY = animation.interpolate({
    inputRange,
    outputRange: [-200, -200, -200],
    extrapolate: "clamp"
  });

  const image2Opacity = animation.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: "clamp"
  });

  return {
    image2: {
      opacity: image2Opacity,
      transform: [
        { translateY: image2TranslateY },
        { translateX: image1TranslateX }
      ]
    }
  };
};

export default function App() {
  state = {
    animation: new Animated.Value(0)
  };

  const [getInitialsEntered, setInitialsEntered] = useState(""); // "" by default.

  const initialsInputHandler = getInitialsEntered => {
    if (getInitialsEntered.length >= 3) {
      return;
    }
    setInitialsEntered(getInitialsEntered);
  };

  const { width, height } = Dimensions.get("window");

  const screen1Styles = getScreen1Styles(state.animation, width);
  const screen2Styles = getScreen2Styles(state.animation, width);

  return (
    <View style={styles.container}>
      {/* <Welcome /> */}

      <ScrollView
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: state.animation
              }
            }
          }
        ])}
      >
        {/* This is the first page. ie. Welcome to ... */}
        <View style={styles.screenDimension}>
          <View style={styles.screenHeader}>
            <Animated.Image
              style={
                ({
                  width: PixelRatio.getPixelSizeForLayoutSize(20),
                  height: PixelRatio.getPixelSizeForLayoutSize(20)
                },
                screen1Styles.image1)
              }
              source={Constants.personImg}
              resizeMode="contain"
            />
            <Text style={styles.screenText}>Welcome to positive change.</Text>
          </View>
        </View>

        {/* This is the second page. ie. Enter initials ... */}
        <View style={styles.screenDimension}>
          <View style={styles.screenHeader}>
            <Animated.Image
              style={
                ({
                  width: PixelRatio.getPixelSizeForLayoutSize(20),
                  height: PixelRatio.getPixelSizeForLayoutSize(20),
                  top: 200,
                  left: 60
                },
                screen2Styles.image2)
              }
              source={Constants.personImg}
              resizeMode="contain"
            />
            <View style={{ alignItems: "center" }}>
              <LinearGradient
                style={styles.linearGradient}
                colors={["#562056", "#631c47", "#731737"]}
              >
                <Text style={styles.buttonText}>
                  Since this is your first time,{"\n"} we'll need to know a
                  little bit about you.
                </Text>
              </LinearGradient>

              <Text style={styles.whiteText}>What are your initials?</Text>

              <TextInput
                placeholder="Initials"
                placeholderTextColor="#464950"
                style={styles.textInputStyle}
                onChangeText={initialsInputHandler} //For every key strokes, this will invoke initialsInputHandler.
                value={getInitialsEntered}
              />
            </View>
          </View>
        </View>

        {/* <View style={{ width, height, backgroundColor: "#101726" }}>
          <View style={styles.screenHeader}>
            <Animated.Image
              style={
                ({
                  width: PixelRatio.getPixelSizeForLayoutSize(20),
                  height: PixelRatio.getPixelSizeForLayoutSize(20)
                },
                screen1Styles.image1)
              }
              source={Constants.personImg}
              resizeMode="contain"
            />
          </View>
        </View> */}

        {/* <CustomerSlider
          textDisp={"screen 1"}
          imgSrc={Constants.personImg}
          is2ndScreen={false}
        />

        <CustomerSlider
          textDisp={"screen 2"}
          imgSrc={Constants.personImg}
          is2ndScreen={true}
        /> */}

        {/* <CustomerSlider
          textDisp={"screen 3"}
          imgSrc={Constants.personImg}
          is2ndScreen={true}
        /> */}
      </ScrollView>
    </View>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  screenDimension: {
    width,
    height,
    backgroundColor: "#101726"
  },
  screen: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  container: {
    flex: 1
  },
  screenHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  screenText: {
    color: "#fff"
  },

  linearGradient: {
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  whiteText: {
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  greyText: {
    textAlign: "center",
    margin: 10,
    color: "#464950",
    backgroundColor: "transparent"
  },
  textInputStyle: {
    color: "#fff",
    width: "80%",
    borderColor: "#562056",
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
