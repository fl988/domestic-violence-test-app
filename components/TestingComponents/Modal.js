import React, { Component } from "react";
import { View, Button, Alert } from "react-native";
import CustomModal from "app/components/user-setup/CustomModal";

export default class Modal extends Component {
  // First you need a 'state' that is a 'boolean'. A true/false to show/hide modal.
  state = {
    modalVisible: false,
  };

  // Second, you need this FUNCTION to SET the value to true/false for your state variable 'modalVisible'
  modalVisibleHandler = (v) => {
    this.setState({
      modalVisible: v,
    });
  };

  render() {
    return (
      <View>
        {/* Third, you need a button or something that the user will be able to activate to show the Modal, you will then use the function 'modalVisibleHandler' here and send a value TRUE to show the modal. */}
        <Button
          title="Show Modal"
          onPress={() => {
            this.modalVisibleHandler(true);
          }}
        />
        {/* Lastly you need to send the state variable 'modalVisible', so that the modal component will show ONLY if the state was changed.  */}
        <CustomModal
          modalVisible={this.state.modalVisible}
          modalVisibleHandler={this.modalVisibleHandler}
          action={() => {
            Alert.alert("You Pressed Yes");
          }}
          modalHeader={"Header Title Modal"}
          modalBody={
            "You just pressed the button to show this modal. \nOnce you press 'yes' you will see an alert message. If 'no' is pressed then the modal will just close."
          }
        />
      </View>
    );
  }
}
