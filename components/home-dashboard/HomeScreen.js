import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Container, Header, Content, Left, Right, Body } from "native-base";
import { Icon } from "react-native-elements";
import styles from "app/cstyles/android/androidStyles";
import CircularProgress from "app/components/home-dashboard/CircularProgress";

class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image
        source={require("app/assets/ProfilePicture.jpeg")}
        style={{ height: 50, width: 50 }}
      />
    ),
  };

  rand = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  render() {
    var components = [];
    for (let x = 0; x < 10; x++) {
      components.push(
        <View key={x} style={styles.gauge}>
          <Left>
            <CircularProgress percent={this.rand()} />
          </Left>
          <Body>
            <Text style={{ color: "#fff" }}>
              {"Learning Module " + (x + 1)}
            </Text>
          </Body>
          <Right>
            <Text style={{ color: "#fff" }}>{"Not Complete"}</Text>
          </Right>
        </View>
      );
    }
    return (
      <Container style={styles.bgPurple1}>
        <Header style={styles.bgPurple2}>
          <Left>
            <Icon
              name="bars"
              type="font-awesome"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Right />
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff" }}> HomeScreen </Text>
          {/* {components} */}
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;

// Status bar issues fix using native-base
// https://github.com/GeekyAnts/NativeBase/issues/899

// Menu burger icon not staying on the left when using the native-base <Left>
// When you include a <Left> component you will also HAVE to include it's accompanying counterpart => <Right>
