import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const GettingStartedSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey, mediumGrey, turquoise } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [title, description, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid
          container
          item
          sx={{
            borderBottom: `1px solid ${mediumGrey}`,
            pb: 3,
            mb: 2,
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
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            sx={{
              width: "100%",
            }}
          >
            <Grid item>
              <Box
                sx={{
                  "> p": {
                    ...bodyLarge,
                    fontWeight: "bold",
                    textAlign: "left",
                    maxWidth: "90%",
                    mt: 2,
                  },
                }}
              >
                {description}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={8}
          sx={{
            mt: 0,
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
            counterReset: "stepCounter",
            ".step": {
              counterIncrement: "stepCounter",
            },
            ".step::before": {
              ...bodyLarge,
              content: '"Step " counter(stepCounter) ":"',
              color: turquoise,
              fontWeight: "bold",
              display: "flex",
              pl: "3px",
              pt: "9px",
            },
            // a: outlinedButton,
          }}
        >
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
