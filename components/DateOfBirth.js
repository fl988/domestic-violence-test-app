import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// import styles
import myStyles from "../cstyles/android/androidStyles.js";

const DateOfBirth = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [getDateDisplay, setDateDisplay] = useState("");
  const [getButtonHideStatus, setButtonHideStatus] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    //console.warn("A date has been picked: ", date);
    hideDatePicker();

    //Wed, Mar, 04, 2020, 02:45:57, GMT-0500, (EST)
    const mdate = date.toString().split(" ");
    setDateDisplay(mdate[2] + " - " + mdate[1] + " - " + mdate[3]);
    setButtonHideStatus(true);
  };

  var button = null;
  if (getButtonHideStatus) {
    button = (
      <TouchableOpacity style={myStyles.button2} onPress={() => props.onNext()}>
        <Text style={myStyles.buttonText}>{"NEXT"}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={myStyles.frame}>
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="'Tap' to select date of birth"
          placeholderTextColor="#464950"
          style={myStyles.input}
          editable={false}
          value={getDateDisplay.length > 0 ? getDateDisplay.toString() : null}
        />
      </TouchableOpacity>
      <View>{button}</View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateOfBirth;
