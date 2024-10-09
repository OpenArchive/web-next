import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";

export const CoreFeatureItem: FC<PropsWithChildren> = ({ children }) => {
  const { white, turquoise } = colors;
  const { bodyLarge } = typography;
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
          width: "100%",
          "&:hover": {
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            backgroundColor: turquoise,
          },
          "&:hover .slide": {
            opacity: 1,
            transition: "0.5s",
          },
          "&:hover h5": {
            color: "white",
          },
          "&:hover .image": {
            backgroundColor: white,
          },

          position: "relative",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          sx={{ width: "100%" }}
        >
          <Grid container item sx={{ width: "100%", pt: 2, pl: 4 }}>
            <Grid item xs={1.5}>
              <Box className="image" sx={{ width: "50px", borderRadius: 2 }}>
                {image}
              </Box>
            </Grid>
            <Grid
              item
              xs={10.5}
              sx={{
                pt: "8px",
                "> h5": { fontWeight: 600 },
              }}
            >
              {title}
            </Grid>
          </Grid>
        </Grid>
        <Box
          className="slide"
          sx={{
            width: "100%",
            backgroundColor: turquoise,
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            color: white,
            position: "absolute",
            transition: "0.0s",
            opacity: 0,
            zIndex: 10,
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
                pt: 0,
                m: 0,
                mt: -1,
              },
              a: {
                textDecoration: "underline",
                textDecorationStyle: "dashed",
              },
            }}
          >
            {description}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
