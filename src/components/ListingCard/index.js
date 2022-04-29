import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import template from "../../styles/template";

const ListingCard = ({ listing }) => {
  const { name, distance, rating, categories } = listing;
  return (
    <View style={styles.wrapper}>
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
        <Text>{rating}</Text>
      </View>
      <View style={styles.subTextBox}>
        <Text style={styles.title}>{name}</Text>
        <View style={template.horBox}>
          <Text style={styles.subText}>{categories[0]?.title} • </Text>
          <Text style={styles.subText}>{distance}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListingCard;
