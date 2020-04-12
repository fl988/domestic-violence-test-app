import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import Swiper from "react-native-swiper";
import * as Constants from "./Constants.js";
// Database
import db from "app/db/scripts/User.js";
// Styles
import styles from "app/cstyles/android/androidStyles";
// Components
import InitialsInput from "app/components/user-setup/InitialsInput";
import DateOfBirth from "app/components/user-setup/DateOfBirth";
import UserType from "app/components/user-setup/UserType";
import Conditions from "app/components/user-setup/Conditions";
import CustomModal from "app/components/user-setup/CustomModal";
export default class UserSetupSwiper extends Component {
  state = {
    /*Can add some stuff here later*/
    modalVisible: false,
    userDetails: "",
  };

  // Array of pages with defined keys and values
  PAGES = [
    {
      title: "What are your Intitials?",
      description: "Since this is your first time, we'll need to know a little bit about you.", // prettier-ignore
      bgColor: "#34236E",
      component: <InitialsInput onNext={() => this.refs.swiper.scrollBy(1)} />,
    },
    {
      title: "What is your date of birth?",
      description: "Please select.",
      bgColor: "#3b2056",
      component: <DateOfBirth onNext={() => this.refs.swiper.scrollBy(1)} /> // prettier-ignore
    },
    {
      title: "What type of user are you?",
      description: "Please choose one.",
      bgColor: "#692769",
      component: <UserType onNext={() => this.refs.swiper.scrollBy(1)} />,
    },
    {
      title: "Please check which conditions apply to you.",
      //   description: "Please choose one.",
      bgColor: "#56203b",
      component: <Conditions />,
    },
  ];

  forceUpdateHandler = () => {
    console.log("");
  };

  modalVisibleHandler = (v) => {
    this.setState({
      modalVisible: v,
    });
    this.readUserDetails();
  };

  async readUserDetails() {
    let rs = await db.grabUserDetails();
    if (rs != null) {
      let item = rs.rows.item(0);

      let userCond = await db.grabUserConditionsAsArray();
      let component = "";
      if (userCond != null) {
        for (let x = 0; x < userCond.length; x++) {
          if (userCond[x]) {
            component += "\n\t- Condition " + (x + 1);
          }
        }
      }

      this.setState({
        userDetails:
          "Initials: "                + (item.initials == "" ? "Anonymous" : item.initials) + // prettier-ignore
          "\n\nDOB: "                 + item.dob +                                            // prettier-ignore
          "\n\nType of User: "        + Constants.userTypeDescArr[item.userTypeId - 1] +      // prettier-ignore
          "\n\nConditions selected:"  + component // prettier-ignore
      });
    }
  }

  screenNavButtonsHandler = (i) => {
    let component = (
      <View style={styles.navBackButton}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Icon
            reverse
            name="chevron-left"
            type="font-awesome"
            onPress={() => this.refs.swiper.scrollBy(-1)}
          />
          {i == this.PAGES.length - 1 ? (
            <Icon
              reverse
              name="check"
              type="font-awesome"
              style={{ alignSelf: "flex-end" }}
              onPress={() => {
                this.modalVisibleHandler(true);
              }}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
    );

    return i != 0 ? component : <></>;
  };

  render() {
    return (
      <Swiper ref="swiper" loop={false} index={0} scrollEnabled={true}>
        {/* We map the pages, which works like loops. */}
        {this.PAGES.map((page, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: page.bgColor }}>
            <View style={[styles.card]}>
              <Text style={styles.title}>{page.title}</Text>
              <Text style={styles.desc}>{page.description}</Text>
            </View>
            {page.component}
            {this.screenNavButtonsHandler(i)}
            <CustomModal
              modalVisible={this.state.modalVisible}
              modalVisibleHandler={this.modalVisibleHandler}
              completeUserSetUp={this.props.completeUserSetUp}
              modalHeader={"Confirmation"}
              modalBody={
                "Could you please confirm if your details below are all correct. \n\n" +
                this.state.userDetails
              }
            />
          </View>
        ))}
      </Swiper>
    );
  }
}
