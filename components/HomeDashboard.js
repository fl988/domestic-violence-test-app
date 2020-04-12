/*
Dependencies: 
    - native-base@2.13.8
    ------react-navigation@1.0.0-beta.23
    - @react-navigation/native
    - @react-navigation/drawer
    - react-native-reanimated
*/

import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "app/components/home-dashboard/HomeScreen";
import SettingsScreen from "app/components/home-dashboard/SettingsScreen";

const Drawer = createDrawerNavigator();

export default class HomeDashboard extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerStyle={{
        backgroundColor: "#c6cbef",
        width: 240,
      }}
    >
      {/* Only Drawer.Screen are allowed here. Nothing else! */}
      <Drawer.Screen
        name="Feed"
        component={HomeScreen}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ drawerLabel: "Settings" }}
      />
    </Drawer.Navigator>
  );
};

styles = StyleSheet.create({
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
});
