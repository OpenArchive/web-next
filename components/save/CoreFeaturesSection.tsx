import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const CoreFeaturesSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;
  const { bodyExtraLarge } = typography;
  const { ps, tl } = breakpoints;
  const [title, description, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid item xs={12}>
          {title}
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ "> p": bodyExtraLarge, pb: 3 }}>{description}</Box>
        </Grid>
        <Grid
          container
          item
          sx={{
            width: "100%",
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
          spacing={3}
        >
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
