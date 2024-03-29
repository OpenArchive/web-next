import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { breakpoints, colors, typography } from "styles/theme";

export const ParticipateItem: FC<PropsWithChildren> = ({ children }) => {
  const { lightTurquoise } = colors;
  const { ps, tl, ds } = breakpoints;
  const { outlinedButton } = typography;
  const [first, ...rest] = children as any[];

  return (
    <Grid
      className="participateItem"
      item
      sx={{
        width: "33%",
        height: 360,
        [ps]: { width: "100%" },
        [tl]: { width: "50%" },
        [ds]: { width: "33%" },
      }}
    >
      <Grid
        item
        container
        direction="column"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Box
          sx={{
            height: "100%",
            backgroundColor: lightTurquoise,
            p: 3,
            pb: 0,
            "> p": { display: "inline-block" },
            a: { ...outlinedButton, m: 0, mr: 1 },
            ".mdx-link": { textDecoration: "none" },
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{ height: "100%", a: { textDecoration: "none" } }}
          >
            <Grid item>{first}</Grid>
            <Grid item>{rest}</Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
