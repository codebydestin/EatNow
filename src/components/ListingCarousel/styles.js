import { StyleSheet } from "react-native";
import { base } from "../../styles/font";
import { spacing } from "../../styles/sizing";
import { gradientColor, white } from "../../styles/colors";

const styles = StyleSheet.create({
  wrapper: (highlight) => ({
    marginBottom: 16,
    paddingBottom: 16,
    backgroundColor: highlight ? gradientColor : white,
  }),
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing,
  },
  headerText: {
    ...base,
    fontWeight: "bold",
    margin: spacing,
    fontSize: 15,
  },
});

export default styles;
