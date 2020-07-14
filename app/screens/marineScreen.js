import React from "react";
import { Text, View, TextInput, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from "../styles/styles.js";

import { FancyButton } from "../components/fancyButton.js";

export const MarineScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <Text>This is the Marines TEST!!!</Text>
      <FancyButton text="Back" onPress={() => navigation.goBack()} />
    </LinearGradient>
  );
};
