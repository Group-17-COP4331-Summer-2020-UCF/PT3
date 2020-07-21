import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import FancyButton from "../components/fancyButton.js";

import { styles } from "../styles/styles.js";

export const Fail = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <View style={{}}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
            fontFamily: "monospace",
            paddingLeft: 75,
          }}
        >
          You Have Failed
        </Text>
        <Text style={{ fontSize: 20, fontStyle: "italic", paddingLeft: 70 }}>
          Your scores have been saved
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
          text="Go Back Home"
          onPress={() => {
            navigation.navigate("Main");
          }}
        />
      </View>
    </LinearGradient>
  );
};
