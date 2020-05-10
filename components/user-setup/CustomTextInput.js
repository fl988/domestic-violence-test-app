import React, { useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Icon } from "react-native-elements";
// Styles
import styles from "app/cstyles/android/androidStyles.js";

const CustomTextInput = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.sectionStyle}>
        <Icon
          name={props.leftIcon}
          type={props.leftIconType}
          color={props.leftIconColor}
        />
        <TextInput
          style={{ paddingLeft: 5, textAlign: "center" }}
          placeholder={props.textInputPlaceholder}
          placeholderTextColor={props.textInputPlaceholderColor}
          editable={props.editable}
          value={props.value}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CustomTextInput;
