import React from "react";
import { Text, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from "../styles/styles.js";

import FancyButton from "../components/fancyButton.js";

export const StartupScreen = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.screen}
      colors={["#4E576A", "#211D1D", "black"]}
    >
      <LinearGradient style={styles.container} colors={["#20E9A9", "#5762D5"]}>
        <Image
          source={require("../img/uncleSam.jpg")}
          style={{ width: 200, height: 300 }}
        />

        <Text style={{ fontSize: 30 }}>Are you ready to get THICC?</Text>
        <FancyButton
          text="Get Started!"
          onPress={() => navigation.push("Login")}
          style={styles.getStarted}
        />
      </LinearGradient>
    </LinearGradient>
  );
};
