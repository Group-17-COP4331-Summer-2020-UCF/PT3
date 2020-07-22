import React from "react";
import { Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { HomeScreen } from "./homeScreen.js";
import { ProfileScreen } from "./profileScreen.js";
import { TrainingScreen } from "./trainingScreen.js";
import { SettingsScreen } from "./settingsScreen.js";

//imports

export const Tab = createMaterialBottomTabNavigator();

export const MainScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      activeColor="#20E9A9"
      barStyle={{ backgroundColor: "#2a2c2d" }}
      //style={{ backgroundColor: "red" }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#2a2c2d",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={TrainingScreen}
        options={{
          tabBarLabel: "Training",
          tabBarColor: "#2a2c2d",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarColor: "#2a2c2d",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="settings-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Style --------------------------------------------------------------------------------------------------
