import "react-native-gesture-handler";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import {
  StartupScreen,
  LoginScreen,
  HomeScreen,
  SignUpScreen,
  MainScreen,
  AirForceScreen,
  ArmyScreen,
  MarineScreen,
  NavyScreen,
} from "./Screens.js";
// Imports ----------------------------------------------------------------------------------------------

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={StartupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="AirForce" component={AirForceScreen} />
        <Stack.Screen name="Army" component={ArmyScreen} />
        <Stack.Screen name="Marines" component={MarineScreen} />
        <Stack.Screen name="Navy" component={NavyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
