import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { mdiCogOutline } from "@mdi/js";

import { styles } from "../styles/styles.js";

import { StatusBar } from "react-native";
import { FancyButton } from "../components/fancyButton.js";

export const ProfileScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <View>
        <Text>Welcome: user</Text>
      </View>
    </LinearGradient>
  );
};
