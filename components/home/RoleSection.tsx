import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const RoleSection: FC<PropsWithChildren> = ({ children }) => {
  const { bodyLarge } = typography;
  const { white } = colors;
  const { ps, ts } = breakpoints;
  const [title, item1, item2, item3] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "center" }}>
          <Box sx={{ h2: { mb: 2 } }}>{title}</Box>
          <Box
            sx={{
              margin: "0 auto",
              "> p": bodyLarge,
              mb: 6,
              [ps]: {
                mb: 4,
              },
              [ts]: {
                mb: 6,
              },
              maxWidth: 700,
            }}
          >
          </Box>
        </Grid>
        <Grid
          item
          container
          flexWrap="nowrap"
          sx={{
            height: 360,
            h5: { m: 0 },
            flexDirection: "row",
            [ps]: {
              flexDirection: "column",
            },
            [ts]: {
              flexDirection: "row",
            },
          }}
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="space-between"
            sx={{
              width: "50%",
              [ps]: {
                width: "100%",
              },
              [ts]: {
                width: "50%",
              },
            }}
          >
            <Grid
              item
              sx={{
                height: "50%",
                pb: 3,
                [ps]: {
                  pb: 1,
                },
                [ts]: {
                  pb: 3,
                },
              }}
            >
              {item1}
            </Grid>
            <Grid
              item
              sx={{
                height: "50%",
                pt: 0,
                [ps]: {
                  pt: 0,
                },
                [ts]: {
                  pt: 0,
                },
              }}
            >
              {item2}
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              pt: 0,
              pl: 3,
              [ps]: {
                width: "100%",
                pt: 2,
                pl: 0,
              },
              [ts]: {
                width: "50%",
                pt: 0,
                pl: 3,
              },
            }}
          >
            {item3}
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
