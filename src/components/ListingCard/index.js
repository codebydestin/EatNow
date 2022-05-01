import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import template from "../../styles/template";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const ListingCard = ({ listing }) => {
  const { name, distance, rating, categories, price } = listing;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigation.navigate("ListingDetail")}
    >
      <Image
        source={{ uri: listing.image_url }}
        style={{
          width: "100%",
          height: 200,
          resizeMode: "cover",
          borderRadius: 20,
        }}
      />
      <View style={styles.ratingWrap}>
        <Icon name="star" />
        <Text>{rating}</Text>
      </View>
      <View style={styles.subTextBox}>
        <Text style={styles.title}>{name}</Text>
        <View style={template.horBox}>
          <Text style={styles.subText}>{categories[0]?.title} • </Text>
          <Text style={styles.subText}>{distance}</Text>
        </View>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListingCard;
