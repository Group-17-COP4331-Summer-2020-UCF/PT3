import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "../styles/styles.js";

export const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <Text>HOME SCREEN</Text>
    </LinearGradient>
  );
};
