import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

import LoginButton from "./loginButton.js";
import SignUpButton from "./signUpButton.js";
import GetStartedButton from "./getStartedButton.js";
import CreateAccountButton from "./createAccountButton.js";

export const StartupScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Image
        source={require("./img/uncleSam.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Text>Are you ready to train?</Text>
      <GetStartedButton
        text="Get Started!"
        onPress={() => navigation.push("Login")}
      />
    </View>
  );
};

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.font}>PT3</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputTextBox}
          placeholder="  Username or Email"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.inputTextBox}
          placeholder="  Password"
          placeholderTextColor="grey"
        />
      </View>

      <View style={styles.buttons}>
        <LoginButton text="Login" onPress={() => navigation.navigate("Home")} />
        <SignUpButton
          text="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>

      <TouchableOpacity>
        <Text style={{ paddingTop: 90 }}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the homescreen</Text>
      <Button title="Sign Out" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Sign Up Screen</Text>
      <CreateAccountButton
        text="Create"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

// Style --------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    paddingTop: 150,
    paddingBottom: 500,
    backgroundColor: "beige",
    alignItems: "center",
  },

  input: {
    height: 120,
    width: 1000,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: "space-between",
    backgroundColor: "#333745",
    alignItems: "center",
  },

  inputTextBox: {
    width: 220,
    height: 40,
    backgroundColor: "#8DAB7F",
    borderRadius: 3,
  },

  buttons: {
    //flexDirection: "row",
    //paddingTop: 5,
    backgroundColor: "#333745",
    width: 400,
    height: 150,
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 100,
    paddingRight: 100,
    justifyContent: "space-between",
    alignContent: "center",
    overlayColor: "black",
    borderBottomEndRadius: 100,
  },

  font: {
    fontSize: 120,
    //borderRadius: 20,
    backgroundColor: "#333745",
    width: 400,
    paddingLeft: 90,
    fontFamily: "Roboto",
    paddingBottom: 10,
    fontWeight: "bold",
    color: "#FF6B6B",
    borderTopLeftRadius: 100,
  },
});
