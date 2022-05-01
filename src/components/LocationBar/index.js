import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const LocationBar = ({ location }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Icon name="map-marker" />
      <TouchableOpacity
        onPress={() => navigation.navigate("LocationSearch")}
        style={styles.locationText}
      >
        <Text>{location}</Text>
      </TouchableOpacity>
      <Icon name="caret-down" />
    </View>
  );
};

export default LocationBar;
