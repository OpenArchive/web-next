import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

export const CoreFeatureItem: FC<PropsWithChildren> = ({ children }) => {
  const { bodyLarge } = typography;
  const { turquoise, white, lightGrey } = colors;
  const { ps, tl } = breakpoints;
  const [image, title, ...description] = children as any[];

  return (
    <Grid
      item
      sx={{
        color: white,
        width: "50%",
        [ps]: { width: "100%" },
        [tl]: { width: "50%" },
      }}
    >
      <Box
        sx={{
          backgroundColor: lightGrey,
          width: "100%",
          "&:hover .slide": {
            transition: "0.5s",
            bottom: "0px",
          },
          position: "relative",
          //          overflow: "hidden",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          sx={{ width: "100%" }}
        >
          <Grid container item sx={{ width: "100%" }}>
            <Grid item xs={1.5}>
              <Box sx={{ width: "50px" }}>{image}</Box>
            </Grid>
            <Grid item xs={10.5} sx={{ pt: "4px" }}>
              {title}
            </Grid>
          </Grid>
        </Grid>
        {/*        <Box
          className="slide"
          sx={{
            width: "100%",
            backgroundColor: turquoise,
            color: white,
            height: "370px",
            position: "absolute",
            bottom: "-470px",
            transition: "1.5s",
          }}
        >
          <Box
            sx={{
              "> p": {
                ...bodyLarge,
                color: white,
                "& em > strong": {
                  color: white,
                },
                p: 4,
                m: 0,
              },
              a: {
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              },
            }}
          >
            {description}
          </Box>
          </Box> */}
      </Box>
    </Grid>
  );
};
