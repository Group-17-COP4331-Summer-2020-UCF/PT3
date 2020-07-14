import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import SwipeButton from "rn-swipe-button";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Icony = () => (
  <MaterialCommunityIcons name="home" color="#3b5998" size={26} />
);

export default function SwipeyButton({ onSwipe }) {
  return (
    <View>
      <SwipeButton
        height={50}
        width={200}
        title="Submit"
        titleColor="grey"
        onSwipeSuccess={onSwipe}
        railFillBackgroundColor="black"
        railFillBorderColor="#5762D5"
        thumbIconBackgroundColor="black"
        thumbIconBorderColor="black"
        thumbIconComponent={Icony}
        disabledRailBackgroundColor="black"
        disabledThumbIconBackgroundColor="white"
      />
    </View>
  );
}
