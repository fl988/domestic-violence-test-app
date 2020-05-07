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

  find_dimesions = (layout) => {
    const { x, y, width, height } = layout;
    console.log("*******");
    console.log(x);
    console.log(y);
    console.log(width);
    console.log(height);
  };
  // onLayout={(e) => {
  //   this.find_dimesions(e.nativeEvent.layout);
  // }}

  PAGES = [
    {
      progressGauge: <CircularProgress percent={100} />,
      title: "Title",
      completion: "Completed",
    },
    {
      progressGauge: <CircularProgress percent={90} />,
      title: "Title",
      completion: "Completed",
    },
    {
      progressGauge: <CircularProgress percent={80} />,
      title: "Title",
      completion: "Completed",
    },
    {
      progressGauge: <CircularProgress percent={70} />,
      title: "Title",
      completion: "Completed",
    },
  ];

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
          <Body>
            <Text style={styles.rneHeaderBody}>{"Learning Modules"}</Text>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.rneContent}>
          {/* *************************** */}
          {/* START */}
          <View style={{ paddingTop: 10 }}>{/* Empty Space */}</View>
          {this.PAGES.map((page, x) => (
            <View key={x} style={styles.learningModuleItem}>
              <Left>{page.progressGauge}</Left>
              <Body>
                <Text style={styles.lmText}>{page.title + " " + (x + 1)}</Text>
              </Body>
              <Right>
                <Text style={styles.lmText}>{page.completion}</Text>
              </Right>
            </View>
          ))}
          {/* END */}
          {/* *************************** */}
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
