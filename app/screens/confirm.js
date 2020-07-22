import React, { useState } from "react";
import { Text, View, TextInput, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import FancyButton from "../components/fancyButton.js";

import { styles } from "../styles/styles.js";

export const Confirm = ({ navigation }) => {
  let [userToken, setUserToken] = useState("");
  const baseURL = "https://large-project-2020.herokuapp.com/";

  const doVerify = async (event) => {
    event.preventDefault();

    var js = '{"token":"' + userToken + '"}';

    try {
      const response = await fetch(baseURL + "users/verifyUser", {
        method: "POST",
        body: js,
        headers: { "Content-Type": "application/json" },
      });

      var res = JSON.parse(await response.text());

      console.log(res);
      if (res != null && res.error != null) {
        alert("Invalid or expired token");
        return;
      } else {
        alert("Email Confirmed!");
        navigation.navigate("Login");
      }
    } catch (e) {
      alert(e.toString());
      return;
    }
  };

  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <View>
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
        <View style={{ paddingTop: 200, paddingBottom: 120, paddingLeft: 20 }}>
          <TextInput
            placeholder="Token"
            placeholderTextColor="#000000"
            onChangeText={(UserToken) => setUserToken(UserToken)}
            style={{
              backgroundColor: "white",
              width: 370,
              height: 50,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ justifyContent: "space-between", height: 130 }}>
          <FancyButton text="Confirm" onPress={doVerify} />

          <FancyButton
            text="Back To Login"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};
