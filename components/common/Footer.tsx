import { FC } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { colors, loader, typography, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { IconLink } from "components/common/IconLink";
import openArchiveLogo from "public/images/open-archive.svg";
import attribution from "public/images/attribution.svg";
import nonCommercial from "public/images/non-commercial.svg";
import shareAlike from "public/images/share-alike.svg";
import demchco from "public/images/demchco.svg";
import twitter from "public/images/twitter-black.svg";
import mastodon from "public/images/mastodon-black.svg";
import instagram from "public/images/instagram-black.svg";
import github from "public/images/github-black.svg";
import linkedin from "public/images/linkedin-black.svg";
import youtube from "public/images/youtube-black.svg";
import emailIcon from "public/images/email-icon.svg";

export const Footer: FC = () => {
  const t = useTranslate();
  const { body } = typography;
  const { lightGrey, mediumGrey, mediumBurgundy, darkBurgundy, turquoise } =
    colors;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const linkStyles = {
    ...body,
    mb: 2,
    fontWeight: 900,
    "&:hover": { color: turquoise },
    cursor: "pointer",
    "&a": { textDecoration: "none !important" },
  };
  const creativeCommonsIconSize = "19px";
  const socialIconSize = "28px";

  return (
    <PageSection
      backgroundColor={lightGrey}
      sx={{
        py: 5,
        [ps]: {
          py: 5,
          px: 3,
        },
        [pl]: {
          py: 5,
          px: 3,
        },
        [ts]: {
          py: 4,
          px: 4.375,
        },
        [tl]: {
          py: 4,
          px: 4.375,
        },
        [ds]: {
          py: 5,
          px: 6.25,
        },
        [dl]: {
          py: 5,
          px: 11.25,
        },
      }}
    >
      <Grid
        container
        sx={{
          paddingTop: 0,
          paddingBottom: 0,
          flexDirection: "row",
          flexWrap: "nowrap",
          [ps]: {
            flexDirection: "column-reverse",
            flexWrap: "wrap",
          },
          [ds]: {
            flexDirection: "row",
            flexWrap: "nowrap",
          },
        }}
      >
        <Grid
          item
          container
          flexWrap="nowrap"
          sx={{
            width: "40%",
            flexDirection: "column",
            [ps]: {
              flexDirection: "column",
              width: "100%",
            },
            [ds]: {
              flexDirection: "column",
              width: "40%",
            },
          }}
          spacing={0}
        >
          <Grid
            item
            container
            direction="row"
            flexWrap="nowrap"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              flexDirection: "row",
              flexWrap: "nowrap",
              mb: 4,
              mt: 0,
              [ps]: { mt: 4, mb: 0 },
              [ts]: { mt: 0, mb: 4 },
            }}
          >
            <Grid item>
              <Box
                sx={{
                  width: 200,
                  [ps]: { width: 150 },
                  [ts]: { width: 200 },
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.07)" },
                  a: {
                    "&:hover": { background: "transparent !important" },
                  },
                }}
              >
                <Link href="/">
                  <Image
                    alt="OpenArchive logo"
                    src={openArchiveLogo}
                    loader={loader}
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              container
              spacing={0.5}
              sx={{
                flexWrap: "nowrap",
                flexDirection: "row",
                mt: -1,
                [ps]: { mt: -2 },
                [ts]: { mt: -1 },
              }}
            >
              <Grid item>
                <IconLink
                  image={attribution}
                  size={creativeCommonsIconSize}
                  url="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  alt="Creative Commons Attribution"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={nonCommercial}
                  size={creativeCommonsIconSize}
                  url="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  alt="Creative Commons Non-Commercial"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={shareAlike}
                  size={creativeCommonsIconSize}
                  url="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  alt="Creative Commons Share-Alike"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              "&:hover": {
                filter:
                  "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
              },
            }}
          >
            <Link href="https://demch.co">
              <Box
                sx={{
                  width: 200,
                  [ps]: { width: 150 },
                  [ts]: { width: 200 },
                  cursor: "pointer",
                }}
              >
                <Image
                  alt="Site designed by demch.co"
                  src={demchco}
                  loader={loader}
                />
              </Box>
            </Link>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            sx={{
              height: "1px",
              width: "100%",
              backgroundColor: mediumGrey,
              mt: 12,
              mb: 4,
              display: "none",
              [ps]: {
                mt: 0,
                mb: 0,
                display: "block",
              },
              [ds]: {
                display: "none",
              },
            }}
          />
        </Grid>
        <Grid
          item
          container
          sx={{
            width: "60%",
            flexDirection: "row",
            [ps]: { width: "100%", flexDirection: "column" },
            [ts]: { flexDirection: "row" },
            [ds]: {
              width: "60%",
            },
          }}
        >
          <Grid
            item
            container
            direction="column"
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [ts]: { width: "50%" },
              a: { textDecoration: "none" },
            }}
            spacing={0}
          >
            <Grid item>
              <Link href="/donate">
                <Box
                  sx={{
                    ...linkStyles,
                    color: mediumBurgundy,
                    "&:hover": { color: darkBurgundy },
                  }}
                >
                  {t("donate")}
                </Box>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/jobs">
                <Box sx={linkStyles}>{t("workWithUs")}</Box>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/privacy">
                <Box sx={linkStyles}>{t("termsAndPrivacy")}</Box>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/conduct">
                <Box sx={linkStyles}>{t("codeOfConduct")}</Box>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Box
              sx={{
                height: "1px",
                width: "100%",
                backgroundColor: mediumGrey,
                mt: 12,
                mb: 4,
                display: "none",
                [ps]: {
                  display: "block",
                  mt: 4,
                  mb: 6,
                },
                [ts]: {
                  display: "none",
                  mt: 12,
                  mb: 4,
                },
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [ts]: { width: "50%" },
            }}
            justifyContent="space-between"
            spacing={1}
          >
            <Grid
              item
              container
              direction="row"
              spacing={3}
              justifyContent="flex-start"
            >
              <Grid item>
                <IconLink
                  image={twitter}
                  size={socialIconSize}
                  url="https://twitter.com/open_archive"
                  alt="Twitter logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={mastodon}
                  size="26px"
                  url="https://mstdn.social/@OpenArchive"
                  alt="Mastodon logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={instagram}
                  size={socialIconSize}
                  url="https://instagram.com/open__archive"
                  alt="Instagram logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={github}
                  size={socialIconSize}
                  url="https://github.com/openarchive"
                  alt="Github logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={linkedin}
                  size={socialIconSize}
                  url="https://linkedin.com/company/open-archive"
                  alt="LinkedIn logo"
                />
              </Grid>
              <Grid item>
                <IconLink
                  image={youtube}
                  size={socialIconSize}
                  url="https://www.youtube.com/channel/UCE91tUcpuC93VtcBvJ8vqcQ"
                  alt="YouTube logo"
                />
              </Grid>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: "1px",
                  width: "100%",
                  backgroundColor: mediumGrey,
                  display: "block",
                  [ps]: {
                    display: "none",
                  },
                  [ts]: {
                    display: "block",
                  },
                }}
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              spacing={1}
              alignItems="center"
              alignContent="center"
              sx={{
                a: { textDecoration: "none" },
                mt: 0,
                mb: 0,
                [ps]: {
                  mt: 0,
                  mb: 4,
                },
                [ts]: {
                  mt: 0,
                  mb: 0,
                },
              }}
            >
              <Grid item>
                <Box sx={{ mt: -1.5 }}>
                  <Image src={emailIcon} alt="" loader={loader} />
                </Box>
              </Grid>
              <Grid item>
                <Link href="mailto:info@open-archive.org">
                  <Box sx={linkStyles}>info[at]open-archive.org</Box>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
