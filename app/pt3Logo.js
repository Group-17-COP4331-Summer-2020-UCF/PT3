import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearTextGradient } from "react-native-text-gradient";

export default function PT3() {
  return (
    <LinearTextGradient
      start={[0, 0.5]}
      end={[1, 0.5]}
      colors={["#20E9A9", "#5762D5"]}
      style={{ borderRadius: 5 }}
    >
      {" "}
      HELLO
    </LinearTextGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    //backgroundColor: "#909cc2",
  },

  circleGradient: {
    margin: 4,
    backgroundColor: "#43373F90",
    borderRadius: 5,
    height: 40,
    fontSize: 20,
  },
});
