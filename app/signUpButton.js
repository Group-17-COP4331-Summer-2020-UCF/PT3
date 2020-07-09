import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUpButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={["#20E9A9", "#5762D5"]}
        style={{ borderRadius: 5 }}
      >
        <View style={styles.circleGradient}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    //backgroundColor: "#909cc2",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    //textTransform: "uppercase",
    fontSize: 20,
    paddingTop: 5,
    textAlign: "center",
  },
  circleGradient: {
    margin: 4,
    backgroundColor: "#43373F90",
    borderRadius: 5,
    height: 40,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "white",
    color: "#008f68",
    fontSize: 12,
  },
});
