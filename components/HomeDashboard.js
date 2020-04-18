/*
Dependencies: 
    - native-base@2.13.8
    ------react-navigation@1.0.0-beta.23
    - @react-navigation/native
    - @react-navigation/drawer
    - react-native-reanimated
*/

import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer"; // https://reactnavigation.org/docs/drawer-navigator/

import HomeScreen from "app/components/home-dashboard/HomeScreen";
import SettingsScreen from "app/components/home-dashboard/SettingsScreen";
import CustomModal from "app/components/user-setup/CustomModal";

const Drawer = createDrawerNavigator();

export default class HomeDashboard extends React.Component {
  state = {
    modalVisible: false,
  };

  modalVisibleHandler = (v) => {
    this.setState({
      modalVisible: v,
    });
  };

  MyDrawer = () => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

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
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <DrawerItemList {...props} />
          {/* https://reactnavigation.org/docs/drawer-navigator/#providing-a-custom-drawercontent */}
          {/* Add your custom <DrawerItem> below here */}
        </SafeAreaView>
        <SafeAreaView forceInset={{ bottom: "always", horizontal: "never" }}>
          {/* ONLY add components below here IF you want a particular component to be positioned on the bottom of the left navigation. To test it out, uncomment the <DrawerItem> below by highlighting it then press "CTRL + /forward-slash" */}
          {/* <DrawerItem
            label={() => <Text style={{ color: "#black" }}>{"Test"}</Text>}
          /> */}
          <DrawerItem
            label={() => (
              <Text style={{ color: "#fff" }}>{"Delete Account"}</Text>
            )}
            style={{ backgroundColor: "#f44336" }} //red-orange
            onPress={() => {
              this.modalVisibleHandler(true);
            }}
          />
        </SafeAreaView>
      </DrawerContentScrollView>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <this.MyDrawer />
        <CustomModal
          modalVisible={this.state.modalVisible}
          modalVisibleHandler={this.modalVisibleHandler}
          action={this.props.deleteAccountHandler}
          modalHeader={"Confirmation"}
          modalBody={
            "Are you sure you want to delete your account? \nAll of your progress will be deleted permanently."
          }
        />
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
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    margin: 16,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, .87)",
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
});
