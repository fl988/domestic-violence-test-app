import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Button
} from "react-native";

export default class CustomModal extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    // let test = this.props.flag;

    // if (!test) {
    //   return null;
    // }

    return (
      <View
        style={{ marginTop: 22, justifyContent: "center" }}
        onTouchEnd={() => {
          this.setModalVisible(!this.state.modalVisible);
        }}
      >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>
            </View>
          </View>
        </Modal>
        <Button
          onPress={() => {
            this.setModalVisible(true);
          }}
          title="Show Modal"
        />
      </View>
    );
  }
}
