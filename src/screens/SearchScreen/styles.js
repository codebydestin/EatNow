import { StyleSheet } from "react-native";
import { lightColor, white } from "../../styles/colors";
import { spacing } from "../../styles/sizing";
import { gradient } from "../../styles/template";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: white,
    flex: 1,
  },
  header: {
    backgroundColor: white,
    borderRadius: spacing,
    margin: spacing,
    ...gradient,
  },
  errorWrap: {
    alignItems: "center",
    marginVertical: 24,
  },
  warningText: {
    color: lightColor,
    marginVertical: 8,
  },
});

export default styles;
