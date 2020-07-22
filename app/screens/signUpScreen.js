import React, { useState } from "react";
import { Text, View, TextInput, Button, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "../styles/styles.js";

import FancyButton from "../components/fancyButton.js";

import Hasher from "./helpers/Hasher.js";

export const SignUpScreen = ({ navigation }) => {
  const baseURL = "https://large-project-2020.herokuapp.com";

  let [userName, setUserName] = useState("");
  let [userUserName, setUserUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [userConfirmPassword, setUserConfirmPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState("");
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitButton = () => {
    setErrortext("");
    if (!userName) {
      alert("Full Name can't be blank");
      return;
    }
    if (!userEmail) {
      alert("Email can't be blank");
      return;
    }
    if (!userUserName) {
      alert("Username can't be blank");
      return;
    }
    if (!userPassword) {
      alert("Password can't be blank");
      return;
    }
    if (userPassword != userConfirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    var jsContents =
      '{"username":"' +
      userUserName +
      '","password":"' +
      Hasher(userPassword) +
      '","name":"' +
      userName +
      '","email":"' +
      userEmail +
      '"}';

    fetch(baseURL + "/users/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsContents,
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        setLoading(false);
        console.log(responseJSON);
        if (responseJSON == "User added!") {
          setIsRegistraionSuccess(true);
          console.log("Registration Successful. Please Login to proceed");
          alert("User Registered");
          return navigation.navigate("Login");
        } else {
          setErrortext("Registration Unsuccessful");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        console.log("Failure :(");
      });
    if (isRegistraionSuccess) {
      console.log("It was a success bitches!!");
    }
  };

  return (
    <LinearGradient
      colors={["#4E576A", "#211D1D", "black"]}
      style={styles.screen}
    >
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.container}>
        <Text
          style={{
            height: 90,
            paddingLeft: 100,
            paddingTop: 35,
            fontSize: 40,
            fontWeight: "bold",
            color: "#43373F",
          }}
        >
          Sign Up
        </Text>

        <View style={styles.signUpContainer}>
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Full Name"
            onChangeText={(UserName) => setUserName(UserName)}
            placeholderTextColor="#504747"
          />
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Email Address"
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            placeholderTextColor="#504747"
          />
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Username"
            onChangeText={(UserUserName) => setUserUserName(UserUserName)}
            placeholderTextColor="#504747"
          />
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Password"
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            secureTextEntry={true}
            placeholderTextColor="#504747"
          />
          <TextInput
            style={styles.inputTextBox}
            placeholder="  Re-Type Password"
            onChangeText={(UserConfirmPassword) =>
              setUserConfirmPassword(UserConfirmPassword)
            }
            secureTextEntry={true}
            placeholderTextColor="#504747"
          />

          <CheckBox title="Click to accept Terms & Conditions" />

          <FancyButton text="Create" onPress={handleSubmitButton} />

          <FancyButton
            text="Back to Login"
            onPress={() => navigation.goBack()}
          />
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};
