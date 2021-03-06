import client from "../api/client";
import { useState } from "react";

export default () => {
  const [listings, setListings] = useState([]);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const performSearch = async (term) => {
    setIsLoading(true);
    setShowError(false);
    setListings([]);

    try {
      const response = await client.get("/search", {
        params: {
          term,
          location: "new york",
          limit: 50,
          sort_by: "distance",
        },
      });
      setListings(response.data.businesses);
    } catch (err) {
      console.log("Err: ", err);
      setShowError(true);
    }
    setIsLoading(false);
  };

  return [performSearch, listings, showError, isLoading];
};
