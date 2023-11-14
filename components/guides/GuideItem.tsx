import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

type GuideItemProps = PropsWithChildren<{
  title: string;
  description: string;
  date: string;
  path: string;
  image: string;
}>;

export const GuideItem: FC<GuideItemProps> = ({
  title,
  description,
  date,
  path,
  image: imageName,
}) => {
  const { h5, bodyLarge } = typography;
  const { lightGrey, darkGrey, turquoise } = colors;
  const { ps, tl } = breakpoints;
  const image = require(`public/images/${imageName}`).default;

  return (
    <Link href={path}>
      <Grid
        item
        container
        flexWrap="nowrap"
        spacing={0}
        sx={{
          height: "100%",
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
          cursor: "pointer",
          ":hover": {
            ".teaserImage": {
              background: `linear-gradient(to top, ${turquoise}bb, ${turquoise}bb), url(${image.src}) center / cover`,
            },
          },
        }}
      >
        <Grid item>
          <Box
            className="teaserImage"
            sx={{
              height: "100%",
              minHeight: 200,
              width: 500,
              [ps]: { width: "100%" },
              [tl]: { width: 500 },
              border: `1px solid ${lightGrey}`,
              backgroundImage: `url(${image.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          sx={{ height: "100%", backgroundColor: lightGrey, mt: 0, p: 4 }}
        >
          <Grid item>
            <Box
              sx={{
                ...bodyLarge,
                color: darkGrey,
                mt: 2,
              }}
            >
              {date}
            </Box>
          </Grid>
          <Grid item>
            <Box component="h5" sx={h5}>
              {title}
            </Box>
          </Grid>
          <Grid item>
            <Box component="p" sx={bodyLarge}>
              {description}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};
