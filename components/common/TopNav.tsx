import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useTranslate } from "react-polyglot";
import { AppBar, Box, Grid, Drawer } from "@mui/material";
import { colors, typography, loader, breakpoints } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";
import { MobileMenu } from "components/common/MobileMenu";
import { IconLink } from "components/common/IconLink";
import openArchiveLogo from "public/images/open-archive.svg";
import search from "public/images/search.svg";
import twitter from "public/images/twitter-grey.svg";
import mastodon from "public/images/mastodon-grey.svg";
import instagram from "public/images/instagram-grey.svg";
import github from "public/images/github-grey.svg";
import menuIcon from "public/images/menu-icon.svg";

const MenuButton = dynamic(
  () => import("components/common/MenuButton").then((mod) => mod.MenuButton),
  {
    ssr: false,
  },
);

export const TopNav = () => {
  const ref = useRef(null);
  const router = useRouter();
  const t = useTranslate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { white, turquoise, mediumBurgundy, darkBurgundy } = colors;
  const { body } = typography;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const menuItemProps = {
    ...body,
    fontWeight: 600,
    width: "100%",
    display: "block",
    color: white,
    py: 1,
    px: 4,
    my: 1,
    mx: 0,
    textDecoration: "none",
    "&:hover": {
      color: turquoise,
      backgroundColor: white,
    },
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        opacity: 0.95,
        height: 90,
        [ps]: { height: 50 },
        [ts]: { height: 80 },
        [dl]: { height: 90 },
        p: 0,
        m: 0,
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        spacing={0}
        sx={{ height: "100%" }}
      >
        <Grid item>
          <Box
            sx={{
              maxWidth: 1600,
              m: "0 auto",
              width: "100%",
              px: 11.25,
              [ps]: { px: 3 },
              [pl]: { px: 3 },
              [ts]: { px: 6 },
              [tl]: { px: 6 },
              [ds]: { px: 6.25 },
              [dl]: { px: 11.25 },
            }}
          >
            <Grid
              item
              container
              direction="row"
              justifyContent="space-between"
              flexWrap="nowrap"
              alignItems="center"
              alignContent="center"
            >
              <Grid item sx={{ mt: 0.5 }} xs="auto">
                <Link href="/">
                  <Box
                    sx={{
                      width: 200,
                      [ps]: {
                        width: 150,
                      },
                      [ts]: { width: 200 },
                    }}
                  >
                    <Image alt="" src={openArchiveLogo} loader={loader} />
                  </Box>
                </Link>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                flexWrap="nowrap"
                sx={{
                  display: "flex",
                  [ps]: {
                    display: "none",
                  },
                  [ts]: {
                    display: "flex",
                  },
                }}
              >
                <Grid item flexGrow={1}>
                  <Box />
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  flexWrap="nowrap"
                  spacing={4}
                  xs="auto"
                  ref={ref}
                >
                  <Grid
                    item
                    container
                    direction="column"
                    justifyContent="center"
                    sx={{
                      display: "inherit",
                      [ps]: {
                        display: "none",
                      },
                      [ds]: {
                        display: "inherit",
                      },
                      "a:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <Grid item sx={{ height: "24px", mt: "2px" }}>
                      <IconLink
                        image={search}
                        size="24px"
                        url="/search"
                        alt="Search"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    justifyContent="space-around"
                    sx={{
                      display: "initial",
                      [ps]: {
                        display: "none",
                      },
                      [ds]: {
                        display: "initial",
                      },
                    }}
                  >
                    <MenuButton title={t("ourWork")} href="/save">
                      <Grid
                        container
                        direction="column"
                        spacing={0}
                        sx={{ background: turquoise, width: 200 }}
                      >
                        <Grid item>
                          <Link href="/save">
                            <Box sx={menuItemProps}>{t("saveApp")}</Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/guides">
                            <Box sx={menuItemProps}>{t("guides")}</Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/programs">
                            <Box sx={menuItemProps}>{t("programs")}</Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/programs/our-users">
                            <Box
                              sx={{ ...menuItemProps, ml: 3, mt: -1, mb: 0 }}
                            >
                              {t("ourUsers")}
                            </Box>
                          </Link>
                        </Grid>
                      </Grid>
                    </MenuButton>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "initial",
                      [ps]: {
                        display: "none",
                      },
                      [ds]: {
                        display: "initial",
                      },
                    }}
                  >
                    <MenuButton title={t("about")} href="/about">
                      <Grid
                        container
                        direction="column"
                        spacing={0}
                        sx={{ background: turquoise }}
                      >
                        <Grid item>
                          <Link href="/about">
                            <Box sx={menuItemProps}>{t("aboutUs")}</Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/team">
                            <Box sx={menuItemProps}>{t("team")}</Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/partner">
                            <Box sx={menuItemProps}>{t("partnerWithUs")}</Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/jobs">
                            <Box sx={menuItemProps}>{t("workWithUs")}</Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/contact">
                            <Box sx={menuItemProps}>{t("contactUs")}</Box>
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="/faq">
                            <Box sx={menuItemProps}>{t("faq")}</Box>
                          </Link>
                        </Grid>
                      </Grid>
                    </MenuButton>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "initial",
                      [ps]: {
                        display: "none",
                      },
                      [ds]: {
                        display: "initial",
                      },
                    }}
                  >
                    <MenuButton title={t("news")} href="/news" />
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    justifyContent="space-around"
                  >
                    <Grid item>
                      <FilledButton
                        textColor={white}
                        backgroundColor={mediumBurgundy}
                        highlightColor={darkBurgundy}
                        onClick={() => router.push("/donate")}
                      >
                        {t("donate")}
                      </FilledButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="flex-end"
                  flexWrap="nowrap"
                  spacing={3}
                  sx={{ width: "220px" }}
                >
                  <Grid item>
                    <IconLink
                      image={twitter}
                      size="24px"
                      url="https://twitter.com/open_archive"
                      alt="Twitter logo"
                    />
                  </Grid>
                  <Grid item>
                    <IconLink
                      image={mastodon}
                      size="22px"
                      url="https://mstdn.social/@OpenArchive"
                      alt="Mastodon logo"
                    />
                  </Grid>
                  <Grid item>
                    <IconLink
                      image={instagram}
                      size="24px"
                      url="https://instagram.com/open__archive"
                      alt="Instagram logo"
                    />
                  </Grid>
                  <Grid item>
                    <IconLink
                      image={github}
                      size="24px"
                      url="https://github.com/openarchive"
                      alt="Github logo"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Box
                  onClick={() => setDrawerOpen(true)}
                  sx={{
                    display: "none",
                    [ps]: {
                      display: "initial",
                    },
                    [ds]: {
                      display: "none",
                    },
                    ml: 3,
                  }}
                >
                  <Image src={menuIcon} alt="menu" loader={loader} />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <MobileMenu closeMenu={() => setDrawerOpen(false)} />
          </Drawer>
        </Grid>
      </Grid>
    </AppBar>
  );
};
