import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

const Welcome = props => {
  const [getDisplayValue, setDisplayValue] = useState([]);

  const hideWelcomeComponent = value => {
    if (value) {
      //setDisplayValue("none");
    } else {
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.welcome}
      onPress={() => hideWelcomeComponent(true)}
    >
      <Image
        style={styles.logo}
        source={require("../media/logo/1.png")}
        popover={<Text>Info here</Text>}
      />

      <Text style={styles.textStyle}>Welcome to positive change.</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: "#101726",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    color: "white",
    fontSize: 15
  },
  logo: {
    marginBottom: 15
  }
});

export default Welcome;
