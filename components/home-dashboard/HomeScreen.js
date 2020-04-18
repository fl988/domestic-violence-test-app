import React, { Component } from "react";
import { Text, Image } from "react-native";
import * as Constants from "app/components/Constants.js";
import { Icon, Container, Header, Content, Left, Right } from "native-base";

class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image
        source={require("app/assets/ProfilePicture.jpeg")}
        style={{ height: 50, width: 50 }}
      />
    ),
  };
  render() {
    return (
      <Container style={{ paddingTop: Constants.STATUS_BAR_HEIGHT }}>
        <Header>
          <Left>
            <Icon
              name="ios-menu"
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
          <Text> HomeScreen </Text>
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
