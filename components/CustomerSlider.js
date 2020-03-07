import React, { Component } from "react";
import {
  StyleSheet,
  Animated,
  Dimensions,
  PixelRatio,
  View,
  Text,
  Image,
  Slider
} from "react-native";

const CustomerSlider = props => {
  const getScreenStyles = (animation, width) => {
    const imageTranslateX = animation.interpolate({
      inputRange: [0, width],
      outputRange: [0, -100],
      extrapolate: "clamp"
    });

    const inputRange = [0, width, width * 2];
    const imageTranslateY = animation.interpolate({
      inputRange,
      outputRange: [-100, 0, -100],
      extrapolate: "clamp"
    });

    const imageOpacity = animation.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
      extrapolate: "clamp"
    });

    var myTransform = { translateY: imageTranslateY };
    if (!props.is2ndScreen) {
      myTransform = { translateX: imageTranslateX };
    }

    var finalRender = {
      myImage: {
        opacity: !props.is2ndScreen ? 1 : imageOpacity,
        transform: [myTransform]
      }
    };
    console.log(finalRender);
    return finalRender;
  };

  state = {
    animation: new Animated.Value(0)
  };

  const { width, height } = Dimensions.get("window");

  const screenStyles = getScreenStyles(state.animation, width);

  return (
    <View style={{ width, height, backgroundColor: "#101726" }}>
      <View style={styles.screenHeader}>
        <Animated.Image
          style={[
            !props.is2ndScreen
              ? styles.firstLogoPosition
              : styles.secondLogoPosition,
            screenStyles.myImage
          ]}
          source={props.imgSrc}
          resizeMode="contain"
          // popover={<Text>Info here</Text>}
        />
        {/* <Animated.Image
          style={{
            width: PixelRatio.getPixelSizeForLayoutSize(20),
            height: PixelRatio.getPixelSizeForLayoutSize(20)
          }}
          resizeMode="contain"
        />
        <Animated.Image
          style={
            ({
              width: PixelRatio.getPixelSizeForLayoutSize(20),
              height: PixelRatio.getPixelSizeForLayoutSize(20),
              top: 200,
              left: 60
            },
            screenStyles.image)image1
          }
          source={props.imgSrc}
          resizeMode="contain"
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  screenText: {
    flex: 1
  },
  logo: {
    marginBottom: 15
  },
  firstLogoPosition: {
    width: PixelRatio.getPixelSizeForLayoutSize(20),
    height: PixelRatio.getPixelSizeForLayoutSize(20)
  },
  secondLogoPosition: {
    width: PixelRatio.getPixelSizeForLayoutSize(20),
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    marginTop: 200,
    marginLeft: 60
  }
});

export default CustomerSlider;
