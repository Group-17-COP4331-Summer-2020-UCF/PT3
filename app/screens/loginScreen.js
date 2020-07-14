import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/styles.js";

import { StatusBar } from "react-native";
import FancyButton from "../components/fancyButton.js";

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
          <FancyButton
            text="Login"
            onPress={() => navigation.navigate("Main")}
          />
          <FancyButton
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
