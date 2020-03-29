import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";
// Database
import db from "../db/scripts/User.js";
// Styles
import styles from "../cstyles/android/androidStyles.js";

const DateOfBirth = props => {
  /***********************************************************************************/
  // States
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [getDateDisplay, setDateDisplay] = useState("");
  const [getButtonHideStatus, setButtonHideStatus] = useState("");

  /***********************************************************************************/
  // Functional components
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

  const onNextHandler = dateDisplay => {
    props.onNext(); //Swipe to next page.
    db.updateUserDOB(getDateDisplay.toString());
  };

  /***********************************************************************************/
  // The "Next" button shows once the user successfully entered their DOB.
  var nextBtn = (
    <TouchableOpacity style={styles.testbtn}>
      <Text style={styles.buttonText}></Text>
    </TouchableOpacity>
  );
  if (getButtonHideStatus) {
    nextBtn = (
      <TouchableOpacity
        style={styles.button2}
        onPress={() => onNextHandler(getDateDisplay)}
      >
        <Text style={styles.buttonText}>{"NEXT"}</Text>
      </TouchableOpacity>
    );
  }

  /***********************************************************************************/
  // The returning component
  return (
    <View style={styles.frame}>
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="'Tap' to select date of birth"
          placeholderTextColor="#464950"
          style={styles.input}
          editable={false}
          value={getDateDisplay.length > 0 ? getDateDisplay.toString() : null}
        />
      </TouchableOpacity>
      <View>{nextBtn}</View>
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
