import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { mdiCogOutline } from "@mdi/js";

import LoginButton from "./loginButton.js";
import SignUpButton from "./signUpButton.js";
import GetStartedButton from "./getStartedButton.js";
import CreateAccountButton from "./createAccountButton.js";
import BackButton from "./backButton.js";
import LogOutButton from "./logoutButton.js";
import SwipeyButton from "./swipeButton.js";
import { StatusBar } from "react-native";

//imports

export const Tab = createMaterialBottomTabNavigator();

export const MainScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#5762D5"
      style={{ backgroundColor: "orange" }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

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
          tabBarColor: "red",
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

export const StartupScreen = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.screen}
      colors={["#4E576A", "#211D1D", "black"]}
    >
      <LinearGradient style={styles.container} colors={["#20E9A9", "#5762D5"]}>
        <Image
          source={require("./img/uncleSam.jpg")}
          style={{ width: 200, height: 300 }}
        />

        <Text style={{ fontSize: 30 }}>Are you ready to get THICC?</Text>
        <GetStartedButton
          text="Get Started!"
          onPress={() => navigation.push("Login")}
          style={styles.getStarted}
        />
      </LinearGradient>
    </LinearGradient>
  );
};

export const LoginScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#4E576A", "#211D1D", "black"]}
      style={styles.screen}
    >
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.container}>
        <Text style={styles.font}>PT3</Text>

        <View style={styles.input}>
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Username or Email"
            placeholderTextColor="#504747"
          />
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Password"
            placeholderTextColor="#504747"
          />
        </View>

        <View style={styles.buttons}>
          <LoginButton
            text="Login"
            onPress={() => navigation.navigate("Home")}
          />
          <SignUpButton
            text="Create Account"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>

        <View style={styles.forgotButton}>
          <TouchableOpacity>
            <Text style={{ paddingTop: 90, color: "white" }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <StatusBar
        hidden={false}
        barStyle="dark-content"
        backgroundColor="#20E9A9"
      />
    </LinearGradient>
  );
};

export const SignUpScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#4E576A", "#211D1D", "black"]}
      style={styles.screen}
    >
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.container}>
        <Text
          style={{
            height: 90,
            paddingLeft: 100,
            paddingTop: 35,
            fontSize: 40,
            fontWeight: "bold",
            color: "#43373F",
          }}
        >
          Sign Up
        </Text>

        <View style={styles.signUpContainer}>
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Full Name"
            placeholderTextColor="#504747"
          />
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Email Address"
            placeholderTextColor="#504747"
          />
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Username"
            placeholderTextColor="#504747"
          />
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Password"
            placeholderTextColor="#504747"
          />
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Re-Type Password"
            placeholderTextColor="#504747"
          />

          <CheckBox title="Click to accept Terms & Conditions" />

          <CreateAccountButton
            text="Create"
            onPress={() => navigation.navigate("Login")}
          />

          <BackButton
            text="Back to Login"
            onPress={() => navigation.goBack()}
          />
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

export const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <Text>HOME SCREEN</Text>
    </LinearGradient>
  );
};

export const ProfileScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#20E9A9", "#5762D5"]}
      style={styles.screen}
    ></LinearGradient>
  );
};

export const TrainingScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <View>
        <SwipeyButton onSwipe={() => navigation.navigate("AirForce")} />
        <Text>AirForce Test</Text>

        <SwipeyButton onSwipe={() => navigation.navigate("Army")} />
        <Text>Army Test</Text>

        <SwipeyButton onSwipe={() => navigation.navigate("Marines")} />
        <Text>Marines Test</Text>

        <SwipeyButton onSwipe={() => navigation.navigate("Navy")} />
        <Text>Navy Test</Text>
      </View>
    </LinearGradient>
  );
};

export const SettingsScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <Text>This is the settings screen</Text>
      <LogOutButton
        text="Logout"
        onPress={() => navigation.navigate("Login")}
      />
    </LinearGradient>
  );
};

export const AirForceScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <Text>This is the AirForce TEST!!!!!!!!</Text>
      <LogOutButton text="Back" onPress={() => navigation.goBack()} />
    </LinearGradient>
  );
};

export const ArmyScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <Text>This is the ARMY TEST!!!!!</Text>
      <LogOutButton text="Back" onPress={() => navigation.goBack()} />
    </LinearGradient>
  );
};

export const MarineScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <Text>This is the Marines TEST!!!</Text>
      <LogOutButton text="Back" onPress={() => navigation.goBack()} />
    </LinearGradient>
  );
};

export const NavyScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <Text>This is the Navy Test!!!!</Text>
      <LogOutButton text="Back" onPress={() => navigation.goBack()} />
    </LinearGradient>
  );
};

// Style --------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  screen: {
    height: "100%",
    paddingTop: 30,
    paddingBottom: 500,
    backgroundColor: "#211D1D",
    alignItems: "center",
  },

  gradientBackground: {
    height: "100%",
    paddingTop: 80,
    paddingBottom: 500,
    alignItems: "center",
  },

  container: {
    backgroundColor: "#333745",
    height: 730,
    width: "90%",
    alignContent: "center",
    borderRadius: 30,
  },

  input: {
    height: 110,
    width: 265,
    paddingTop: 8,
    paddingLeft: 85,
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputTextBox: {
    width: 300,
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },

  buttons: {
    width: "100%",
    height: 160,
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 27,
    paddingRight: 27,
    justifyContent: "space-between",
    alignContent: "center",
    //overlayColor: "black",
  },

  font: {
    fontSize: 120,
    paddingLeft: 65,
    paddingBottom: 100,
    fontWeight: "bold",
    color: "#43373F",
  },

  forgotButton: {
    height: 300,
    width: 400,
    paddingLeft: 120,
    //paddingTop: 60,
    alignContent: "center",
  },

  getStarted: {},

  signUpContainer: {
    height: 600,
    paddingLeft: 25,
    paddingTop: 50,
    paddingBottom: 50,
    paddingRight: 25,
    justifyContent: "space-between",
    alignContent: "center",
  },
});
