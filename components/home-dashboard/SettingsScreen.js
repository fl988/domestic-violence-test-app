import React, { Component } from "react";
import { Text, Image } from "react-native";
import * as Constants from "app/components/Constants.js";
import { Icon, Container, Header, Content, Left, Right } from "native-base";

class SettingsScreen extends Component {
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
          <Text> Settings Screen </Text>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
