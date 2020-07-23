import React, { Component } from "react";
import { View } from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";

export default class Stop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: true,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    };

    this.toggleStopwatch = this.toggleStopwatch.bind(this);
  }

  toggleStopwatch() {
    this.setState({
      stopwatchStart: !this.state.stopwatchStart,
    });
  }

  render() {
    return (
      <View>
        <Stopwatch
          laps
          msecs={false}
          start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
          //THIS IS HOW WE CAN PASS DATA!!!!!!
          getTime={(time) => console.log(time)}
        />
      </View>
    );
  }
}

const options = {
  container: {
    backgroundColor: "#000000",
    padding: 5,
    borderRadius: 5,
    width: 150,
  },
  text: {
    fontSize: 30,
    color: "#FFF",
    marginLeft: 7,
  },
};
