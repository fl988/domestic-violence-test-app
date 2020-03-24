import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Keyboard,
  TouchableOpacity
} from "react-native";

// import styles
import myStyles from "../cstyles/android/androidStyles.js";

const InitialsInput = props => {
  const [getInitialsEntered, setInitialsEntered] = useState(""); // "" by default.
  const [getButtonHideStatus, setButtonHideStatus] = useState(""); //The button that will show "Continue" when initials are completely filled out. Otherwise hide it.

  const initialsInputHandler = userInput => {
    setButtonHideStatus(userInput.length >= 2 ? true : false);
    if (userInput.length >= 3) {
      return;
    }
    setInitialsEntered(userInput);
  };

  const onNextHandler = () => {
    Keyboard.dismiss();
    props.onNext();
  };

  var button = null;
  if (getButtonHideStatus) {
    button = (
      <TouchableOpacity
        style={myStyles.button2}
        onPress={() => onNextHandler()}
      >
        <Text style={myStyles.buttonText}>{"NEXT"}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={myStyles.frame}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Leave blank to remain anonymous"
        // selectionColor={"#428AF8"}
        placeholderTextColor="#464950"
        style={myStyles.input}
        onChangeText={initialsInputHandler} //For every key strokes, this will invoke initialsInputHandler.
        value={getInitialsEntered.toUpperCase().replace(/[^a-zA-Z ]/g, "")}
      />

      <View>{button}</View>
    </View>
  );
};

export default InitialsInput;
