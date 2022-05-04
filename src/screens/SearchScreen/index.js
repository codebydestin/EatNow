import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { lightColor, red } from "../../styles/colors";

import Icon from "react-native-vector-icons/FontAwesome";
import { LinesLoader } from "react-native-indicator";
import ListingCarousel from "../../components/ListingCarousel";
import LocationBar from "../../components/LocationBar";
import SearchBar from "../../components/SearchBar";
import styles from "./styles";
import useListings from "../../hooks/useListings";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("New York");
  const [performSearch, listings, showError, isLoading] = useListings();

  const listingData = [
    {
      data: "highestRated",
      title: "Highest Rated",
      icon: "trophy",
      highlight: !!listings.length,
    },
    {
      data: "distance",
      title: "Near me",
      icon: "map-pin",
      highlight: false,
    },
    {
      data: "lowestListings",
      title: `${term} places in ${location}`,
      icon: "cutlery",
      highlight: false,
    },
  ];

  const loadingView = (
    <View style={{ alignItems: "center" }}>
      <LinesLoader barWidth={3} barHeigh={28} barNumber={4} color={red} />
    </View>
  );

  const errorView = (
    <View style={styles.errorWrap}>
      <Icon name="warning" size={28} color={lightColor} />
      <Text style={styles.warningText}>Oops something went wrong!</Text>
    </View>
  );

  const filterListingsBy = (data) => {
    return listings.filter((lis) => {
      switch (data) {
        case "highestRated":
          return lis.rating > 4.5;
        case "distance":
          return lis.distance < 2000;
        default:
          return lis.rating <= 4.5;
      }
    });
  };

  const contentView = (
    <>
      {showError ? (
        errorView
      ) : (
        <>
          {listingData.map((lis) => (
            <ListingCarousel
              key={lis.title}
              listings={filterListingsBy(lis.data)}
              title={lis.title}
              icon={lis.icon}
              highlight={lis.highlight}
            />
          ))}
        </>
      )}
    </>
  );

  return (
    <ScrollView
      style={styles.wrapper}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
    >
      <View style={styles.header}>
        <LocationBar location={location} />
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onSearch={() => performSearch(term)}
        />
      </View>

      {isLoading ? loadingView : contentView}
    </ScrollView>
  );
};

export default SearchScreen;
