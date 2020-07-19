import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";

import MapView, {
  PROVIDER_GOOGLE,
  ProviderPropType,
  Marker,
  Polyline,
  AnimatedRegion,
  Callout,
} from "react-native-maps";

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import FancyButton from "../components/fancyButton";

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 26.12177;
const LONGITUDE = -80.3832039;

export class RunTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTraveled: 0,
      valueprevLatLng: {},

      error: null,
    };
  }

  /*
  componentDidMount() {
    this._getLocation();
  }
  // get permissions from user
  _getLocation = async () => {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status != "granted") {
      console.log("Permission not granted");
    }

    this.setState({
      errorMessage: "You dun messed up",
    });

    const location = await Location.getCurrentPositionAsync();

    this.setState({
      location,
    });
  };


              {JSON.stringify(this.state.location.coords)}


              
*/

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
    );

    navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      const { routeCoordinates } = this.state;
      const newCoordinate = { latitude, longitude };
      this.setState({
        latitude,
        longitude,
        routeCoordinates: routeCoordinates.concat([newCoordinate]),
        distanceTravelled: distanceTravelled + this.calcDistance(newCoordinate),
        prevLatLng: newCoordinate,
      });
    });
  }

  // Track moving position
  /*
    navigator.geolocation.watchPosition(
      (position) => {
        console.log(position);
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      }
    );
  }
*/

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  calcDistance = (newLatLng) => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.getMapRegion()}
        >
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
          <Marker coordinate={this.getMapRegion()}></Marker>
        </MapView>

        <View style={{ height: 200, backgroundColor: "black", width: "100%" }}>
          <FancyButton text="End Run" />
          <Text style={{ color: "white", fontSize: 30 }}>
            {this.state.latitude}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
