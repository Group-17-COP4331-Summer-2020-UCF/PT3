import React from "react";
import { Text, View, TextInput, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from "../styles/styles.js";

import SwipeyButton from "../components/swipeButton.js";

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
