import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { red } from "../../styles/colors";

const LocationBar = ({ location }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => navigation.navigate("LocationSearch")}
        style={styles.locationView}
      >
        <Icon name="map-marker" size={18} color={red} />
        <Text style={styles.text}>{location}</Text>
        <Icon name="caret-down" size={12} />
      </TouchableOpacity>
    </View>
  );
};

export default LocationBar;
