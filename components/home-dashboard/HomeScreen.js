import React, { Component } from "react";
import { Text, Image } from "react-native";

import { Icon, Container, Header, Content, Left } from "native-base";

class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image
        source={require("app/assets/ProfilePicture.jpeg")}
        style={{ height: 50, width: 50 }}
      />
    )
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="ios-menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text> HomeScreen </Text>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
