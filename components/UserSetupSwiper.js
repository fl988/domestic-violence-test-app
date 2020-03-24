import React, { Component } from "react";
import { View, Text } from "react-native";
import Swiper from "react-native-swiper";
import myStyles from "../cstyles/android/androidStyles";
import InitialsInput from "./InitialsInput";
import DateOfBirth from "./DateOfBirth";

export default class UserSetupSwiper extends Component {
  state = {
    /*Can add some stuff here later*/
    //sampleVariable : false
  };

  // Array of pages with defined keys and values
  PAGES = [
    {
      title: "What are your Intitials?",
      description:
        "Since this is your first time, we'll need to know a little bit about you.",
      bgColor: "#3b2056",
      component: <InitialsInput onNext={() => this.refs.swiper.scrollBy(1)} />
      //image: "http://unsplash.it/400/400?image=674",
    },
    {
      title: "What is your date of birth?",
      description: "Please select.",
      bgColor: "#692769",
      component: <DateOfBirth onNext={() => this.refs.swiper.scrollBy(1)} />
      //image: "https://unsplash.it/400/400?image=940",
    },
    {
      title: "What type of user are you?",
      description: "Please choose one.",
      bgColor: "#56203b"
      //   component: <DateOfBirth onNext={() => this.refs.swiper.scrollBy(1)} />
      //image: "https://unsplash.it/400/400?image=900"
    }
  ];

  render() {
    return (
      <Swiper ref="swiper" loop={false} index={0}>
        {/* We map the pages, which works like loops. */}
        {this.PAGES.map((page, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: page.bgColor }}>
            <View style={[myStyles.card]}>
              <Text style={myStyles.title}>{page.title}</Text>
              <Text style={myStyles.desc}>{page.description}</Text>
            </View>
            {page.component}
          </View>
        ))}
      </Swiper>
    );
  }
}
