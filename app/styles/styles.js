import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    paddingTop: 30,
    paddingBottom: 500,
    backgroundColor: "#211D1D",
    alignItems: "center",
  },

  gradientBackground: {
    height: "100%",
    paddingTop: 80,
    paddingBottom: 500,
    alignItems: "center",
  },

  container: {
    backgroundColor: "#333745",
    height: 750,
    width: "90%",
    alignContent: "center",
    borderRadius: 30,
  },

  input: {
    height: 110,
    width: 265,
    paddingTop: 8,
    paddingLeft: 105,
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputTextBox: {
    width: 300,
    height: 45,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },

  buttons: {
    width: "100%",
    height: 160,
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 27,
    paddingRight: 27,
    justifyContent: "space-between",
    alignContent: "center",
    //overlayColor: "black",
  },

  font: {
    fontSize: 120,
    paddingLeft: 65,
    paddingBottom: 80,
    fontWeight: "bold",
    color: "#43373F",
  },

  forgotButton: {
    height: 300,
    width: 400,
    paddingLeft: 120,
    //paddingTop: 60,
    alignContent: "center",
  },

  getStarted: {},

  signUpContainer: {
    height: 600,
    paddingLeft: 25,
    paddingTop: 50,
    paddingBottom: 50,
    paddingRight: 25,
    justifyContent: "space-between",
    alignContent: "center",
  },
});

export { styles };
