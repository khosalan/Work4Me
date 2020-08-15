import React from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { createStackNavigator } from "@react-navigation/stack";

import HeaderButton from "../../components/HeaderButton";
import Colors from "../../constants/Colors";

import AccountScreen from "../../screens/Employee/AccountScreen";
import SettingScreen from "../../screens/SettingScreen";
import HelpScreen from "../../screens/HelpScreen";
import DeleteAccountScreen from "../../screens/DeleteAccountScreen";

const defaultHeaderOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryOrange : "",
  },
  headerTintColor: Platform.OS === "android" ? "black" : Colors.primaryOrange,
};

const screenOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

const AccountStack = createStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator screenOptions={defaultHeaderOptions}>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={screenOptions}
      />
    </AccountStack.Navigator>
  );
};

const SettingStack = createStackNavigator();

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator screenOptions={defaultHeaderOptions}>
      <SettingStack.Screen
        name="Settings"
        component={SettingScreen}
        options={screenOptions}
      />
      <SettingStack.Screen
        name="Delete"
        component={DeleteAccountScreen}
        options={{ headerTitle: "Delete Account" }}
      />
    </SettingStack.Navigator>
  );
};

const HelpStack = createStackNavigator();

const HelpStackScreen = () => {
  return (
    <HelpStack.Navigator screenOptions={defaultHeaderOptions}>
      <HelpStack.Screen
        name="Help"
        component={HelpScreen}
        options={screenOptions}
      />
    </HelpStack.Navigator>
  );
};

export { AccountStackScreen, SettingStackScreen, HelpStackScreen };
