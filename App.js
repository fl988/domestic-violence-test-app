import React, { Component, useState } from "react";
import {
  Animated,
  Dimensions,
  PixelRatio,
  Text,
  View,
  ScrollView,
  Alert,
  AsyncStorage
} from "react-native";

// import styles
import androidStyles from "./cstyles/android/androidStyles.js";

// import components
import Welcome from "./components/Welcome.js";
import CustomerSlider from "./components/CustomerSlider";
import InitialsInput from "./components/InitialsInput";
import CustomModal from "./components/CustomModal";

// import constants
import * as Constants from "./components/Constants.js";

// import special stuff
import { LinearGradient } from "expo-linear-gradient";

// import * as SQLite from "expo-sqlite";

// const db = SQLite.openDatabase("TestDb.db");

// storeData = async () => {
//   try {
//     AsyncStorage.setItem('userInitials', );
//   } catch (error) {
//     console.log("error saving data")
//     // Error saving data
//   }
// };

export default function App() {
  state = {
    animation: new Animated.Value(0)
  };

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem("userInitials");
      Alert.alert("Your initials is " + user);
    } catch (error) {}
  };

  const saveInitials = userEnteredInitials => {
    AsyncStorage.setItem("userInitials", userEnteredInitials);
    displayData();
    // setModal(flag);
    //Alert.alert("Message is: " + whatEver);
  };

  /*******************************************************************************/
  // Screen styles and dimensions
  const { width, height } = Dimensions.get("window");

  const screen1Styles = getScreen1Styles(state.animation, width);
  const screen2Styles = getScreen2Styles(state.animation, width);

  return (
    <View style={androidStyles.container}>
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
        {/*******************************************************************************/}
        {/* This is the first page. ie. Welcome to ... */}
        <View style={androidStyles.screenDimension}>
          <View style={androidStyles.screenHeader}>
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
            <Text style={androidStyles.screenText}>
              Welcome to positive change.
            </Text>
          </View>
        </View>

        {/*******************************************************************************/}
        {/* This is the second page. ie. Enter initials ... */}
        <View style={androidStyles.screenDimension}>
          <View style={androidStyles.screenHeader}>
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
                style={androidStyles.linearGradient}
                colors={["#562056", "#631c47", "#731737"]}
              >
                <Text style={androidStyles.buttonText}>
                  Since this is your first time,{"\n"} we'll need to know a
                  little bit about you.
                </Text>
              </LinearGradient>

              <View style={{ paddingTop: 50 }}>
                <Text style={androidStyles.whiteText}>
                  What are your initials?
                </Text>
              </View>

              <InitialsInput sayHello={saveInitials} />

              {/* <CustomModal /> */}
            </View>
          </View>
        </View>

        {/* <View style={{ width, height, backgroundColor: "#101726" }}>
          <View style={androidStyles.screenHeader}>
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

/*******************************************************************************/
// Main Screen Styling
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
    outputRange: [-150, -150, -150],
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
