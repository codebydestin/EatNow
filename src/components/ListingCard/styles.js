import { StyleSheet } from "react-native";
import { white, yellow } from "../../styles/colors";
import { base, subText, titleText } from "../../styles/font";
import { spacing, width, windowWidth } from "../../styles/sizing";
import { gradient } from "../../styles/template";

const styles = StyleSheet.create({
  wrapper: (largeSize) => ({
    width: largeSize ? 320 : 240,
    padding: spacing,
    backgroundColor: white,
    margin: spacing / 2,
    borderRadius: spacing,
    ...gradient,
  }),
  coverImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 16,
  },
  title: {
    ...titleText,
  },
  subText: {
    ...subText,
  },
  starIcon: {
    color: yellow,
    fontSize: 16,
    marginRight: 4,
  },
  ratingText: {
    ...base,
    fontWeight: "bold",
  },
  ratingWrap: {
    backgroundColor: white,
    position: "absolute",
    top: spacing,
    right: spacing,
    padding: spacing / 2,
    minWidth: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    flexDirection: "row",
  },
  subTextBox: {
    marginTop: 12,
  },
  priceText: {
    color: "#178899",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 8,
  },
});

export default styles;
