import { lightText, textColor } from "./colors";

export const base = {
  color: textColor,
};

export const titleText = {
  ...base,
  fontWeight: "bold",
  marginVertical: 4,
  fontSize: 15,
};

export const subText = {
  color: lightText,
  fontSize: 13,
  marginVertical: 4,
  fontWeight: "600",
  flexWrap: "wrap",
};
