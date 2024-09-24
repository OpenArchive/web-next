import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const GettingStartedSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [title, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid
          container
          item
          sx={{
            mb: -6,
            pb: 0,
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid
            container
            direction="column"
            item
            sx={{
              width: "100%",
            }}
          >
            {title}
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={2}
          sx={{
            mt: 0,
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
