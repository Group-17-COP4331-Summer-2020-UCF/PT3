import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "../styles/styles.js";

import FancyButton from "../components/fancyButton.js";

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

          <FancyButton
            text="Create"
            onPress={() => navigation.navigate("Login")}
          />

          <FancyButton
            text="Back to Login"
            onPress={() => navigation.goBack()}
          />
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};
