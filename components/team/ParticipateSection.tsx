import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ParticipateSection: FC<PropsWithChildren> = ({ children }) => {
  const { white, mediumBurgundy, darkBurgundy } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [title, description, ...items] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "center" }}>
          {title}
        </Grid>
        <Grid item sx={{ textAlign: "center", "> p": bodyLarge }}>
          {description}
        </Grid>
        <Grid
          item
          container
          spacing={6}
          alignItems="flex-end"
          sx={{
            pt: 6,
            pb: 12,
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: {
              flexDirection: "row",
            },
            ".participateItem:nth-of-type(2) a": {
              border: 0,
              color: white,
              backgroundColor: mediumBurgundy,
              "&:hover": {
                backgroundColor: darkBurgundy,
              },
              "> span": { "&:hover": { backgroundColor: darkBurgundy } },
            },
          }}
        >
          {items}
        </Grid>
      </Grid>
    </PageSection>
  );
};
