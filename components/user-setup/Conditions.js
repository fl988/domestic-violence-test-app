import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Accordion from "app/components/user-setup/Accordion";
import * as Constants from "app/components/Constants.js";

// Styles
import styles from "app/cstyles/android/androidStyles.js";

const contentful = require("app/node_modules/contentful/dist/contentful.browser.min.js");
const client = contentful.createClient({
  space: Constants.AUTH_SPACE_ID,
  accessToken: Constants.AUTH_ACCESS_TOKEN_DELIVERY,
});

// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token. ie. the Conditions.
// We then start building our own custom json object array.
var conditionsArr = [];
client
  .getEntry(Constants.CONT_CONDITIONS)
  .then((entry) =>
    Object.values(entry.fields).forEach((v, i) => {
      const accordionHeader = "Condition " + (i + 1);
      const accordionBody = <Text>{v}</Text>;
      const objLength = Object.values(entry.fields).length;
      if (i == 0) {
        // The first mandatory condition. Can never be unchecked.
        conditionsArr[i] = {
          title: accordionHeader,
          data: accordionBody,
          mandatory: true,
        };
      } else if (i == objLength - 1) {
        // This is condition 11 which is a special condition.
        conditionsArr[i] = {
          title: accordionHeader,
          data: accordionBody,
          specialCondition: true,
        };
      } else {
        conditionsArr[i] = {
          title: accordionHeader,
          data: accordionBody,
        };
      }
    })
  )
  .catch((err) => console.log(err));

const Conditions = (props) => {
  /***********************************************************************************/
  // States

  // For now we are hard-coding this special condition.
  conditionsArr[10] = {
    title: "Condition 11",
    data: <Text>"A special condition."</Text>,
    specialCondition: true,
  };

  /***********************************************************************************/
  // functional functions

  const renderAccordians = () => {
    const items = [];
    if (typeof conditionsArr[0] !== "undefined") {
      for (let x = 0; x < conditionsArr.length; x++) {
        items.push(
          <Accordion
            id={x}
            key={x}
            title={conditionsArr[x].title}
            data={conditionsArr[x].data}
            mandatory={conditionsArr[x].mandatory}
            specialCondition={conditionsArr[x].specialCondition}
          />
        );
      }
    } else {
      items.push(
        <Text
          key={0}
          style={{
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "transparent",
            textAlign: "center",
          }}
        >
          This device's Internet connection appears to be offline. Please check
          your Internet connection and try to come back to this page again.
        </Text>
      );
    }

    return items;
  };

  return (
    <View style={styles.frameV2}>
      <ScrollView>{renderAccordians()}</ScrollView>
    </View>
  );
};

export default Conditions;
