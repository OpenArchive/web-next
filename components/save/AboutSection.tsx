import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const AboutSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;
  const { bodyExtraLarge } = typography;
  const { ps, ts } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        spacing={3}
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [ts]: { flexDirection: "row" },
        }}
      >
        <Grid
          item
          sx={{
            width: "100%",
            [ps]: { width: "100%" },
            [ts]: { width: "100%" },
          }}
        >
          <Box sx={{ p: 3, "> p": bodyExtraLarge }}>{children}</Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};
