import { FC } from "react";
import Image from "next/image";
import { Grid, Box } from "@mui/material";
import { colors, typography, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import jobAbout1 from "public/images/job-about-1.png";
import jobAbout2 from "public/images/job-about-2.png";

export const AboutSection: FC = () => {
  const { white } = colors;
  const { h2, body } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid item xs={6}>
          <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            <Box
              sx={{
                width: 350,
                top: 20,
                left: 20,
                position: "absolute",
                zIndex: 10,
              }}
            >
              <Image src={jobAbout1} alt="" loader={loader} />
            </Box>
            <Box sx={{ width: 350, top: 150, left: 150, position: "absolute" }}>
              <Image src={jobAbout2} alt="" loader={loader} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="h2" sx={h2}>
            About <strong>OpenArchive</strong>
          </Box>
          <Box component="p" sx={body}>
            OpenArchive is an experienced research and development nonprofit
            organization dedicated to the ethical collection and long-term
            preservation of mobile media. We work to promote freedom of
            expression and privacy on the internet by creating tools, guides,
            and workshops to protect human rights defenders and their media. Our
            work centers both large human rights focused NGOs as well as
            activist communities, researchers, designers, developers, academic
            institutions, and advocates to create and share best practices in
            order to advance secure, long-term mobile media preservation and
            internet freedom for marginalized and targeted communities.
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};
