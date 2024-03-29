import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const InvolvedSection: FC<PropsWithChildren> = ({ children }) => {
  const { bodyLarge } = typography;
  const { white } = colors;
  const { ps, ts } = breakpoints;
  const [title, description, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "center" }}>
          <Box>{title}</Box>
          <Box
            sx={{
              "> p": bodyLarge,
              mb: 8,
              [ps]: {
                mb: 6,
              },
              [ts]: {
                mb: 8,
              },
              maxWidth: 700,
              margin: "auto",
            }}
          >
            {description}
          </Box>
        </Grid>
        <Grid
          item
          container
          flexWrap="nowrap"
          spacing={6}
          sx={{
            height: 360,
            a: { textDecoration: "none" },
            flexDirection: "row",
            [ps]: {
              flexDirection: "column",
            },
            [ts]: {
              flexDirection: "row",
            },
          }}
        >
          {rest}
        </Grid>
      </Grid>
    </PageSection>
  );
};
