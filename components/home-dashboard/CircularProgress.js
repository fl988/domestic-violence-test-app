import React, { Component } from "react";
import { View, Text, Dimensions, TouchableWithoutFeedback } from "react-native";
import ProgressCircle from "react-native-progress-circle";

const { width } = Dimensions.get("window");
const size = width / 2;
const strokeWidth = size / 1.3;
const radius = (size - strokeWidth) / 2;
//const circumference = radius * 2 * Math.PI;

export default class CircularProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: props.percent,
    };
  }

  rand = () => {
    this.setState({
      percent: Math.floor(Math.random() * 100) + 1,
    });
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.rand();
        }}
      >
        <View>
          <ProgressCircle
            percent={this.state.percent}
            radius={radius}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
          >
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
              }}
            >
              {/* {"My Progress\n"}
            {this.state.percent + "%"} */}
            </Text>
          </ProgressCircle>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

// flex: 1,
// flexDirection: "row",
// alignItems: "center",
// justifyContent: "center",
