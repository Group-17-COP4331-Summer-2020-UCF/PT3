import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/styles.js";

import { StatusBar } from "react-native";
import FancyButton from "../components/fancyButton.js";

import Hasher from "./helpers/Hasher.js";

export const LoginScreen = ({ navigation }) => {
  const baseURL = "https://large-project-2020.herokuapp.com";

  let [userCred, setUserCred] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState("");

  const handleLoginPress = () => {
    setErrortext("");
    if (!userCred) {
      alert("Please enter username or email");
      return;
    }
    if (!userPassword) {
      alert("Please enter password");
      return;
    }
    setLoading(true);

    var js =
      '{"username":"' +
      userCred.value +
      '","password":"' +
      Hasher(userPassword.value) +
      '"}';

    fetch(baseURL + "users/loginUser", {
      method: "POST",
      body: js,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        /*
        if (
          response.statusText == "OK" &&
          response.status >= 200 &&
          response.status < 300
        ) {
          return response.json();
        } else {
          throw new Error("Server can't be reached!");
        }
        */
       if (!response.ok)
       {
         console.log.("SHIT HIT FAN!");
       }
      })
      .then((responseJSON) => {
        setLoading(false);
        console.log(responseJSON);

        console.log("Something Happened");
        alert("Success!");
        return navigation.navigate("Main");
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        console.log("Failure :(");
      });
  };

  //Script above me^^^^^^
  //
  //
  //
  return (
    <LinearGradient
      colors={["#4E576A", "#211D1D", "black"]}
      style={styles.screen}
    >
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.container}>
        <Text style={styles.font}>PT3</Text>
        <Text
          style={{
            fontSize: 25,
            justifyContent: "center",
            paddingLeft: 45,
            paddingBottom: 30,

            //position: "relative",
          }}
        >
          {" "}
          Test, Train and maybe Track
        </Text>

        <View style={styles.input}>
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Username or Email"
            onChangeText={(UserCred) => setUserCred(UserCred)}
            placeholderTextColor="#504747"
          />
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Password"
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            secureTextEntry={true}
            placeholderTextColor="#504747"
          />
        </View>

        <View style={styles.buttons}>
          <FancyButton text="Login" onPress={handleLoginPress} />
          <FancyButton
            text="Create Account"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>

        <View style={styles.forgotButton}>
          <TouchableOpacity>
            <Text style={{ paddingTop: 90, color: "white" }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <StatusBar
        hidden={false}
        barStyle="dark-content"
        backgroundColor="#20E9A9"
      />
    </LinearGradient>
  );
};
