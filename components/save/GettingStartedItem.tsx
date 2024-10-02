import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

export const GettingStartedItem: FC<PropsWithChildren> = ({ children }) => {
  const { bodyExtraLarge } = typography;
  const { white } = colors;
  const { ps, tl } = breakpoints;

  return (
    <Grid
      item
      flexGrow={1}
      sx={{
        width: "50%",
        [ps]: {
          width: "100%",
        },
        [tl]: { width: "50%" },
      }}
    >
      <Grid
        container
        direction="column"
        sx={{
          backgroundColor: white,
          width: "100%",
        }}
      >
        <Grid item>
          <Box
            sx={{
              "& p": {
                mb: 0,
                ...bodyExtraLarge,
                mt: 3,
              },
              ul: {
                listStyleType: "none",
                m: 0,
                p: 0,
                listStylePosition: "outside",
              },
              "& img": {
                float: "left !important",
                height: "100px !important",
                pt: "30px !important",
                pr: "20px !important",
                ":hover": {
                  backgroundColor: "transparent !important",
                },
              },
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
