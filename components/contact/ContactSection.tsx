import { FC, PropsWithChildren } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import contactUs from "public/images/ContactUs/contact-us-1.png";

export const ContactSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { outlinedButton, bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const rest = (children as any[]).slice(0, -2);
  const last = (children as any[]).slice(-2);

  return (
    <BaseHeaderSection backgroundColor={white}>
      <Grid
        container
        justifyContent="space-between"
        spacing={6}
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
        }}
      >
        <Grid
          item
          sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              [ps]: { height: 200 },
              [tl]: { height: "100%" },
              backgroundImage: `url(${contactUs.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid
          item
          sx={{ width: "50%", [ps]: { width: "100%" }, [tl]: { width: "50%" } }}
        >
          <Box
            sx={{
              span: {
                "&:hover": {
                  backgroundColor: "white",
                  border: 0,
                },
              },
              a: { mr: 2 },
              img: {
                "&:hover": {
                  filter:
                    "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
                },
              },
              "> p": { ...bodyLarge, mb: 6 },
              "> h6": { mb: 4 },
              pt: 6,
            }}
          >
            {rest}
          </Box>
          <Box sx={{ mt: -1, backgroundColor: "transparent" }}>
            <iframe
              title="contact-us"
              src="https://embeds.beehiiv.com/21fa00df-9f9e-43c6-bfb7-124139615554?slim=true"
              data-test-id="beehiiv-embed"
              width="100%"
              frameBorder="0"
              scrolling="no"
              style={{
                padding: 4,
                backgroundColor: "transparent",
              }}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "transparent",
              mt: -6,
              em: { ...bodyLarge, fontStyle: "italic", textAlign: "center" },
              a: {
                ...outlinedButton,
                mr: 2,
                ".mdx-link": { textDecoration: "none" },
              },
            }}
          >
            {last}
          </Box>
        </Grid>
      </Grid>
    </BaseHeaderSection>
  );
};
