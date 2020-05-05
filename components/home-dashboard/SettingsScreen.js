import React, { Component } from "react";
import { Text, Image } from "react-native";
import { Container, Header, Content, Left, Right } from "native-base";
import { Icon } from "react-native-elements";
import styles from "app/cstyles/android/androidStyles";

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
          <Text style={{ color: "#fff" }}> Settings Screen </Text>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
