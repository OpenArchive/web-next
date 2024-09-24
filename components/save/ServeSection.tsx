import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ServeSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { ps, ts } = breakpoints;
  const [title, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Box
        sx={{
          h5: {
            width: "100%",
            mb: 6,
          },
        }}
      >
        {title}
      </Box>
      <Grid
        container
        direction="row"
        columnSpacing={6}
        sx={{
          flexDirection: "row",
          ".serveItem": {
            width: "50%",
          },
          [ps]: {
            flexDirection: "column",
            ".serveItem": {
              width: "100%",
            },
          },
          [ts]: {
            flexDirection: "row",
            ".serveItem": {
              width: "50%",
            },
          },
        }}
      >
        {rest}
      </Grid>
    </PageSection>
  );
};
