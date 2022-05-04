import { base, subText, titleText } from "../../styles/font";
import { gradientColor, lightText, white, yellow } from "../../styles/colors";
import { spacing, width, windowWidth } from "../../styles/sizing";

import { StyleSheet } from "react-native";
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
    backgroundColor: gradientColor,
  },
  title: {
    ...titleText,
  },
  subText: {
    ...subText,
  },
  distance: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  tags: {
    marginRight: 6,
    backgroundColor: gradientColor,
    paddingHorizontal: 6,
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
