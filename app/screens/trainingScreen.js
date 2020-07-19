import React from "react";
import { Text, View, TextInput, Image, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from "../styles/styles.js";

import SwipeyButton from "../components/swipeButton.js";
import FancyButton from "../components/fancyButton.js";

export const TrainingScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <View>
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            paddingBottom: 75,
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Training Module
          </Text>
          <Text style={{ fontSize: 22, color: "#40423e" }}>
            Select a Test below to begin training
          </Text>
        </View>

        <View
          style={{
            //backgroundColor: "black",
            height: 450,
            justifyContent: "space-between",
          }}
        >
          <View style={more_styles.container}>
            <View style={{ paddingTop: 22, paddingLeft: 100, width: 280 }}>
              <FancyButton
                text="Air Force Test"
                onPress={() => navigation.navigate("AirForce")}
              />
            </View>

            <Image
              style={{
                width: 100,
                height: 87,
                //paddingHorizontal: 100,
              }}
              resizeMode="contain"
              source={require("../img/AirForce4.svg.png")}
            ></Image>
          </View>

          <View style={more_styles.container}>
            <View style={{ paddingTop: 22, paddingLeft: 100, width: 280 }}>
              <FancyButton
                text="Army Test"
                onPress={() => navigation.navigate("Army")}
              />
            </View>

            <Image
              style={{
                width: 100,
                height: 87,
                //paddingHorizontal: 100,
              }}
              resizeMode="contain"
              source={require("../img/army.svg.png")}
            ></Image>
          </View>

          <View style={more_styles.container}>
            <View style={{ paddingTop: 22, paddingLeft: 100, width: 280 }}>
              <FancyButton
                text="Marines Test"
                onPress={() => navigation.navigate("Marines")}
              />
            </View>

            <Image
              style={{
                width: 100,
                height: 87,
                //paddingHorizontal: 100,
              }}
              resizeMode="contain"
              source={require("../img/marines.png")}
            ></Image>
          </View>

          <View style={more_styles.container}>
            <View style={{ paddingTop: 22, paddingLeft: 100, width: 280 }}>
              <FancyButton
                text="Navy Test"
                onPress={() => navigation.navigate("Navy")}
              />
            </View>

            <Image
              style={{
                width: 100,
                height: 87,
                //paddingHorizontal: 100,
              }}
              resizeMode="contain"
              source={require("../img/navy.png")}
            ></Image>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const more_styles = StyleSheet.create({
  container: {
    height: 100,
    width: 400,
    backgroundColor: "#2a2c2d",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 5,
  },
});
