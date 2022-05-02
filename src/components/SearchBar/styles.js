import { StyleSheet } from "react-native";
import { bgColor, lightColor, textColor } from "../../styles/colors";
import { spacing } from "../../styles/sizing";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: bgColor,
    borderRadius: spacing,
    paddingHorizontal: 12,
    margin: spacing,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 16,
    color: lightColor,
    marginRight: spacing / 2,
  },
  searchInput: {
    paddingVertical: 12,
    flex: 1,
    color: textColor,
  },
});

export default styles;
