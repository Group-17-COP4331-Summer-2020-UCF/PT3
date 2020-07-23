import React, { useState } from "react";
import { Text, View, TextInput, Image, Button } from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { mdiCogOutline } from "@mdi/js";

import CountDown from "react-native-countdown-component";

import { styles } from "../styles/styles.js";

import FancyButton from "../components/fancyButton.js";

export const MarineScreen = ({ navigation }) => {
  const baseURL = "https://large-project-2020.herokuapp.com/";
  const [testNum, setNum] = useState("1");
  const [isChecked, setChecked] = useState(false);
  const [isMale, setMale] = useState(false);
  const [isFemale, setFemale] = useState(false);

  const sendUserInfo = async (event) => {
    if(isMale==true){
        var js = '{"sex":"' + "Male" + '","age":"' + userAge + '"}';
	}else if(isFemale==true){
        var js = '{"sex":"' + "Female" + '","age":"' + userAge + '"}';
	}

    console.log(js);
    try {
      const response = await fetch(
        baseURL + "/MarineStandards/searchMarineStandard",

        {
          method: "POST",
          body: js,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (e) {
      alert(e.toString());
      console.log(e);
      return;
    }

    return setNum("2");
  };

  if (testNum == "1") {
    return (
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
        <View>
          <Text
            style={{
              fontSize: 40,
              //lineHeight: 100,
              //textAlign: "justify",
              fontWeight: "bold",
            }}
          >
            Press 'Start' to Begin
          </Text>
          <View style={{ height: 600 }}>
            <View
              style={{
                paddingLeft: 50,
                paddingTop: 100,
              }}
            >
              <Image
                style={{
                  width: 300,
                  height: 300,
                  //paddingHorizontal: 100,
                }}
                source={require("../img/ex6.png")}
              />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                height: 150,
                paddingTop: 35,
              }}
            >
              <FancyButton text="Start" onPress={() => setNum("2a")} />
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  } else if (testNum == "2a") {
    return (
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Select Gender</Text>
        <View
          style={{
            paddingBottom: 75,
            paddingTop: 75,
            height: 270,
            justifyContent: "space-between",
          }}
        >
          <View>
            <CheckBox
              title="Male"
              checked={isMale}
              onPress={() => setMale(!isMale)}
            />
            <CheckBox
              title="Female"
              checked={isFemale}
              onPress={() => setFemale(!isFemale)}
            />
          </View>
        </View>

        <View style={{ paddingBottom: 75, paddingTop: 75 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>User Age</Text>
          <View style={{ paddingBottom: 100 }}>
            <TextInput
              style={styles.inputTextBox}
              placeholder="User Age"
              onChangeText={(age) => setAge(age)}
              placeholderTextColor="#504747"
            />
          </View>
          <View style={{ height: 120, justifyContent: "space-between" }}>
            <FancyButton text="Submit" onPress={sendUserInfo} />
          </View>
        </View>
      </LinearGradient>
    );
  } else if (testNum == "2") {
    return (
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
        <View style={{ padding: 25 }}>
          <Text style={{ fontSize: 25, lineHeight: 100, textAlign: "center" }}>
            {" "}
            Starting in:{" "}
          </Text>
          <CountDown
            until={3}
            onFinish={() => setNum("3")}
            size={40}
            digitStyle={{ backgroundColor: "#5762D5" }}
            digitTxtStyle={{ color: "#20E9A9" }}
            timeToShow={["M", "S"]}
            timeLabels={{ m: "min", s: "sec" }}
          />
          <FancyButton text="Exit Test" onPress={() => navigation.goBack()} />
        </View>
      </LinearGradient>
    );
  } else if (testNum == "3") {
    return (
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
        <View style={{ padding: 25 }}>
          <CountDown until={120} size={0} />
          <Text style={{ fontSize: 40, lineHeight: 100, textAlign: "center" }}>
            {" "}
            Pull-Ups{" "}
          </Text>

          <FancyButton text="Continue Test" onPress={() => setNum("4")} />
          <FancyButton text="Exit Test" onPress={() => navigation.goBack()} />
        </View>
      </LinearGradient>
    );
  } else if (testNum == "4") {
    return (
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
        <Text
          style={{
            fontSize: 40,
            //lineHeight: 100,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Rest & Record Pull-Ups
        </Text>
        <View style={{ paddingTop: 50 }}>
          <CountDown
            until={300}
            onFinish={() => setNum("5")}
            size={40}
            digitStyle={{ backgroundColor: "#5762D5" }}
            digitTxtStyle={{ color: "#20E9A9" }}
            timeToShow={["M", "S"]}
            timeLabels={{ m: "min", s: "sec" }}
          />
        </View>

        <View style={{ paddingBottom: 75, paddingTop: 75 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            How Many Pull-Ups?
          </Text>
          <TextInput
            style={more_styles.inputTextBoxCentered}
            placeholder=""
            placeholderTextColor="#504747"
          />
        </View>

        <View
          style={{
            justifyContent: "space-between",
            height: 150,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 15,
            paddingRight: 15,
            width: 375,
            borderRadius: 5,
            backgroundColor: "#2a2c2d",
            borderWidth: 5,
          }}
        >
          <FancyButton text="Begin Crunches" onPress={() => setNum("5")} />
          <FancyButton text="Exit Test" onPress={() => navigation.goBack()} />
        </View>
      </LinearGradient>
    );
  } else if (testNum == "5") {
    return (
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
        <View style={{ padding: 25 }}>
          <Text style={{ fontSize: 25, lineHeight: 100, textAlign: "center" }}>
            {" "}
            Starting in:{" "}
          </Text>
          <CountDown
            until={3}
            onFinish={() => setNum("6")}
            size={40}
            digitStyle={{ backgroundColor: "#5762D5" }}
            digitTxtStyle={{ color: "#20E9A9" }}
            timeToShow={["M", "S"]}
            timeLabels={{ m: "min", s: "sec" }}
            // timeLabels={{m: 'MM', s: 'SS'}}
          />

          <FancyButton text="Exit Test" onPress={() => navigation.goBack()} />
        </View>
      </LinearGradient>
    );
  } else if (testNum == "6") {
    return (
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
        <CountDown
          until={120}
          size={0}
          timeToShow={["M", "S"]}
          timeLabels={{ m: null, s: null }}
        />
        <View style={{ padding: 25 }}>
          <Text style={{ fontSize: 40, lineHeight: 100, textAlign: "center" }}>
            {" "}
            Sit-Ups{" "}
          </Text>
          <CountDown
            until={120}
            onFinish={() => setNum("7")}
            size={40}
            digitStyle={{ backgroundColor: "#5762D5" }}
            digitTxtStyle={{ color: "#20E9A9" }}
            timeToShow={["M", "S"]}
            timeLabels={{ m: "min", s: "sec" }}
          />
          <FancyButton text="Skip Test" onPress={() => setNum("7")} />
          <FancyButton text="Back" onPress={() => navigation.goBack()} />
        </View>
      </LinearGradient>
    );
  } else if (testNum == "7") {
    return (
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
        <Text
          style={{
            fontSize: 40,
            //lineHeight: 100,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Rest & Record Sit-Ups
        </Text>
        <View style={{ paddingTop: 50 }}>
          <CountDown
            until={300}
            onFinish={() => setNum("8")}
            size={40}
            digitStyle={{ backgroundColor: "#5762D5" }}
            digitTxtStyle={{ color: "#20E9A9" }}
            timeToShow={["M", "S"]}
            timeLabels={{ m: "min", s: "sec" }}
          />
        </View>

        <View style={{ paddingBottom: 75, paddingTop: 75 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            How Many Crunches?
          </Text>
          <TextInput
            style={more_styles.inputTextBoxCentered}
            placeholder=""
            placeholderTextColor="#504747"
          />
        </View>

        <View
          style={{
            justifyContent: "space-between",
            height: 150,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 15,
            paddingRight: 15,
            width: 375,
            borderRadius: 5,
            backgroundColor: "#2a2c2d",
            borderWidth: 5,
          }}
        >
          <FancyButton text="Begin Run" onPress={() => setNum("8")} />
          <FancyButton text="Exit Test" onPress={() => navigation.goBack()} />
        </View>
      </LinearGradient>
    );
  } else if (testNum == "8") {
    return (
      <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
        <View>
          <Text>This is indeed: {testNum}</Text>
          <FancyButton
            text="Start Run!"
            onPress={() => navigation.navigate("Map")}
          />
          <FancyButton text="Back" onPress={() => navigation.goBack()} />
        </View>
      </LinearGradient>
    );
  } 
};

import { StyleSheet } from "react-native";

const more_styles = StyleSheet.create({
  inputTextBoxCentered: {
    width: 200,
    height: 60,
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    alignSelf: "center",
    textAlign: "center",
  },
});
