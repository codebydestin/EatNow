import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import template from "../../styles/template";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const ListingCard = ({ listing, largeSize }) => {
  const { name, distance, rating, categories, price } = listing;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper(largeSize)}
      onPress={() => navigation.navigate("ListingDetail")}
    >
      <Image source={{ uri: listing.image_url }} style={styles.coverImage} />
      {rating && (
        <View style={styles.ratingWrap}>
          <Icon name="star" style={styles.starIcon} />
          <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        </View>
      )}
      <View style={styles.subTextBox}>
        <Text style={styles.title}>{name}</Text>
        <View style={template.horBox}>
          {categories?.map((cat) => (
            <Text style={styles.subText} key={cat.title}>
              {cat.title}
            </Text>
          ))}
        </View>
        <Text style={styles.subText}>
          {(distance * 0.000621371).toFixed(2)}
          miles
        </Text>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListingCard;
