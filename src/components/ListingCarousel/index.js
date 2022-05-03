import React from "react";
import { ScrollView, Text, View } from "react-native";
import ListingCard from "../ListingCard";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { lightColor } from "../../styles/colors";

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
