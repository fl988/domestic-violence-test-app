import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Accordion from "app/components/user-setup/Accordion";

// Database
import db from "app/db/scripts/User.js";
// Styles
import styles from "app/cstyles/android/androidStyles.js";

const Conditions = props => {
  /***********************************************************************************/
  // States

  /***********************************************************************************/
  // JSON obj array
  const jsonData = [
    {
      title: "Condition 1",
      data: (
        <View>
          <Text>
            {
              "You must not do any of the following to <<protected people>>, or anyone <<she/he/they>> <<has/have>> a domestic relationship with:"
            }
          </Text>
          <Text style={{ paddingLeft: 12, paddingTop: 12 }}>
            {"A. assult or threaten <<her/him/them>>"}
          </Text>

          <Text style={{ paddingLeft: 12, paddingTop: 12 }}>
            {"B. stalk, harass, or intimidate <<her/him/them>>"}
          </Text>

          <Text style={{ paddingLeft: 12, paddingTop: 12 }}>
            {
              "C. intentionall or recklessly destroy or damage any property that belongs to or is in the possession of <<protected people>>."
            }
          </Text>
        </View>
      ),
      mandatory: true
    },
    {
      title: "Condition 2",
      data: (
        <Text>
          "Pizza is a savory dish of Italian origin, consisting of a usually
          round, flattened base of leavened wheat-based dough topped with
          tomatoes, cheese, and various other ingredients (anchovies, olives,
          meat, etc.) baked at a high temperature, traditionally in a wood-fired
          oven. In formal settings, like a restaurant, pizza is eaten with knife
          and fork, but in casual settings it is cut into wedges to be eaten
          while held in the hand. Small pizzas are sometimes called pizzettas."
        </Text>
      )
    },
    {
      title: "Condition 3",
      data: (
        <Text>
          "A drink (or beverage) is a liquid intended for human consumption. In
          addition to their basic function of satisfying thirst, drinks play
          important roles in human culture. Common types of drinks include plain
          drinking water, milk, coffee, tea, hot chocolate, juice and soft
          drinks. In addition, alcoholic drinks such as wine, beer, and liquor,
          which contain the drug ethanol, have been part of human culture for
          more than 8,000 years."
        </Text>
      )
    },
    {
      title: "Condition 4",
      data: (
        <Text>
          'A dessert is typically the sweet course that concludes a meal in the
          culture of many countries, particularly Western culture. The course
          usually consists of sweet foods, but may include other items. The word
          "dessert" originated from the French word desservir "to clear the
          table" and the negative of the Latin word servire'
        </Text>
      )
    },
    {
      title: "Condition 5",
      data: (
        <Text>
          'A dessert is typically the sweet course that concludes a meal in the
          culture of many countries, particularly Western culture. The course
          usually consists of sweet foods, but may include other items. The word
          "dessert" originated from the French word desservir "to clear the
          table" and the negative of the Latin word servire'
        </Text>
      )
    },
    {
      title: "Condition 6",
      data: (
        <Text>
          'A dessert is typically the sweet course that concludes a meal in the
          culture of many countries, particularly Western culture. The course
          usually consists of sweet foods, but may include other items. The word
          "dessert" originated from the French word desservir "to clear the
          table" and the negative of the Latin word servire'
        </Text>
      )
    },
    {
      title: "Condition 7",
      data: (
        <Text>
          'A dessert is typically the sweet course that concludes a meal in the
          culture of many countries, particularly Western culture. The course
          usually consists of sweet foods, but may include other items. The word
          "dessert" originated from the French word desservir "to clear the
          table" and the negative of the Latin word servire'
        </Text>
      )
    },
    {
      title: "Condition 8",
      data: (
        <Text>
          'A dessert is typically the sweet course that concludes a meal in the
          culture of many countries, particularly Western culture. The course
          usually consists of sweet foods, but may include other items. The word
          "dessert" originated from the French word desservir "to clear the
          table" and the negative of the Latin word servire'
        </Text>
      )
    },
    {
      title: "Condition 9",
      data: (
        <Text>
          'A dessert is typically the sweet course that concludes a meal in the
          culture of many countries, particularly Western culture. The course
          usually consists of sweet foods, but may include other items. The word
          "dessert" originated from the French word desservir "to clear the
          table" and the negative of the Latin word servire'
        </Text>
      )
    },
    {
      title: "Condition 10",
      data: (
        <Text>
          'A dessert is typically the sweet course that concludes a meal in the
          culture of many countries, particularly Western culture. The course
          usually consists of sweet foods, but may include other items. The word
          "dessert" originated from the French word desservir "to clear the
          table" and the negative of the Latin word servire'
        </Text>
      )
    },
    {
      title: "Condition 11",
      data: <Text>"A special condition."</Text>,
      specialCondition: true
    }
  ];

  const renderAccordians = () => {
    const items = [];
    for (let x = 0; x < jsonData.length; x++) {
      items.push(
        <Accordion
          id={x}
          key={x}
          title={jsonData[x].title}
          data={jsonData[x].data}
          mandatory={jsonData[x].mandatory}
          specialCondition={jsonData[x].specialCondition}
        />
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
