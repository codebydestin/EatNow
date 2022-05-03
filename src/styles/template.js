import { StyleSheet } from "react-native";
import { gradientColor } from "./colors";

const template = StyleSheet.create({
  horBox: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export const gradient = {
  shadowColor: gradientColor,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 1,
  shadowRadius: 12,
  elevation: 5,
};

export default template;
