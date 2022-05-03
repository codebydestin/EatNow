import { ScrollView, Text, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import ListingCard from "../ListingCard";
import React from "react";
import { lightColor } from "../../styles/colors";
import styles from "./styles";

const ListingCarousel = ({ listings, title, highlight = false, icon }) => {
  return (
    <View style={styles.wrapper(highlight)}>
      {!!listings.length && (
        <View style={styles.headerView}>
          <Icon name={icon} color={lightColor} size={18} />
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ overflow: "visible" }}
      >
        {listings?.map((listing) => {
          return (
            <ListingCard
              listing={listing}
              key={listing.id}
              largeSize={highlight}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ListingCarousel;
