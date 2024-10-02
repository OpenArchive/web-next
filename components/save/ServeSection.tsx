import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { loadImage } from "lib/frontendHelpers";

export const ServeSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { ps, tl } = breakpoints;
  const [title, rawImage, description, ...rest] = children as any[];
  const image = loadImage(rawImage);

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item>
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
        </Grid>
        <Grid item>
          <Box
            sx={{
              height: "300px",
              width: "100%",
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              p: 3,
              mb: 4,
            }}
          />
        </Grid>
        <Grid item>{description}</Grid>
      </Grid>
      <Grid
        container
        direction="column"
        columnSpacing={6}
        sx={{
          width: "100%",
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
        }}
      >
        {rest}
      </Grid>
    </PageSection>
  );
};
