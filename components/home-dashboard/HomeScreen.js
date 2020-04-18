import React, { Component } from "react";
import { Text, Image } from "react-native";
import { Icon, Container, Header, Content, Left, Right } from "native-base";
import styles from "app/cstyles/android/androidStyles";

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
      <Container style={styles.bgPurple1}>
        <Header style={styles.bgPurple2}>
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
          <Text style={{ color: "#fff" }}> HomeScreen </Text>
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
