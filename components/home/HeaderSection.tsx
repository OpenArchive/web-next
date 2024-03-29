import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import mainPage1 from "public/images/main-page-1.png";
import mainPage2 from "public/images/MainPage/main-page-1.png";

export const HeaderSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column-reverse", pt: 0 },
          [tl]: { flexDirection: "row", pt: 8 },
          pt: 8,
        }}
        columnSpacing={6}
      >
        <Grid
          container
          direction="column"
          item
          sx={{
            width: "50%",
            [ps]: {
              width: "100%",
            },
            [tl]: {
              width: "50%",
            },
          }}
        >
          <Grid item>{first}</Grid>
          <Grid
            item
            container
            direction="column"
            sx={{
              mb: 12,
              [ps]: { mb: 0 },
              [tl]: { mb: 12 },
            }}
          >
            <Grid item>
              <Box sx={{ "> p": bodyLarge }}>{rest}</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          sx={{
            width: "50%",
            [ps]: {
              width: "100%",
            },
            [tl]: {
              width: "50%",
            },
          }}
        >
          <Grid
            item
            sx={{
              height: "100%",
              width: "80%",
            }}
          >
            <Box
              sx={{ width: "100%", [ps]: { mb: 0 }, [tl]: { mb: 0 }, mb: 0 }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: 700,
                  [ps]: {
                    height: 350,
                  },
                  [pl]: {
                    height: 350,
                  },
                  [ts]: {
                    height: 550,
                  },
                  [tl]: {
                    height: 550,
                  },
                  [ds]: {
                    height: 550,
                  },
                  [dl]: {
                    height: 700,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "65%",
                    top: 0,
                    left: 0,
                    zIndex: 100,
                    height: 300,
                    [ps]: {
                      height: 100,
                    },
                    [pl]: {
                      height: 100,
                    },
                    [ts]: {
                      height: 200,
                    },
                    [tl]: {
                      height: 300,
                    },
                    [ds]: {
                      height: 350,
                    },
                    [dl]: {
                      height: 400,
                    },
                  }}
                >
                  <Image src={mainPage1} alt="" loader={loader} priority />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "65%",
                    top: "35%",
                    left: "35%",
                    height: 300,
                    [ps]: {
                      height: 100,
                    },
                    [pl]: {
                      height: 100,
                    },
                    [ts]: {
                      height: 200,
                    },
                    [tl]: {
                      height: 300,
                    },
                    [ds]: {
                      height: 350,
                    },
                    [dl]: {
                      height: 400,
                    },
                  }}
                >
                  <Image src={mainPage2} alt="" loader={loader} priority />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};
