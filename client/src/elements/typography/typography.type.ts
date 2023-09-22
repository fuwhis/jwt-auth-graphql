import { TypographyProps as MTypographyProps } from "@mui/material";
import { ElementType } from "react";
import { CSSTextStyles } from "~/constants/types.type";

type letters = ["solid_neutral", "solid_primary", "solid_error"];
type numbers = [0, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

type UnionFromArray<
  T extends readonly any[],
  U extends readonly any[]
> = `${T[number]}.${U[number]}`;

type UnionType = UnionFromArray<letters, numbers>;

export type TypographyProps = MTypographyProps &
  CSSTextStyles & {
    component?: ElementType;
    cate?:
      | "text_sm_regular"
      | "text_sm_medium"
      | "text_xs_regular"
      | "text_md_regular"
      | "h1"
      | "h2"
      | "text_body_01"
      | "text_body_02"
      | "text_headline_01"
      | "text_headline_02"
      | "text_headline_03"
      | "text_headline_04";
    color?: UnionType;
  };
