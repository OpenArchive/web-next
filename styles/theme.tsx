import Image from "next/legacy/image";
import Link from "next/link";
import { Box } from "@mui/material";

export const breakpoints = {
  dl: "@media (min-width: 1366px)",
  ds: "@media (min-width: 1024px)",
  tl: "@media (min-width: 768px)",
  ts: "@media (min-width: 576px)",
  pl: "@media (min-width: 360px)",
  ps: "@media (min-width: 0px)",
};

export const colors = {
  white: "#ffffff",
  black: "#1a1a1a",
  lightGrey: "#f1f4f8",
  mediumGrey: "#e3e3e3",
  darkGrey: "#7f8d7d",
  turquoise: "#00b4a6",
  lightTurquoise: "#aae6e1",
  darkBurgundy: "#5e1618",
  mediumBurgundy: "#7d595a",
  lightBurgundy: "#ad898a",
};

const typographyDefaults = {
  fontFamily: "Montserrat, sans-serif",
  fontStyle: "normal",
  color: colors.black,
  margin: 0,
};

export const typography = {
  h1: {
    ...typographyDefaults,
    fontWeight: 600,
    fontSize: "90px",
    lineHeight: "100%",
    marginBottom: "40px",
    [breakpoints.ps]: {
      fontSize: "34px",
      marginBottom: "30px",
    },
    [breakpoints.pl]: {
      fontSize: "34px",
    },
    [breakpoints.ts]: {
      fontSize: "50px",
    },
    [breakpoints.tl]: {
      fontSize: "50px",
    },
    [breakpoints.ds]: {
      fontSize: "66px",
    },
    [breakpoints.dl]: {
      fontSize: "90px",
    },
    "& strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
    "& em > strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
  },
  h2: {
    ...typographyDefaults,
    fontWeight: 600,
    fontSize: "66px",
    lineHeight: "100%",
    marginBottom: "40px",
    [breakpoints.ps]: {
      fontSize: "30px",
    },
    [breakpoints.pl]: {
      fontSize: "30px",
    },
    [breakpoints.ts]: {
      fontSize: "44px",
    },
    [breakpoints.tl]: {
      fontSize: "44px",
    },
    [breakpoints.ds]: {
      fontSize: "60px",
    },
    [breakpoints.dl]: {
      fontSize: "66px",
    },
    "& strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
    "& em > strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
  },
  h3: {
    ...typographyDefaults,
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "125%",
    mb: 3,
    [breakpoints.ps]: {
      fontSize: "16px",
    },
    [breakpoints.pl]: {
      fontSize: "16px",
    },
    [breakpoints.ts]: {
      fontSize: "20px",
    },
    [breakpoints.tl]: {
      fontSize: "20px",
    },
    [breakpoints.ds]: {
      fontSize: "30px",
    },
    [breakpoints.dl]: {
      fontSize: "40px",
    },
    "& strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
    "& em > strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
  },
  h4: {
    ...typographyDefaults,
    fontWeight: 600,
    fontSize: "34px",
    lineHeight: "44.2px",
    mb: 3,
    "& em > strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
  },
  h5: {
    ...typographyDefaults,
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: "130%",
    mb: 2,
    [breakpoints.ps]: {
      fontSize: "20px",
    },
    [breakpoints.pl]: {
      fontSize: "20px",
    },
    [breakpoints.ts]: {
      fontSize: "24px",
    },
    [breakpoints.tl]: {
      fontSize: "24px",
    },
    [breakpoints.ds]: {
      fontSize: "30px",
    },
    [breakpoints.dl]: {
      fontSize: "34px",
    },
    "& em > strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
  },
  h6: {
    ...typographyDefaults,
    fontSize: "24px",
    lineHeight: "150%",
    fontWeight: 600,
    [breakpoints.ps]: {
      fontSize: "18px",
    },
    [breakpoints.pl]: {
      fontSize: "18px",
    },
    [breakpoints.ts]: {
      fontSize: "20px",
    },
    [breakpoints.tl]: {
      fontSize: "20px",
    },
    [breakpoints.ds]: {
      fontSize: "22px",
    },
    [breakpoints.dl]: {
      fontSize: "24px",
    },
    "& em > strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
  },
  p: {
    ...typographyDefaults,
  },
  bodyExtraLarge: {
    ...typographyDefaults,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "28px",
    lineHeight: "150%",
    mb: 3,
    [breakpoints.ps]: {
      fontSize: "19px",
    },
    [breakpoints.pl]: {
      fontSize: "19px",
    },
    [breakpoints.ts]: {
      fontSize: "22px",
    },
    [breakpoints.tl]: {
      fontSize: "22px",
    },
    [breakpoints.ds]: {
      fontSize: "25px",
    },
    [breakpoints.dl]: {
      fontSize: "28px",
    },
    "& em > strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
  },
  bodyLarge: {
    ...typographyDefaults,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "22px",
    lineHeight: "150%",
    mb: 3,
    [breakpoints.ps]: {
      fontSize: "16px",
    },
    [breakpoints.pl]: {
      fontSize: "16px",
    },
    [breakpoints.ts]: {
      fontSize: "18px",
    },
    [breakpoints.tl]: {
      fontSize: "18px",
    },
    [breakpoints.ds]: {
      fontSize: "20px",
    },
    [breakpoints.dl]: {
      fontSize: "22px",
    },
    "& em > strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
  },
  body: {
    ...typographyDefaults,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    mb: 3,
    [breakpoints.ps]: {
      fontSize: "14px",
    },
    [breakpoints.pl]: {
      fontSize: "14px",
    },
    [breakpoints.ts]: {
      fontSize: "14px",
    },
    [breakpoints.tl]: {
      fontSize: "14px",
    },
    [breakpoints.ds]: {
      fontSize: "16px",
    },
    [breakpoints.dl]: {
      fontSize: "18px",
    },
    "& em > strong": {
      fontWeight: 700,
      color: colors.turquoise,
    },
    "& strong > em": {
      fontWeight: 700,
      color: colors.turquoise,
    },
  },
  blockquote: { ...typographyDefaults },
  outlinedButton: {
    ...typographyDefaults,
    display: "inline-block",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    lineHeight: "24px",
    a: { textDecoration: "none" },
    mt: 3,
    mb: 3,
    [breakpoints.ps]: {
      fontSize: "14px",
    },
    [breakpoints.pl]: {
      fontSize: "14px",
    },
    [breakpoints.ts]: {
      fontSize: "14px",
    },
    [breakpoints.tl]: {
      fontSize: "14px",
    },
    [breakpoints.ds]: {
      fontSize: "16px",
    },
    [breakpoints.dl]: {
      fontSize: "18px",
    },
    border: `1px solid ${colors.black}`,
    borderRadius: "500px",
    fontWeight: 700,
    textTransform: "none",
    textDecoration: "none",
    color: colors.black,
    p: 1.25,
    pl: "40px",
    pr: "40px",
    "&:hover": {
      backgroundColor: colors.turquoise,
      border: `1px solid ${colors.turquoise}`,
      color: colors.white,
      img: {
        filter:
          "brightness(0) saturate(100%) invert(93%) sepia(93%) saturate(27%) hue-rotate(99deg) brightness(107%) contrast(105%)",
      },
    },
  },
};

export const loader = (image: any) => `${image.src}?${image.width ?? ""}`;

export const components = {
  h1: ({ children }) => (
    <Box component="h1" sx={typography.h1}>
      {children}
    </Box>
  ),
  h2: ({ children }) => (
    <Box component="h2" sx={typography.h2}>
      {children}
    </Box>
  ),
  h3: ({ children }) => (
    <Box component="h3" sx={typography.h3}>
      {children}
    </Box>
  ),
  h4: ({ children }) => (
    <Box component="h4" sx={typography.h4}>
      {children}
    </Box>
  ),
  h5: ({ children }) => (
    <Box component="h5" sx={typography.h5}>
      {children}
    </Box>
  ),
  h6: ({ children }) => (
    <Box component="h6" sx={typography.h6}>
      {children}
    </Box>
  ),
  p: ({ children }) => (
    <Box component="p" sx={typography.body}>
      {children}
    </Box>
  ),
  hr: () => <Box component="hr" sx={{ mb: 3 }} />,
  img: ({ src, alt }) => {
    const image = require(`public/images/${src}`).default;

    return <Image src={image} alt={alt} loader={loader} />;
  },
  a: ({ href, children }) => (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      style={{ textDecoration: "none" }}
    >
      <Box
        component="span"
        className="mdx-link"
        sx={{
          color: "inherit",
          textDecoration: "underline",
          textDecorationColor: "#00b4a6",
          textDecorationStyle: "dashed",
          cursor: "pointer",
          "&:hover": {
            color: colors.white,
            backgroundColor: colors.turquoise,
            textDecorationColor: "#ffffff",
          },
        }}
      >
        {children}
      </Box>
    </Link>
  ),
};
