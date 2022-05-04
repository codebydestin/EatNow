import { StyleSheet } from "react-native";
import { base } from "../../styles/font";
import { spacing } from "../../styles/sizing";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
  },
  locationView: {
    marginHorizontal: 12,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    ...base,
    fontWeight: "bold",
    paddingHorizontal: spacing,
  },
});

export default styles;
