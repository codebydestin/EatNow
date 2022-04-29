import React, { useState, useEffect } from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import client from "../../api/client";
import ListingCard from "../../components/ListingCard";
import styles from "./styles";

const SearchScreen = () => {
  const [term, setTerm] = useState("burger");
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
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={searchAPI}>
        <Text>Load Data</Text>
      </TouchableOpacity>
      {businesses?.map((listing) => {
        return <ListingCard listing={listing} />;
      })}
    </ScrollView>
  );
};

export default SearchScreen;
