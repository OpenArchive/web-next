import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { GuideItem } from "components/guides/GuideItem";

type GuidesSectionProps = PropsWithChildren<{
  pages: any[];
}>;

export const GuidesSection: FC<GuidesSectionProps> = ({ pages, children }) => {
  const { white, mediumGrey } = colors;

  return (
    <PageSection
      backgroundColor={white}
      sx={{ borderBottom: `1px solid ${mediumGrey}` }}
    >
      <Grid
        container
        rowSpacing={6}
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item sx={{ textAlign: "center" }}>
          <Box sx={{ maxWidth: 700, margin: "0 auto", mb: 6 }}>{children}</Box>
        </Grid>
        <Grid item container spacing={4}>
          {pages.map((page) => (
            <GuideItem key={page.path} {...page} />
          ))}
        </Grid>
      </Grid>
    </PageSection>
  );
};
