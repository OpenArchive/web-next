import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

export const GettingStartedItem: FC<PropsWithChildren> = ({ children }) => {
  const { body } = typography;
  const { white } = colors;
  const { ps, tl } = breakpoints;

  return (
    <Grid
      item
      flexGrow={1}
      sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
    >
      <Grid
        container
        direction="column"
        sx={{
          backgroundColor: white,
          p: 3,
          height: "100%",
        }}
      >
        <Grid container item direction="row" spacing={1} alignItems="center">
          <Grid item>
            <Box className="step" />
          </Grid>
          <Grid item>
            <Box component="p" sx={{ ...body }} />
          </Grid>
        </Grid>
        <Grid item>
          <Box
            sx={{
              "& p": { mb: 0 },
              ul: {
                listStyleType: "none",
                m: 0,
                p: 0,
                listStylePosition: "outside",
              },
              "& img": {
                float: "left !important",
                height: "60px !important",
                pt: "15px !important",
                pr: "5px !important",
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
