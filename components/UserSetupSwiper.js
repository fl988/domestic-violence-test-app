import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Swiper from "react-native-swiper";
// Database
import db from "../db/scripts/User.js";
// Styles
import myStyles from "../cstyles/android/androidStyles";
// Components
import InitialsInput from "./InitialsInput";
import DateOfBirth from "./DateOfBirth";
import UserType from "./UserType";
export default class UserSetupSwiper extends Component {
  state = {
    /*Can add some stuff here later*/
    //sampleVariable : false
  };

  //"componentDidMount" will execute automatically before render()
  componentDidMount() {
    db.setUpUserTable();
  }

  // Array of pages with defined keys and values
  PAGES = [
    {
      title: "What are your Intitials?",
      description: "Since this is your first time, we'll need to know a little bit about you.", // prettier-ignore
      bgColor: "#3b2056",
      component: <InitialsInput onNext={() => this.refs.swiper.scrollBy(1)} />
    },
    {
      title: "What is your date of birth?",
      description: "Please select.",
      bgColor: "#692769",
      component: <DateOfBirth onNext={() => this.refs.swiper.scrollBy(1)} /> // prettier-ignore
    },
    {
      title: "What type of user are you?",
      description: "Please choose one.",
      bgColor: "#56203b",
      component: <UserType />
    }
  ];

  render() {
    return (
      <Swiper ref="swiper" loop={false} index={0} scrollEnabled={false}>
        {/* We map the pages, which works like loops. */}
        {this.PAGES.map((page, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: page.bgColor }}>
            <View style={[myStyles.card]}>
              <Text style={myStyles.title}>{page.title}</Text>
              <Text style={myStyles.desc}>{page.description}</Text>
            </View>
            {page.component}
            {i != 0 ? (
              <View style={myStyles.navBackButton}>
                <Icon
                  reverse
                  name="chevron-left"
                  type="font-awesome"
                  onPress={() => this.refs.swiper.scrollBy(-1)}
                />
              </View>
            ) : (
              <View />
            )}
          </View>
        ))}
      </Swiper>
    );
  }
}
