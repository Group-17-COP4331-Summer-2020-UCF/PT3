import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  Button,
  ImagePropTypes,
} from "react-native";
import FlatButton from "./button.js";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("./img/Space.png")}
        style={{ width: "100%", height: "60%" }}
      />
      <Text style={styles.font}>PT3</Text>

      <View style={styles.input}>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 3,
            width: 200,
            backgroundColor: "#f9bd2e",
          }}
          placeholder="  Username"
          placeholderTextColor="black"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 3,
            width: 200,
            backgroundColor: "#f9bd2e",
          }}
          placeholder="  Password"
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Login" onPress={addGoalHandler} />

        <Button title="Sign Up" onPress={addGoalHandler} />
        <FlatButton text="RED" onPress={addGoalHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    paddingTop: 30,
    paddingBottom: 300,
    backgroundColor: "#2b374b",
    alignItems: "center",
  },

  input: {
    height: 80,
    width: 1000,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#9bd7d5",
  },

  buttons: {
    paddingTop: 5,
    width: 100,
    height: 90,
    justifyContent: "space-between",
    overlayColor: "black",
  },

  font: {
    fontSize: 100,
    fontFamily: "Roboto",
    paddingBottom: 10,
    fontWeight: "bold",
    color: "#f88379",
  },
});
