import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints, loader } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import { PageSection } from "components/common/PageSection";
import saveHeader from "public/images/Save/Save-top-image.png";
import saveLogo from "public/images/save-logo.png";
import saveHand from "public/images/save-hand.png";

export const HeaderSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey, white } = colors;
  const { bodyLarge } = typography;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const [title, description, appStoreButtons, ...rest] = children as any[];

  return (
    <>
      <BaseHeaderSection
        backgroundColor={lightGrey}
        sx={{
          mb: -1,
          py: 13,
          pb: 0,
          px: 11.25,
          [ps]: {
            py: 6,
            px: 3,
            pb: 0,
          },
          [pl]: {
            py: 6,
            px: 3,
            pb: 0,
          },
          [ts]: {
            py: 7,
            px: 4.375,
            pb: 0,
          },
          [tl]: {
            py: 9,
            px: 4.375,
            pb: 0,
          },
          [ds]: {
            py: 13,
            px: 6.25,
            pb: 0,
          },
          [dl]: {
            py: 13,
            px: 11.25,
            pb: 0,
          },
        }}
      >
        <Grid
          container
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [ts]: { flexDirection: "row" },
          }}
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
            <Grid item container direction="row" spacing="30px">
              <Grid item>
                <Box
                  sx={{
                    width: "90px",
                    mt: "12px",
                  }}
                >
                  <Image src={saveLogo} loader={loader} alt="Save logo" />
                </Box>
              </Grid>
              <Grid item>{title}</Grid>
            </Grid>
            <Grid item container direction="column">
              <Grid item>
                <Box sx={{ "> p": bodyLarge, maxWidth: "550px" }}>
                  {description}
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    mb: "60px",
                    "& img": {
                      float: "left !important",
                      height: "70px !important",
                      pt: "15px !important",
                      pr: "5px !important",
                      ":hover": {
                        backgroundColor: "transparent !important",
                      },
                    },
                  }}
                >
                  {appStoreButtons}
                </Box>
              </Grid>
            </Grid>
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
          >
            <Grid item>
              <Box sx={{ width: "100%" }}>
                <Image src={saveHeader} loader={loader} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </BaseHeaderSection>
      <PageSection backgroundColor={white}>
        <Grid
          container
          spacing={3}
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [ts]: { flexDirection: "row" },
          }}
        >
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [ts]: { width: "50%" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${saveHand.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [ts]: { width: "50%" },
            }}
          >
            <Box sx={{ p: 3, "> p": bodyLarge }}>{rest}</Box>
          </Grid>
        </Grid>
      </PageSection>
    </>
  );
};
