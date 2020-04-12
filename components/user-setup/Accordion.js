import React, { Component } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import CheckBox from "react-native-check-box";
import Icon from "react-native-vector-icons/MaterialIcons";

// Database
import db from "app/db/scripts/User.js";

// Styles
import styles from "app/cstyles/android/androidStyles.js";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      conditionDescComponent: props.data,
      expanded: false,
      isChecked: false,
    };
  }

  conditionKeyHandler = (v) => {
    var conditionNum = v + 1;

    if (v == 0) {
      Alert.alert("Condition 1 is mandatory and cannot be unselected.");
      return;
    }

    //Translation: if its condition 11 AND it's a special condition AND it's checked then do the following.
    if (v == 10 && this.props.specialCondition && !this.state.isChecked) {
      Alert.alert(
        "Condition " +
          conditionNum +
          " is special, you will have to contact Julian Bernardi. "
      );
      return;
    }

    db.updateUserConditions(conditionNum, this.state.isChecked);
    // db.grabUserDetailsOnConsole();
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.accordionRow}
          onPress={() => this.toggleExpand()}
        >
          <CheckBox
            title="Click Here"
            onClick={() => {
              this.setState({
                isChecked: !this.state.isChecked,
              });
              this.conditionKeyHandler(this.state.id);
            }}
            isChecked={this.props.mandatory ? true : this.state.isChecked}
          />
          <Text style={[styles.accordionTitle, styles.font]}>
            {this.props.title}
          </Text>
          <Icon
            name={this.state.expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"} // prettier-ignore
            size={30}
            color={"#A9A9A9"}
          />
        </TouchableOpacity>

        <View style={styles.accordionParentHr} />
        {this.state.expanded && (
          <View style={styles.accordionChild}>
            {this.state.conditionDescComponent}
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}
