import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { red } from "../../styles/colors";
import styles from "./styles";
import template from "../../styles/template";
import { useNavigation } from "@react-navigation/native";

const ListingCard = ({ listing, largeSize }) => {
  const { name, distance, rating, categories, price } = listing;
  const navigation = useNavigation();

  const metersToMiles = useMemo(
    () => (distance * 0.000621371).toFixed(2),
    [listing]
  );

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
            <Text style={[styles.subText, styles.tags]} key={cat.title}>
              {cat.title}
            </Text>
          ))}
        </View>
        <View style={styles.distance}>
          <Icon
            name="map-pin"
            color={red}
            size={16}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.subText}>{`${metersToMiles} miles`}</Text>
        </View>
        {!!price && <Text style={styles.priceText}>{price}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default ListingCard;
