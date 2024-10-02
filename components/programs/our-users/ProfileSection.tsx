import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { Grid, Box } from "@mui/material";
import { colors, loader, typography, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { loadImage } from "lib/frontendHelpers";
import quotationMark from "public/images/quote.svg";

export const ProfileSection: FC<PropsWithChildren> = ({ children }) => {
  const { white, lightGrey, mediumGrey, turquoise } = colors;
  const { bodyLarge } = typography;
  const { ps, ts } = breakpoints;
  const [first, name, stats, quote, ...details] = children as any[];
  const image = loadImage(first);
  const hasQuote =
    quote?.props?.children?.join("").replace(/[\n ]+/g, "") !== "";

  return (
    <>
      <PageSection
        backgroundColor={lightGrey}
        sx={{
          pb: "0 !important",
          "> a": { textDecoration: "none !important" },
        }}
      >
        <Link href="/research">
          <Box
            sx={{
              ...bodyLarge,
              fontWeight: "bold",
              color: turquoise,
              mt: 3,
            }}
          >
            ❮ All use cases
          </Box>
        </Link>
      </PageSection>
      <PageSection backgroundColor={lightGrey}>
        <Grid container direction="column">
          <Grid
            item
            container
            sx={{
              flexDirection: "row",
              flexWrap: "nowrap",
              [ps]: { flexDirection: "column", flexWrap: "wrap" },
              [ts]: { flexDirection: "row", flexWrap: "nowrap" },
            }}
          >
            <Grid item>
              <Box
                sx={{
                  width: 300,
                  [ps]: { width: "100%" },
                  [ts]: { width: 300 },
                }}
              >
                <Image src={image} alt="" loader={loader} />
              </Box>
            </Grid>
            <Grid
              item
              container
              direction="column"
              sx={{ mx: 3, [ps]: { mx: 1 }, [ts]: { mx: 3 } }}
            >
              <Grid item>{name}</Grid>
              <Grid item>
                <Box
                  sx={{
                    table: {
                      borderCollapse: "collapse",
                      borderSpacing: 0,
                      width: "100%",
                    },
                    tr: {
                      borderTop: `1px solid ${mediumGrey}`,
                    },
                    "thead > tr": {
                      borderTop: 0,
                    },
                    td: { ...bodyLarge, py: 2 },
                    "td:nth-of-type(odd)": {
                      color: turquoise,
                      fontWeight: "bold",
                      minWidth: 320,
                      pr: 2,
                      [ps]: { minWidth: 0 },
                      [ts]: { minWidth: 320 },
                    },
                  }}
                >
                  {stats}
                </Box>
              </Grid>
              <Grid item sx={!hasQuote ? { display: "none" } : { mt: 6 }}>
                <Box sx={{ width: 80 }}>
                  <Image
                    src={!hasQuote ? { display: "none" } : quotationMark}
                    alt=""
                    loader={loader}
                  />
                </Box>
                <Box sx={{ mt: 1, "> blockquote": bodyLarge }}>{quote}</Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="row" wrap="nowrap">
            <Grid item>
              <Box
                sx={{
                  width: 320,
                  [ps]: { width: "100%" },
                  [ts]: { width: 320 },
                }}
              >
                {" "}
              </Box>
            </Grid>
            <Grid item sx={{ mt: 6 }}>
              <Box
                sx={{
                  backgroundColor: white,
                  p: 3,
                  "td:nth-of-type(odd)": { textAlign: "center" },
                  "td:nth-of-type(even)": { p: 2 },
                  "& img": { width: "50px !important" },
                }}
              >
                {details}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </PageSection>
    </>
  );
};
