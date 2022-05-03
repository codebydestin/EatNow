import { AppState, StyleSheet } from "react-native";

import Navigation from "./Navigation";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return AppState.currentState === "active" && <Navigation />;
}
