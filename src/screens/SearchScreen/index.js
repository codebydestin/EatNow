import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import client from "../../api/client";
import ListingCard from "../../components/ListingCard";
import SearchBar from "../../components/SearchBar";
import styles from "./styles";
import LocationBar from "../../components/LocationBar";
import { LinesLoader } from "react-native-indicator";
import { lightColor, red } from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import useListings from "../../hooks/useListings";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("New York");
  const [performSearch, listings, showError, isLoading] = useListings();

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

  const contentView = (
    <>
      {showError ? (
        errorView
      ) : (
        <>
          <Text>This is a header</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {listings?.map((listing) => {
              return <ListingCard listing={listing} key={listing.id} />;
            })}
          </ScrollView>
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
