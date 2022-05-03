import { lightColor, white } from "../../styles/colors";

import { StyleSheet } from "react-native";
import { gradient } from "../../styles/template";
import { spacing } from "../../styles/sizing";

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
