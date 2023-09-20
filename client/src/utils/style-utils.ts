import { FONT_SIZE, FONT_WEIGHT } from "~/constants/common";
import { CSSTextStyles } from "~/constants/types.type";

export const convertToRem = (value: string | number) => {
  if (typeof value === "string") {
    return value;
  }
  if (value && isNaN(value) === false) {
    return value / 16 + "rem";
  }
  return value;
};

export const generateTextStyles = (obj: CSSTextStyles) => {
  const { bold = "md", size = "md" } = obj;
  return {
    fontWeight: FONT_WEIGHT[bold] || undefined,
    fontSize: convertToRem(FONT_SIZE[size]),
  };
};
