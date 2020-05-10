import React, { Component } from "react";
import { Container, Header, Content, Left, Right } from "native-base";
import styles2 from "app/cstyles/android/androidStyles";

import { StatusBar } from 'react-native';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';

import { Icon } from "react-native-elements";

const IC_ARR_DOWN = require('app/assets/arrow-down.png');
const IC_ARR_UP = require('app/assets/arrow-up.png');


class FAQ extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image
        source={require("app/assets/ProfilePicture.jpeg")}
        style={{ height: 50, width: 50 }}
      />
    ),
  };

  state = {
    contents: [
      {
        title: 'Question 1',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'Question 2',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'Question 3',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'Question 4',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'Question 5',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'Question 6',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'Question 7',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
    ],
  };


  render() {
    return (
      <Container style={styles2.bgPurple1}>
        <Header style={styles2.bgPurple2}>
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
            <View style={styles.container}>
        <ScrollView> 
          {
            this.state.contents
              ? this.state.contents.map((param, i) => {
                return (
                    <DropDownItem
                      key={i}
                      contentVisible={false}
                      invisibleImage={IC_ARR_DOWN}
                      visibleImage={IC_ARR_UP}
                      header={
                        <View style={styles.header}>
                          <Text style={{
                            fontSize: 20,
                            color: 'white',
                            height: 40,
                            fontWeight: 'bold',
                          }}><Icon name="users" type="font-awesome" color="white"/>{param.title}</Text>
                        </View>
                      }
                    >
                      <Text style={[
                        styles.txt,
                        {
                          fontSize: 16,
                          color: 'white'
                        },
                      ]}>
                        {param.body}
                      </Text>
                    </DropDownItem>
                );
        
              })
              : null
          }
          <View/>

            </ScrollView>
            </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101726',
    paddingTop: 100,
    },
  header: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    alignContent: 'center',
  },
  headerTxt: {
    fontSize: 12,
    color: 'rgb(74,74,74)',
    marginRight: 60,
    flexWrap: 'wrap',
  },
  
});

export default FAQ;
