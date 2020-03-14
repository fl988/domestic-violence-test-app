import React, { useState } from "react";
import { View, Button, TextInput, Alert } from "react-native";

// import styles
import androidStyles from "../cstyles/android/androidStyles.js";

const InitialsInput = props => {
  const { sayHello } = props;

  const [getInitialsEntered, setInitialsEntered] = useState(""); // "" by default.
  const [getButtonHideStatus, setButtonHideStatus] = useState(""); //The button that will show "Continue" when initials are completely filled out. Otherwise hide it.

  const initialsInputHandler = userInput => {
    setButtonHideStatus(userInput.length >= 2 ? false : true);

    if (userInput.length >= 3) {
      return;
    }
    setInitialsEntered(userInput);
  };

  var button = null;

  if (!getButtonHideStatus) {
    button = (
      <Button
        title="Continue"
        //   onPress={() => Alert.alert("Simple Button pressed")}
        onPress={sayHello.bind(this, getInitialsEntered)}
      />
    );
  }

  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        placeholder="Initials"
        placeholderTextColor="#464950"
        style={androidStyles.textInputStyle}
        onChangeText={initialsInputHandler} //For every key strokes, this will invoke initialsInputHandler.
        value={getInitialsEntered}
      />
      {button}
    </View>
  );
};

export default InitialsInput;
