import { StyleSheet } from "react-native";
import { white } from "../../styles/colors";
import { subText, titleText } from "../../styles/typography";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: white,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    margin: 10,
    shadowColor: "#F4F4F4",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,

    elevation: 5,
  },
  title: {
    ...titleText,
    fontFamily: "Barlow-Regular",
  },
  subText: {
    ...subText,
  },
  ratingWrap: {
    backgroundColor: white,
    position: "absolute",
    top: 16,
    right: 16,
    padding: 8,
    minWidth: 44,
    alignItems: "center",
    borderRadius: 4,
  },
  subTextBox: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  priceText: {
    color: "#178899",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 8,
  },
});

export default styles;
