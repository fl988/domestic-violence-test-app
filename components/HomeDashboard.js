/*
Dependencies: 
    - native-base@2.13.8
    ------react-navigation@1.0.0-beta.23
    - @react-navigation/native
    - @react-navigation/drawer
    - react-native-reanimated
*/

import React from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer"; // https://reactnavigation.org/docs/drawer-navigator/

import HomeScreen from "app/components/home-dashboard/HomeScreen";
import SettingsScreen from "app/components/home-dashboard/SettingsScreen";

const Drawer = createDrawerNavigator();

export default class HomeDashboard extends React.Component {
  MyDrawer = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <this.CustomDrawerContent {...props} />}
      >
        {/* Add non-custom drawers here */}
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ drawerLabel: "Home" }}
          drawerStyle={styles.drawerItem}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ drawerLabel: "Settings" }}
        />
      </Drawer.Navigator>
    );
  };

  CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* https://reactnavigation.org/docs/drawer-navigator/#providing-a-custom-drawercontent */}
        {/* Add your custom <DrawerItem> below here */}
        <DrawerItem
          label={() => (
            <Text style={{ color: "#fff" }}>{"Delete Account"}</Text>
          )}
          style={{ backgroundColor: "#f44336" }} //red-orange
        />
      </DrawerContentScrollView>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <this.MyDrawer />
      </NavigationContainer>
    );
  }
}

styles = StyleSheet.create({
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  drawerItem: {
    marginLeft: 15,
    marginTop: 25,
    fontSize: 22,
    fontWeight: "500",
    color: "black",
    flexDirection: "row",
  },
  drawerItemText: {
    fontSize: 18.7,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18.7,
    letterSpacing: 0.33,
    color: "#1d1d26",
    padding: 10,
    marginLeft: 25,
  },
});
