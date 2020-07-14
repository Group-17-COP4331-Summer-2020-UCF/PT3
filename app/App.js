import "react-native-gesture-handler";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StartupScreen } from "./screens/startupScreen.js";
import { LoginScreen } from "./screens/loginScreen.js";
import { SignUpScreen } from "./screens/signUpScreen.js";
import { HomeScreen } from "./screens/homeScreen.js";
import { MainScreen } from "./screens/mainScreen.js";
import { AirForceScreen } from "./screens/airForceScreen.js";
import { ArmyScreen } from "./screens/armyScreen.js";
import { MarineScreen } from "./screens/marineScreen.js";
import { NavyScreen } from "./screens/navyScreen.js";
// Imports ----------------------------------------------------------------------------------------------

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={StartupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="AirForce" component={AirForceScreen} />
        <Stack.Screen name="Army" component={ArmyScreen} />
        <Stack.Screen name="Marines" component={MarineScreen} />
        <Stack.Screen name="Navy" component={NavyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
