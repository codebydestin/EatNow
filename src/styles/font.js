import { textColor } from "./colors";

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
  color: "#A8AAAF",
  fontSize: 13,
  marginVertical: 4,
};
