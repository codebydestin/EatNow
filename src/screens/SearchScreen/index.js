import React, { useState, useEffect } from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import client from "../../api/client";
import ListingCard from "../../components/ListingCard";
import SearchBar from "../../components/SearchBar";
import styles from "./styles";
import LocationBar from "../../components/LocationBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("New York");
  const [businesses, setBusinesses] = useState([]);

  const searchAPI = async () => {
    const response = await client.get("/search", {
      params: {
        term,
        location: "new york",
        limit: 50,
      },
    });
    setBusinesses(response.data.businesses);
  };

  return (
    <ScrollView
      style={styles.wrapper}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      <LocationBar location={location} />
      <SearchBar term={term} onTermChange={setTerm} onSearch={searchAPI} />
      {businesses?.map((listing) => {
        return <ListingCard listing={listing} />;
      })}
    </ScrollView>
  );
};

export default SearchScreen;
