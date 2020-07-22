import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import FancyButton from "../components/fancyButton.js";

import { styles } from "../styles/styles.js";

export const Confirm = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <View style={{}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "monospace",
            paddingLeft: 75,
          }}
        >
          Verify confirmation sent to email
        </Text>

        <View style={{ paddingLeft: 110, paddingTop: 80, paddingBottom: 80 }}>
          <Image
            style={{
              width: 180,
              height: 200,
              //paddingHorizontal: 100,
            }}
            source={require("../img/x4.png")}
          />
        </View>

        <FancyButton
          text="Back To Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </LinearGradient>
  );
};
