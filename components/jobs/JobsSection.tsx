import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { JobItem } from "components/jobs/JobItem";

type JobsSectionProps = {
  pages: any[];
};

export const JobsSection: FC<JobsSectionProps> = ({ pages }) => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        {pages.map((page: any) => (
          <JobItem key={page.path} {...page} />
        ))}
      </Grid>
    </PageSection>
  );
};
