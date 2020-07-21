import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import "localstorage-polyfill";

import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/styles.js";

import { StatusBar } from "react-native";
import FancyButton from "../components/fancyButton.js";

import Hasher from "./helpers/Hasher.js";
import Cookie from "./helpers/Cookie.js";

export const LoginScreen = ({ navigation }) => {
  const baseURL = "https://large-project-2020.herokuapp.com/";

  let [userCred, setUserCred] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState("");

  /*
  const handleLoginPress1 = () => {
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
      userCred +
      '","password":"' +
      Hasher(userPassword) +
      '"}';

    fetch(baseURL + "users/loginUser", {
      method: "POST",
      body: js,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json();
        console.log(JSON.stringify(response.id));

        if (response == null || response.id <= 0) {
          alert("Incorrect combo");
          return;
        }
      })

      .then((responseJSON) => {
        setLoading(false);
        console.log(JSON.stringify(responseJSON));
        console.log("Login Successful");
        return navigation.navigate("Main");
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        console.log("Failure :(");
      });
  };
  */

  const handleLoginPress2 = async (event) => {
    event.preventDefault();

    var js =
      '{"username":"' +
      userCred +
      '","password":"' +
      Hasher(userPassword) +
      '"}';

    console.log(js);

    try {
      const response = await fetch(
        baseURL + "users/loginUser",

        {
          method: "POST",
          body: js,
          headers: { "Content-Type": "application/json" },
        }
      );

      var res = JSON.parse(await response.text());

      console.log(JSON.stringify(res));
      if (res == null || res.id <= 0) {
        alert("Incorrect Username/Email & Password");
        return;
      } else {
        var user = {
          firstName: res.firstName,
          lastName: res.lastName,
          id: res.id,
        };

        localStorage.setItem("user_data", JSON.stringify(user));

        // redirect
        //window.location.href = "/dashboard";
        return navigation.navigate("Main");
      }
    } catch (e) {
      alert(e.toString());
      console.log(e);
      return;
    }
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
            fontSize: 20,
            justifyContent: "center",
            paddingLeft: 45,
            paddingBottom: 30,
            fontFamily: "monospace",

            //position: "relative",
          }}
        >
          Test, Train and Track
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
          <FancyButton text="Login" onPress={handleLoginPress2} />
          <FancyButton
            text="Create Account"
            onPress={() => navigation.navigate("SignUp")}
          />
          <FancyButton text="Map" onPress={() => navigation.navigate("Map")} />
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
