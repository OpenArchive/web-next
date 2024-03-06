import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { loadImage } from "lib/frontendHelpers";

export const ArticleHeaderSection: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const pathComponents = router.pathname.split("/");
  const section = pathComponents.at(-2);
  const { white, lightGrey, darkGrey, turquoise } = colors;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const { bodyLarge } = typography;
  const [first, date, category, title, ...description] = children as any[];
  const image = loadImage(first);

  return (
    <Box>
      <PageSection
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
          justifyContent="space-around"
          sx={{
            position: "relative",
            flexDirection: "column",
          }}
        >
          <Grid item sx={{ my: 3 }}>
            <Link href={`/${section}`}>
              <Box
                sx={{
                  "&:hover": {
                    color: turquoise,
                  },
                  textDecoration: "none !important",
                  "> p": {
                    ...bodyLarge,
                    fontWeight: "bold",
                  },
                }}
              >
                ❮ All {section}
              </Box>
            </Link>
          </Grid>
          <Grid item container direction="column">
            <Grid item container direction="row" spacing={3} sx={{ mb: 3 }}>
              <Grid item>
                <Box sx={{ color: darkGrey }}>{date}</Box>
              </Grid>
              <Grid item>
                <Box sx={{ color: turquoise }}>{category}</Box>
              </Grid>
            </Grid>
            <Grid item>{title}</Grid>
            <Grid item sx={{ width: "75%" }}>
              <Box
                sx={{
                  "& p": bodyLarge,
                }}
              >
                {description}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </PageSection>
      <Box
        sx={{
          width: "100%",
          height: 300,
          background: `linear-gradient(to bottom, ${lightGrey} 50%, ${white} 50%)`,
          p: 3,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            maxWidth: 900,
            margin: "0 auto",
            backgroundImage: `url(${image.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Box>
    </Box>
  );
};
