import React, {useState} from "react";
import { Text, View, TextInput, Image, Button } from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { mdiCogOutline } from "@mdi/js";
import CountDown from 'react-native-countdown-component';

import { styles } from "../styles/styles.js";

import { FancyButton } from "../components/fancyButton.js";

export const ArmyScreen = ({ navigation }) => {
    const[testNum, setNum] = useState("1");

    if(testNum=="1"){
      return (
        <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
        <View>
          <Button title="Begin Push-Up Section" onPress={() => setNum("2")}/>
          <Button title ="Back" onPress={() => navigation.goBack()}/>
        </View>
        </LinearGradient>
     );
	}else if(testNum=="2"){
       return(
         <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
         <View>
           <CountDown
           until={3}
           onFinish={()=> setNum("3")}
           size={40}
           />
           <Button title ="Back" onPress={() => navigation.goBack()}/>
         </View>
         </LinearGradient>
	   );
	}else if(testNum=="3"){
       <CountDown/>
       return(
         <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
         <CountDown
          until={120}
          size={0}
         />
         <View>
           <CountDown
           until={120}
           onFinish={()=> setNum("4")}
           size={40}
           />
           <Button title ="Back" onPress={() => navigation.goBack()}/>
         </View>
         </LinearGradient>
	   );
	}else if(testNum=="4"){
       return(
         <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
         <CountDown
          until={300}
          size={0}
         />
         <CountDown
          until={300}
          size={0}
         />
         <View>
           <CountDown
           until={300}
           onFinish={()=> setNum("5")}
           size={20}
           />
            <TextInput
            style={styles.inputTextBox}
            placeholder="   Number of Push-Ups Completed"
            placeholderTextColor="#504747"
          />
           <Button title="Begin Sit-Ups" onPress={() => setNum("5")}/>
           <Button title ="Back" onPress={() => navigation.goBack()}/>
         </View>
         </LinearGradient>
	   );
	}else if(testNum=="5"){
       return(
         <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
         
         <View>
           <CountDown
           until={3}
           onFinish={()=> setNum("6")}
           size={40}
           />           
           <Button title ="Back" onPress={() => navigation.goBack()}/>
         </View>
         </LinearGradient>
	   );
	}else if(testNum=="6"){
       return(
         <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
         <CountDown
          until={120}
          size={0}
         />
         <View>
           <CountDown
           until ={120}
           onFinish={()=> setNum("7")}
           size={40}
           />     
           <Button title ="Back" onPress={() => navigation.goBack()}/>
         </View>
         </LinearGradient>
	   );
	}else if(testNum=="7"){
       return(
         <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
         <CountDown
          until={300}
          size={0}
         />
         <CountDown
          until={300}
          size={0}
         />
         <View>
           <CountDown
           until={300}
           onFinish={()=> setNum("8")}
           size={20}
           />
            <TextInput
            style={styles.inputTextBox}
            placeholder="   Number of Sit-Ups Completed"
            placeholderTextColor="#504747"
          />
           <Button title="Begin Run" onPress={() => setNum("8")}/>
           <Button title ="Back" onPress={() => navigation.goBack()}/>
         </View>
         </LinearGradient>
	   );
	}else if(testNum=="8"){
       return(
         <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
         <View>
           <Text>This is indeed: {testNum}</Text>
           <Button title="Timed, GPS tracked run. when 2 miles is reached move on" onPress={() => setNum("9")}/>
           <Button title ="Back" onPress={() => navigation.goBack()}/>
         </View>
         </LinearGradient>
	   );
	}else if(testNum=="9"){
       return(
         <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
         <View>
           <Text>This is indeed: {testNum}</Text>
           <Text>"Congrats you finished!"Show you composite Scores</Text>
           <Button title ="Back" onPress={() => navigation.goBack()}/>
         </View>
         </LinearGradient>
	   );
	}
};
